import { spawn } from 'child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9234',
  '--disable-gpu',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9234/json/list')).json();
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('CONSOLE:', msg.params.args.map(a => a.value || a.description).join(' '));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.log('EXCEPTION:', JSON.stringify(msg.params.exceptionDetails));
      }
    };
    await new Promise(r => ws.onopen = r);
    function send(method, params = {}) {
      return new Promise(res => {
        const reqId = id++;
        callbacks.set(reqId, res);
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    }

    await send('Runtime.enable');
    await send('Page.enable');
    await send('Page.navigate', { url: 'http://localhost:5173' });
    await new Promise(r => setTimeout(r, 4000));

    const check = await send('Runtime.evaluate', {
      expression: 'document.getElementById("root")?.innerHTML?.length'
    });
    console.log('Root innerHTML length:', check.result.result.value);

    chrome.kill();
    process.exit(0);
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

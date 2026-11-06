import { spawn } from 'child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9231',
  '--disable-gpu',
  'http://localhost:5173'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9231/json/list')).json();
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({ id: 1, method: 'Console.enable' }));
      ws.send(JSON.stringify({ id: 2, method: 'Log.enable' }));
      ws.send(JSON.stringify({ id: 3, method: 'Runtime.enable' }));
    };
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.method === 'Runtime.consoleAPICalled' || msg.method === 'Log.entryAdded' || msg.method === 'Runtime.exceptionThrown') {
        console.log('Browser log/error:', JSON.stringify(msg));
      }
    };
    setTimeout(() => {
      chrome.kill();
      process.exit(0);
    }, 4000);
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 2000);

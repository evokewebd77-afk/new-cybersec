import { spawn } from 'child_process';
import fs from 'fs';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9233',
  '--disable-gpu',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9233/json/list')).json();
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);
    let id = 1;
    const callbacks = new Map();
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
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

    await send('Page.enable');
    await send('Page.navigate', { url: 'http://localhost:5173' });
    await new Promise(r => setTimeout(r, 4000));

    const res = await send('Runtime.evaluate', { expression: 'document.body.innerHTML' });
    fs.writeFileSync('dom_dump.html', res.result.result.value || '');
    console.log('Saved dom_dump.html, length:', (res.result.result.value || '').length);
    chrome.kill();
    process.exit(0);
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

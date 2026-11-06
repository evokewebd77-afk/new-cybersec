import { spawn } from 'child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9229',
  '--disable-gpu',
  'http://localhost:5173'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9229/json/list')).json();
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: 'JSON.stringify([...document.querySelectorAll(".hero-slide-img")].map(i => ({ src: i.src, complete: i.complete, w: i.naturalWidth, h: i.naturalHeight, currentSrc: i.currentSrc })))' }
      }));
    };
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === 1) {
        console.log('Images status:', msg.result.result.value);
        chrome.kill();
      }
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 3000);

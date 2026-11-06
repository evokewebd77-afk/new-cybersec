import { spawn } from 'child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9232',
  '--disable-gpu',
  'about:blank'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9232/json/list')).json();
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
    await new Promise(r => setTimeout(r, 3500));

    const res = await send('Runtime.evaluate', {
      expression: `
        JSON.stringify({
          heroExists: !!document.querySelector('.hero-section'),
          slidesCount: document.querySelectorAll('.hero-slide').length,
          activeSlideImg: document.querySelector('.hero-slide.active img')?.src,
          imgComplete: document.querySelector('.hero-slide.active img')?.complete,
          imgWidth: document.querySelector('.hero-slide.active img')?.naturalWidth,
          dotsCount: document.querySelectorAll('.hero-slider-dot').length
        })
      `
    });

    console.log('Result:', res.result.result.value);
    chrome.kill();
    process.exit(0);
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 1500);

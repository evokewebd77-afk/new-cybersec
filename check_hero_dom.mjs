import { spawn } from 'child_process';

const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9230',
  '--disable-gpu',
  '--window-size=1440,900',
  'http://localhost:5173'
]);

setTimeout(async () => {
  try {
    const list = await (await fetch('http://localhost:9230/json/list')).json();
    const ws = new WebSocket(list[0].webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: { expression: `
          JSON.stringify({
            section: document.querySelector('.hero-section')?.getBoundingClientRect(),
            track: document.querySelector('.hero-slider-track')?.getBoundingClientRect(),
            activeSlide: document.querySelector('.hero-slide.active')?.getBoundingClientRect(),
            img: document.querySelector('.hero-slide.active img')?.getBoundingClientRect(),
            slidesCount: document.querySelectorAll('.hero-slide').length,
            dotsCount: document.querySelectorAll('.hero-slider-dot').length
          })
        ` }
      }));
    };
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === 1) {
        console.log('DOM metrics:', msg.result.result.value);
        chrome.kill();
      }
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
  }
}, 3000);

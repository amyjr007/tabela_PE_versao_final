/* AS FOTOS DO CARROSSEL DOS SLIDES
   Fotografa cada slide com tabela no estado em que o aluno o encontra ao
   chegar — a mesa posta, os cubos assentados, sem a tabela viva a mexer —
   e grava em Imagens/slides/. São dois jogos: 'pc' (o palco de 1280 × 720)
   e 'cel' (o celular deitado, com a mesa na medida do celular, que passa
   do palco: a foto leva 100 px de palco a mais de cada lado).

   Refazer sempre que o desenho de um slide mudar:
     node ferramentas/gera-miniaturas.mjs
   Precisa do Node 22 ou mais novo e do Google Chrome instalado. */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DESTINO = path.join(RAIZ, 'Imagens', 'slides');
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
/* pixels da foto por pixel do palco. No celular a foto é menor: lá ela
   aparece pequena no carrossel, e fotos grandes enchiam a memória da
   placa de vídeo — o celular perdia pedaços delas, e elas tremiam */
const ESCALA = { pc:1.25, cel:0.8 };
const MARGEM_CEL = 100;   /* o que a foto do celular leva além do palco, de cada lado */
const PORTA = 8791, DEPURA = 9391;

fs.mkdirSync(DESTINO, { recursive: true });
const tipos = { '.html':'text/html', '.js':'text/javascript', '.png':'image/png', '.jpg':'image/jpeg',
                '.webp':'image/webp', '.mp3':'audio/mpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2' };
const srv = http.createServer((q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]);
  if (p === '/') p = '/tabela-periodica.html';
  const f = path.join(RAIZ, p);
  fs.readFile(f, (e, d) => {
    if (e){ r.writeHead(404); r.end(); return; }
    r.writeHead(200, { 'Content-Type': tipos[path.extname(f).toLowerCase()] || 'application/octet-stream' });
    r.end(d);
  });
}).listen(PORTA);

const perfil = fs.mkdtempSync(path.join(os.tmpdir(), 'miniaturas-'));
/* mudo: o Chrome invisível tocaria a narração e as aberturas nas caixas
   de som de quem estiver ao computador */
const chrome = spawn(CHROME, ['--headless=new', '--mute-audio', '--remote-debugging-port=' + DEPURA,
  '--user-data-dir=' + perfil, '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const espera = ms => new Promise(ok => setTimeout(ok, ms));
let alvo;
for (let i = 0; i < 60 && !alvo; i++){
  await espera(250);
  try { alvo = (await (await fetch('http://127.0.0.1:' + DEPURA + '/json')).json()).find(t => t.type === 'page'); } catch (_) {}
}
if (!alvo){ console.error('O Chrome não abriu.'); process.exit(1); }
const ws = new WebSocket(alvo.webSocketDebuggerUrl);
await new Promise(ok => ws.onopen = ok);
let id = 0;
const pend = new Map();
ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)){ pend.get(d.id)(d); pend.delete(d.id); } };
const cmd = (method, params = {}) => new Promise(ok => { const i = ++id; pend.set(i, ok); ws.send(JSON.stringify({ id:i, method, params })); });
const js = async expr => (await cmd('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value;
await cmd('Page.enable');
await cmd('Runtime.enable');

const JOGOS = {
  pc:  { width:1280, height:720, deviceScaleFactor:1, mobile:false },
  cel: { width:844,  height:390, deviceScaleFactor:1, mobile:true, screenWidth:844, screenHeight:390 }
};
let feitas = 0;
for (const [nome, metr] of Object.entries(JOGOS)){
  await cmd('Emulation.setDeviceMetricsOverride', metr);
  await cmd('Page.navigate', { url: 'http://127.0.0.1:' + PORTA + '/?miniaturas' });
  await espera(3000);
  const total = await js('SLIDES.length');
  for (let i = 1; i < total; i++){
    /* a tabela viva não pode girar ninguém durante a foto */
    await js('VIDA.desliga(); VIDA.liga = () => {}; 1');
    await js('go(' + i + ')');
    await espera(3200);
    /* só o slide: os botões do palco não entram na foto */
    await js(`['som','som-dica','vel','versao','ver-slides','progress','puxador','nav-alca','aviso','coord']
      .forEach(id => { const e = document.getElementById(id); if (e) e.style.visibility = 'hidden'; }); 1`);
    const r = await js(`(() => { const r = stage.getBoundingClientRect();
      return { x:r.left, y:r.top, w:r.width, h:r.height, fit:fitScale }; })()`);
    const margem = nome === 'cel' ? MARGEM_CEL * r.fit : 0;
    const shot = await cmd('Page.captureScreenshot', { format:'webp', quality:82,
      clip:{ x:r.x - margem, y:r.y, width:r.w + 2*margem, height:r.h, scale: ESCALA[nome] / r.fit } });
    const arq = path.join(DESTINO, nome + '-' + String(i).padStart(2, '0') + '.webp');
    fs.writeFileSync(arq, Buffer.from(shot.result.data, 'base64'));
    await js(`['som','som-dica','vel','versao','ver-slides','progress','puxador','nav-alca','aviso','coord']
      .forEach(id => { const e = document.getElementById(id); if (e) e.style.visibility = ''; }); 1`);
    console.log(path.relative(RAIZ, arq), Math.round(fs.statSync(arq).size / 1024) + ' KB');
    feitas++;
  }
}
console.log(feitas + ' fotos.');
ws.close(); chrome.kill(); srv.close();
setTimeout(() => { try { fs.rmSync(perfil, { recursive: true, force: true }); } catch (_) {} process.exit(0); }, 500);

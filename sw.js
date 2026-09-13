/* ============================================================
   O SERVIÇO QUE GUARDA O APP
   O aluno abre isto no celular dele, muitas vezes sem dados. Guardada
   a casca aqui — a página, as fontes, os ícones e as narrações —, o
   app abre sem rede nenhuma.

   A CHAVE DO CACHE LEVA A VERSÃO. Trocando a versão, o nome muda, o
   cache velho é apagado na ativação e o novo se enche do zero: é
   assim que uma atualização chega a um aparelho já instalado.

   AS NARRAÇÕES ENTRAM AQUI. Cada áudio novo que a aula ganhar deve
   ser acrescentado à lista, e a VERSÃO subida — senão o aparelho
   continua a servir a casca velha, sem ele.
   ============================================================ */
/* a versão vem da página, no endereço com que ela regista este serviço
   (sw.js?v=…): assim há uma versão só, e subi-la na página basta */
const VERSAO = new URL(self.location).searchParams.get('v') || 'dev';
const CACHE  = 'tabela-periodica-aluno-' + VERSAO;

const CASCA = [
  './',
  './index.html',
  './tabela-periodica.html',
  './manifest.webmanifest',
  './icones/icone-192.png',
  './icones/icone-512.png',
  './icones/icone-maskable-192.png',
  './icones/icone-maskable-512.png',
  './icones/icone.svg',
  './Imagens/amauri_jr.jpg',
  './Audios/audio_tabela_0.mp3',
  './Audios/audio_tabela_1.mp3',
  './Audios/audio_tabela_1.1.mp3',
  './Audios/audio_tabela_1.2.mp3',
  './Audios/audio_tabela_1.3A.mp3',
  './Audios/audio_tabela_1.3B.mp3',
  './Audios/vfx/funfare.mp3',
  './Audios/vfx/applause.mp3',
  './Audios/vfx/exato!.mp3',
  './Audios/vfx/error.mp3',
  './Audios/vfx/perfeito.mp3',
  './Audios/vfx/eesseaqui.mp3',
  './Audios/vfx/sómaisesse.mp3',
  './Audios/vfx/Calmanaproximaacerta.mp3',
  './Audios/vfx/statistics.mp3',
  './Audios/vfx/muitobem.mp3',
  './Audios/vfx/issomesmo!.mp3',
  './Audios/vfx/excelente.mp3',
  './Audios/vfx/próximo.mp3',
  './Audios/audio_tabela_1.4.mp3',
  './Audios/audio_tabela_1_jogo_memória.mp3',
  './Audios/audio_tabela_1_jogo_memória_fim.mp3',
  './Audios/audio_tabela_2.mp3',
  './Audios/audio_tabela_2.1.mp3',
  './Audios/audio_tabela_2.2.mp3',
  './Audios/audio_tabela_2.3.mp3',
  './Audios/audio_tabela_2.4.mp3',
  './Audios/audio_tabela_2.5.mp3',
  './Audios/audio_tabela_2.5A.mp3',
  './Audios/audio_tabela_2.5B.mp3',
  './Audios/audio_tabela_3.mp3',
  './Audios/quiz1.mp3',
  './Imagens/henry_moseley.jpg',
  './Audios/vfx/flipcard.mp3',
  './Audios/vfx/right.mp3',
  './fontes/fontes.css',
  './fontes/space-grotesk-normal-latin.woff2',
  './fontes/space-grotesk-normal-latin-ext.woff2',
  './fontes/ibm-plex-sans-normal-latin.woff2',
  './fontes/ibm-plex-sans-normal-latin-ext.woff2',
  './fontes/ibm-plex-sans-400-italic-latin.woff2',
  './fontes/ibm-plex-sans-400-italic-latin-ext.woff2',
  './fontes/ibm-plex-mono-400-normal-latin.woff2',
  './fontes/ibm-plex-mono-400-normal-latin-ext.woff2',
  './fontes/ibm-plex-mono-500-normal-latin.woff2',
  './fontes/ibm-plex-mono-500-normal-latin-ext.woff2'
];

self.addEventListener('install', (ev) => {
  /* addAll é tudo-ou-nada: um arquivo que falte derruba a instalação
     inteira — e as narrações ainda não estão todas gravadas. Aqui cada
     um vai por si, e o que faltar simplesmente não entra. */
  ev.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(CASCA.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys()
      .then(nomes => Promise.all(nomes.filter(n => n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* A PÁGINA VEM DA REDE PRIMEIRO. É ela que traz a versão nova; servida
     do cache, o aparelho abriria a versão velha depois de cada mudança e
     só veria a nova na abertura seguinte. Sem rede, vale a guardada. */
  if (req.mode === 'navigate'){
    ev.respondWith(
      fetch(req).then(resp => {
        if (resp && resp.ok){ const copia = resp.clone(); caches.open(CACHE).then(c => c.put(req, copia)); }
        return resp;
      }).catch(() => caches.match(req).then(g => g || caches.match('./tabela-periodica.html')))
    );
    return;
  }

  /* PRIMEIRO O QUE ESTÁ GUARDADO, e a rede atrás para atualizar.
     Sem internet, o app abre na hora; havendo rede, a cópia guardada
     se renova para a próxima vez. */
  ev.respondWith(
    caches.match(req).then(guardado => {
      const daRede = fetch(req).then(resp => {
        if (resp && resp.ok) caches.open(CACHE).then(c => c.put(req, resp.clone()));
        return resp;
      }).catch(() => guardado);
      return guardado || daRede;
    })
  );
});

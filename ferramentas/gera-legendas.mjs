/* AS LEGENDAS DAS NARRAÇÕES
   Ouve cada narração da pasta Audios (as falas, não os efeitos da vfx)
   com o Whisper que vem dentro do ffmpeg e escreve legendas.js, que a
   página carrega: { 'audio_tabela_1': [[início, fim, 'texto'], …], … }.

   Refazer sempre que uma narração for regravada ou acrescentada:
     node ferramentas/gera-legendas.mjs caminho/do/ggml-large-v3-turbo.bin
   Precisa do ffmpeg 8 ou mais novo (com o filtro whisper) e do modelo,
   baixado de huggingface.co/ggerganov/whisper.cpp.

   O legendas.js pode ser corrigido à mão: é só texto. Mas refazê-lo
   apaga as correções — corrija de novo, ou corrija só o áudio novo. */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MODELO = process.argv[2] && path.resolve(process.argv[2]);
if (!MODELO || !fs.existsSync(MODELO)){ console.error('Diga onde está o modelo do Whisper (ggml-….bin).'); process.exit(1); }
/* SRT=pasta: aproveita as transcrições .srt já feitas, sem ouvir de novo */
const JA = process.env.SRT;

/* uma legenda cabe em duas linhas no palco */
const MAX = 84;
/* o Whisper, no silêncio do fim, inventa os créditos das legendas de vídeo */
const INVENTADO = /legenda|inscreva|obrigad[oa] por assistir|amara\.org|^\W*$/i;

const seg = s => { const [h, m, r] = s.replace(',', '.').split(':'); return +h * 3600 + +m * 60 + +r; };
function leSrt(txt){
  return txt.replace(/\r/g, '').split(/\n\n+/).map(b => {
    const l = b.trim().split('\n');
    const i = l.findIndex(x => x.includes('-->'));
    if (i < 0) return null;
    const [a, z] = l[i].split('-->').map(x => seg(x.trim()));
    return [a, z, corrige(l.slice(i + 1).join(' ').trim())];
  }).filter(c => c && c[2] && !INVENTADO.test(c[2]));
}
/* O QUE O WHISPER ESCREVE ERRADO, e o certo: nomes, e os símbolos que
   ele ouve como palavras. Vale para toda transcrição nova */
const CORRIGE = [
  [/Amaury Jr\./g, 'Amauri Junior.'], [/Amaury Jr/g, 'Amauri Junior'], [/Amaury/g, 'Amauri'],
  [/Mosley/g, 'Moseley'],
  [/\bCA\b/g, 'Ca'],
  [/"NA"/g, 'Na'], [/\bNA\b/g, 'Na'], [/\bN-A\b/g, 'Na'],
  [/"pb"/gi, 'Pb'], [/\bP-B\b/g, 'Pb'],
  [/"c-u"/gi, 'Cu'], [/\bC-U\b/g, 'Cu'],
  /* o roteiro (Tabela_Periódica_textos_NOVA.docx) fala como se fala:
     "pra" e "tá". O Whisper escreve "para" e "está" — e o "Para aí!"
     do critério 2 é o verbo, que fica */
  /* (o \b do JavaScript não vê o "á" como letra: daí a palavra inteira
     marcada à mão, com \p{L}) */
  [/(?<!\p{L})Para aí(?!\p{L})/gu, 'Pára aí'],
  [/(?<!\p{L})para(?!\p{L})/gu, 'pra'], [/(?<!\p{L})Para(?!\p{L})/gu, 'Pra'],
  [/(?<!\p{L})está(?!\p{L})/gu, 'tá'], [/(?<!\p{L})Está(?!\p{L})/gu, 'Tá'],
  [/(?<!\p{L})pra a (gente|primeira)(?!\p{L})/gu, 'pra $1'],
  [/(?<!\p{L})pra o(?!\p{L})/gu, 'pro'], [/(?<!\p{L})pra os(?!\p{L})/gu, 'pros'],
  [/"nátrium"/gi, 'natrium'],
  [/"plumbum"/gi, 'plumbum'],
  [/"cuprum"/gi, 'cuprum']
];
const corrige = t => CORRIGE.reduce((s, [de, para]) => s.replace(de, para), t);

/* a fala longa se parte em pedaços de tamanho parecido, cada corte no
   ponto ou na vírgula mais perto (ou, sem eles, no espaço mais perto);
   o tempo se reparte pelas letras */
function parte([a, z, txt]){
  if (txt.length <= MAX) return [[a, z, txt]];
  const pedacos = [];
  let resto = txt;
  for (let n = Math.ceil(txt.length / MAX); n > 1; n--){
    const alvo = resto.length / n;
    const perto = (lista, folga) => {
      let melhor = -1;
      for (let i = 1; i < resto.length - 1; i++){
        if (!lista.some(p => resto.startsWith(p, i))) continue;
        if (Math.abs(i - alvo) <= folga && i <= MAX && (melhor < 0 || Math.abs(i - alvo) < Math.abs(melhor - alvo))) melhor = i;
      }
      return melhor;
    };
    let corte = perto(['. ', '? ', '! ', '; ', ': ', ', '], alvo * 0.35);
    if (corte < 0) corte = perto([' '], alvo);
    if (corte < 0) corte = Math.min(MAX, Math.round(alvo));
    pedacos.push(resto.slice(0, corte + 1).trim());
    resto = resto.slice(corte + 1).trim();
  }
  if (resto) pedacos.push(resto);
  const total = pedacos.reduce((s, p) => s + p.length, 0);
  let t = a;
  return pedacos.map(p => { const d = (z - a) * p.length / total; const c = [t, t + d, p]; t += d; return c; });
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'legendas-'));
const saida = {};
const audios = fs.readdirSync(path.join(RAIZ, 'Audios')).filter(f => f.toLowerCase().endsWith('.mp3')).sort();
for (const f of audios){
  const nome = f.slice(0, -4);
  let srt;
  if (JA && fs.existsSync(path.join(JA, nome + '.srt'))) srt = fs.readFileSync(path.join(JA, nome + '.srt'), 'utf8');
  else {
    /* o filtro do ffmpeg não aceita os dois-pontos de C:\ no caminho:
       ele roda na pasta do modelo e escreve ali ao lado, em nomes curtos */
    fs.copyFileSync(path.join(RAIZ, 'Audios', f), path.join(tmp, 'in.mp3'));
    const r = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-i', path.join(tmp, 'in.mp3'), '-af',
      'whisper=model=' + path.basename(MODELO) + /* queue: o áudio inteiro de uma vez (até 200 s). Em pedaços de 20 s, o
         Whisper repetia ou comia palavras na emenda */
      ':language=pt:queue=200:destination=legenda.srt:format=srt', '-f', 'null', '-'],
      { cwd: path.dirname(MODELO), stdio: 'inherit' });
    if (r.status !== 0){ console.error('falhou: ' + f); continue; }
    srt = fs.readFileSync(path.join(path.dirname(MODELO), 'legenda.srt'), 'utf8');
    /* com SRT=pasta, a transcrição nova fica guardada lá para a próxima vez */
    if (JA) fs.writeFileSync(path.join(JA, nome + '.srt'), srt);
  }
  /* e o que ele "ouve" depois do fim da fala (o "E aí" no fim da 2.4) */
  const dur = +spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0',
    path.join(RAIZ, 'Audios', f)], { encoding: 'utf8' }).stdout || Infinity;
  saida[nome] = leSrt(srt).filter(c => c[0] < dur - 0.3).map(c => [c[0], Math.min(c[1], dur), c[2]]).flatMap(parte).map(([a, z, t]) => [+a.toFixed(2), +z.toFixed(2), t]);
  console.log(nome, saida[nome].length + ' legendas');
}
fs.rmSync(tmp, { recursive: true, force: true });

const linhas = Object.entries(saida).map(([nome, cs]) =>
  '  ' + JSON.stringify(nome) + ': [\n' + cs.map(c => '    ' + JSON.stringify(c)).join(',\n') + '\n  ]');
fs.writeFileSync(path.join(RAIZ, 'legendas.js'),
  '/* AS LEGENDAS DAS NARRAÇÕES, feitas por ferramentas/gera-legendas.mjs.\n' +
  '   Cada uma: [início, fim, texto], em segundos do áudio. Pode corrigir o texto à mão. */\n' +
  'var LEGENDAS = {\n' + linhas.join(',\n') + '\n};\n');
console.log('legendas.js escrito.');

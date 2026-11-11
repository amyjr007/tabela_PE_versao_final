# Notas do tópico 10 — "A tabela e o diagrama de Pauling" (slide 11)

Onde paramos: **v53.9** (2026-11-10). Este arquivo serve para retomar o trabalho em outra máquina.

## Como o trabalho anda (combinados com o professor)

- **Versão a cada mudança.** Subir `VERSAO` em `tabela-periodica.html` e fazer o commit como `vX.Y · …`. Depois, `git push`.
- **Áudio novo.**
  - Fazer `git add` explícito do mp3.
  - Pôr o mp3 em `sw.js` (lista CASCA).
  - Transcrever com o filtro whisper do ffmpeg: modelo `ggml-large-v3-turbo.bin`, que nesta máquina fica em `C:\Users\apple\whisper\`.
  - Corrigir o texto à mão e pôr em `legendas.js`.
- **Slide com outro visual.** Rodar `node ferramentas/gera-miniaturas.mjs` e commitar só as miniaturas do slide mexido (`Imagens/slides/pc-10.webp`, `cel-10.webp`).
- **Testes.**
  - Chrome headless sempre com `--mute-audio`.
  - O servidor de teste responde com Content-Length e aceita Range.
  - Para pular no áudio, ir de pouco em pouco.
  - No slide 11, procurar os elementos com `slides[10].querySelector(...)`. O `document.querySelector` pega a tabela de outro slide.
- **Posições da montagem.** O professor manda o Ctrl+C da montagem. As peças que moram na mesa vêm em px do palco e precisam ser convertidas para a medida da mesa, com a mesma conta de `aplicaEl`.

## A cadeia de narrações (`ORDEM_10`)

`10 → 10.1 → 10.2 → 10.3 → 10.3.1 → 10.4 → 10.4.1 → 10.5 → 10.5.1 → 10.5.2 → 10.6`

| Narração | O que acontece | Como passa para a próxima |
|---|---|---|
| 10 | Cena escura: tabelinha, foto do Pauling, Mg, distribuição com setas | play → 10.1 |
| 10.1 | Cards s², p⁶, d¹⁰, f¹⁴; blocos ganham cor; encaixes aos 32 s; aluno arrasta | festa → 10.2 |
| 10.2 | Regra das colunas; bloco s, famílias 1A/2A, etiquetas s¹ s² | Saquei → 10.3 |
| 10.3 | Bloco p; colunas sobem; p¹ (3A) e p² (4A); aluno toca da 5A à 8A | festa → 10.3.1 |
| 10.3.1 | Hélio cresce e brilha; etiqueta s² nele; pausa de 1 s aos 20 s; card d | Saquei → 10.4 |
| 10.4 | Bloco d (e só o bloco aos 13 s, por 1 s); colunas 3 a 12; d¹; aluno toca da 4 à 12 | festa → 10.4.1 |
| 10.4.1 | Bloco f cresce aos 6 s | Saquei → 10.5 |
| 10.5 | Fileiras do f; texto "elementos de transição interna"; La/Ac escurecem; brilho corre; f¹–f⁴ embaixo; no fim o play sai; aluno toca f⁵ a f¹⁴ | festa → 10.5.1 |
| 10.5.1 | Aplausos aos 6 s; aos 21 s a tabela fica sem cor e sem cards; aluno toca os blocos s, p, d, f; instrução colorida no fim | festa → 10.5.2 |
| 10.5.2 | "O subnível mais energético"; aos 23 s a cena escura da 10 volta com o diagrama sem o Pauling; distribuição; 3s² e "subnível mais energético" | Saquei → 10.6 |
| 10.6 | Ver abaixo | **Saquei ainda não leva a nada** |

### A 10.6 (82,7 s) — feita até os 53 s

| Tempo | Evento |
|---|---|
| 0 s | Números das linhas: bolinhas azuis cheias, como no tópico 3 |
| 1 s | A cena escura da 10.5.2 sai em fade |
| 12 s | Os blocos s e p brilham por 1 s |
| 16 s | O bloco B fica quase apagado; lantanídeos e actinídeos somem na hora (voltam para o 3B); a mesa desce para `{x:6, y:97}` |
| 21,7 → 30 s | Regra digitada na tela escura ("período" em azul, "coluna" em âmbar) |
| 31,6 s | Pausa: "Toque na tela"; o toque continua a narração |
| 33 s | A regra sai |
| 35 s | O Mg brilha em verde (sem crescer) |
| 38,9 s | Faixa da linha 3, passando do número |
| 41 s | Faixa da coluna 2, em âmbar escuro; a etiqueta s² em destaque |
| 42 s / 44 s | Linha e coluna piscam 3 vezes |
| 46,3 s / 48 s | "3s", depois o "²" — na linha do Mg |
| 48,5 s | 3s² pisca no verde do Mg, com aplausos, funfare e confetes |
| 48,7 s / 49,5 s | O 3 do período pulsa 2 vezes; a etiqueta s² pulsa 2 vezes |
| 53 s | Pausa de 1,5 s |

**Falta:** dos 53 s ao fim ("Só um detalhe…", "…vamos para um segundo exemplo").

## Sumário do tópico 10 (`NAV_TOPICOS`)

| Item | Narração |
|---|---|
| a – Introdução | 10 |
| b – Os subníveis e os blocos | 10.1 |
| c – O bloco s | 10.2 |
| d – O bloco p | 10.3 |
| e – O bloco d | 10.4 |
| f – O bloco f | 10.5 |
| g – Identifique os blocos | 10.5.1, aos 19 s |
| h – O subnível mais energético sem tabela | 10.5.2 |
| i – Subnível mais energético com tabela | 10.6 |

Pelo sumário, cada narração abre com tudo o que veio antes já completo (as etiquetas no lugar). Voltar para uma narração com toques desfaz os toques dela.

## Onde está no código

- **`EV10`** — a cena escura, que serve à 10 e à 10.5.2 (`tick1052`). Na 10.5.2, usa o modo `modo1052` com o `diagrama.jpeg`.
- **`CARDS101`** — o resto do tópico:
  - um `tickXXX` por narração: `tick102`, `tick103`, `tick1031`, `tick104`, `tick1041`, `tick105`, `tick1051`, `tick106`;
  - os toques nas colunas passam por `avancaColuna`;
  - `limpaToques` desfaz os toques de uma narração;
  - a festa e a ligação à narração seguinte ficam em `festa(false)`.
- **Tempos de cada narração** — nas constantes `T101`, `T102`, `T103`, `T104`, `T1031`, `T1041`, `T105`, `T1051`, `T1052`, `T106`.
- **Fim de cada narração** — em `SEQ.acabou`, nos `else if (id === '10.x')`.
- **Peças da montagem neste slide** (com o x/y do palco quando foram fixadas):
  - `texto-101`, `texto-102`
  - `texto-1052` — fixado em x 437, y 187
  - `card-f14`
  - `etiqueta-f1` … `etiqueta-f14`
- **Ainda por fixar:** posições do `card-f14` e das etiquetas f, se o professor mandar.

## Pendências antigas (de antes do tópico 10)

Retiming da 8.4; card tocado todo verde ou só contorno; armadilha da Q8 do quiz 7.

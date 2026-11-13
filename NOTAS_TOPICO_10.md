# Notas do tópico 10 — "A tabela e o diagrama de Pauling" (slide 11)

Onde paramos: **v59.7** (2026-11-13). Este arquivo serve para retomar o trabalho em outra máquina.

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

`10 → 10.1 → 10.2 → 10.3 → 10.3.1 → 10.4 → 10.4.1 → 10.5 → 10.5.1 → 10.5.1.2 → (quiz) → 10.5.3 → 10.6 → 10.6.1 → 10.6.1.1 → 10.6.2`

| Narração | O que acontece | Como passa para a próxima |
|---|---|---|
| 10 | Cena escura: tabelinha, foto do Pauling, Mg, distribuição com setas | play → 10.1 |
| 10.1 | Cards s², p⁶, d¹⁰, f¹⁴; blocos ganham cor; encaixes aos 32 s; aluno arrasta | festa → 10.2 |
| 10.2 | Regra das colunas; bloco s, famílias 1A/2A, etiquetas s¹ s² | Saquei → 10.3 |
| 10.3 | Bloco p; colunas sobem; p¹ (3A) e p² (4A); no fim o play sai; aluno toca da 5A à 8A | festa → 10.3.1 |
| 10.3.1 | Hélio cresce e brilha; etiqueta s² nele; pausa de 1 s aos 20 s; card d | Saquei → 10.4 |
| 10.4 | Bloco d (e só o bloco aos 13 s, por 1 s); colunas 3 a 12; d¹; no fim o play sai; aluno toca da 4 à 12 | festa → 10.4.1 |
| 10.4.1 | Bloco f cresce aos 6 s | Saquei → 10.5 |
| 10.5 | Fileiras do f; texto "metais de transição interna"; La/Ac escurecem; brilho corre; f¹–f⁴ em cima das séries (que descem 14 px neste slide, `DESCE_SERIES_10`), caindo de cima; no fim o play sai; aluno toca f⁵ a f¹⁴ | festa → 10.5.1 |
| 10.5.1 | Dos 1,8 aos 7 s os blocos crescem com o card encaixado, um de cada vez (s 1,8; p 3,2; d 4,6; f 6; o f volta aos 7); aplausos aos 6 s; aos 21 s a tabela fica sem cor e sem cards; dos 23 aos 31,2 s a instrução se digita linha a linha ("Toque no bloco s." 23–24,8; "Depois no bloco p." 25–26,8; "Depois no d." 27,7–28,7; "Por fim, toque no bloco f." 29,5–31,2) em 2 linhas, centrada entre os grupos 2 e 13, e fica no fim; aluno toca os blocos s, p, d, f (a frase do bloco certo fica verde, com ✓) | festa (como num quiz) → voz "perfeito" → 10.5.1.2 |
| 10.5.1.2 | Desde o começo a sala apaga e o cabeçalho vira "10 Quiz", como nos outros quizzes | no fim abre o **quiz do tópico 10** (sem a fala de abertura do quiz: a questão 1 já se digita; pelo sumário, com a fala) |
| Quiz (QUIZ10) | 8 questões, 2 de cada bloco (s, p, d, f), sorteadas de novo no Refazer; o comando reveza entre "Toque na coluna da tabela correspondente ao subnível x.", "Toque na coluna do subnível x." e "Agora toque na coluna x." (este nunca na questão 1, e nunca o mesmo duas vezes seguidas); as etiquetas somem durante o quiz; no erro a coluna tocada inteira balança em vermelho; no acerto a coluna sobe e a etiqueta dela cai em cima (com o flip), e desce na questão seguinte; no fim, o cartão da nota e a fala `audio_tabela_10.5.2` (sem eventos) | Continuar → a tabela volta e toca a 10.5.3 |
| 10.5.3 | Os eventos da antiga 10.5.2, 9,5 s mais cedo (acertado pelo "₁₂Mg:" aos 14 s): aos 3,5 s "O subnível mais energético"; aos 13,5 s a cena escura da 10 volta com o diagrama sem o Pauling e o ₁₂Mg: já embaixo da tabela; aos 20,5 s o diagrama; distribuição dos 24,5 aos 28,5 s; brilho aos 30,7 s; aos 34,5 s o 1s² pulsa com a seta dele no diagrama, aos 35,4 s o 3s² pulsa e o 3s² do diagrama acende; aos 42,5 s "subnível mais energético" (em amarelo, com som de teclas); no fim a mesa desce e as séries somem, atrás da cena escura | Saquei → 10.6 |
| 10.6 | Ver abaixo | toque na tela → 10.6.1 |
| 10.6.1 | Ver abaixo | Saquei → 10.6.1.1 |
| 10.6.1.1 | Aos 6,5 s o 3s² pulsa | Vamos → 10.6.2 |
| 10.6.2 | Ver abaixo (o iodo) | — (o fim ainda não leva a nada) |

### A 10.6, a 10.6.1 e a 10.6.1.1 (refeitas na v54.8)

O áudio antigo da 10.6 (82,7 s) foi dividido em três. As legendas da 10.6 ficaram só até o fim da regra, com os tempos da gravação antiga (precisam ser conferidos); a 10.6.1, a 10.6.1.1 e a 10.6.2 ainda não têm transcrição.

**10.6**

| Tempo | Evento |
|---|---|
| 0 s | Números das linhas: bolinhas azuis cheias, como no tópico 3 (a mesa já desceu e sem as fileiras de baixo, desde o fim da 10.5.3) |
| 1 s | A cena escura da 10.5.3 sai em fade |
| 6 → 7 s | Digita "Elementos representativos primeiro" (o "O subnível mais energético" da 10.5.3 já saiu: some junto com as fileiras de baixo, no fim da 10.5.3) |
| 9 s | Os blocos das pontas (s e p) brilham por 1 s |
| 13 s | Os de transição ficam quase apagados |
| 17 s → 19,5–28 s | Tela escura aos 17 s (o "Elementos representativos primeiro" sai e não volta); a regra digitada dos 19,5 aos 28 s ("período" em azul, "coluna" em âmbar) |
| fim | A regra fica, com "Toque na tela"; o toque leva à 10.6.1 |

**10.6.1**

| Tempo | Evento |
|---|---|
| 0 s | A regra e a tela escura saem em fade |
| 3 s | O Mg brilha em verde |
| 7 s | Faixa da linha 3 entra e pisca 2 vezes; a bolinha do 3 pulsa 2 vezes |
| 8,2 s | Faixa da coluna 2 entra e pisca 2 vezes; a etiqueta s² (no alto da coluna) pulsa 2 vezes |
| 11 s | A linha pisca e a bolinha do 3 pulsa, 2 vezes de novo; a bolinha do 3 fica crescida |
| 12,3 s | A coluna pisca e a etiqueta s² pulsa, 2 vezes de novo; a etiqueta s² fica crescida |
| 14,7 → 16,2 s | Digita "Subnível mais energético:" na linha do Mg, no vão dos de transição |
| 17,7 / 19 / 19,2 s | O "3", o "s", o "²" (ao lado do texto) |
| 20,5 s | O 3s² cresce e brilha, com confetes, aplausos e funfare |
| 18 s | A bolinha do 3 cresce mais (até 18,8 s, quando volta ao normal) |
| 18,8 s | A etiqueta s² cresce mais, junto com o s² grande (até 20,5 s, quando voltam ao normal) |
| 23 s | O 3s² volta ao normal depois da festa |
| fim | Saquei → 10.6.1.1; até o toque, em revezamento: a bolinha do 3 e o 3 grande pulsam 2 vezes, depois a etiqueta s² e o s² grande, 2 vezes, e de novo (pulsos discretos, de 15 %, com 1 s cada) |

**10.6.2** (o "Vamos" no fim da 10.6.1.1; o segundo exemplo, o iodo — linha 5, coluna 17)

| Tempo | Evento |
|---|---|
| 0 s | O exemplo do Mg sai de cena: a linha "Subnível mais energético: 3s²", o brilho do Mg e as faixas da linha 3 e da coluna 2 |
| 2,2 s | O iodo brilha em verde |
| 16,5 s | Faixa da linha 5 entra e pisca 2 vezes; a bolinha do 5 pulsa 2 vezes |
| 18 s | Faixa da coluna 17 entra e pisca 2 vezes; a etiqueta p⁵ (no alto da coluna) pulsa 2 vezes |
| 20 s / 22 s | O mesmo de novo, com a linha e depois com a coluna |
| 23,5 → 25 s | Digita "O subnível mais energético:" na linha 5 (sobre os de transição apagados) |
| 26,3 / 27,5 / 27,8 s | O "5" (azul da linha), o "p", o "⁵" (na cor da etiqueta p⁵) |
| 28,8 s | O 5p⁵ cresce e brilha, com confetes, aplausos e funfare (volta aos 31,3 s) |
| 34 s | A distribuição inteira do iodo no vão de cima: ₅₃I: 1s² … 4d¹⁰ 5p⁵, o 5p⁵ nas mesmas cores |
| 35 s | O 5p⁵ da distribuição pulsa 3 vezes |

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
| h – Quiz | o quiz direto (a mesa como no fim da 10.5.1.2) |
| i – O subnível mais energético sem tabela | 10.5.3 |
| j – Subnível mais energético com tabela | 10.6 |
| k – O exemplo do Mg | 10.6.1 |
| l – O exemplo do iodo | 10.6.2 |
| m – O exemplo do Cs | 10.6.3 |
| n – Quiz 2 | o quiz 2 direto |
| o – A regra pros elementos de transição externa | 10.7.0 |
| p – O exemplo do Fe | 10.7.1 |

Pelo sumário, cada narração abre com tudo o que veio antes já completo (as etiquetas no lugar). Voltar para uma narração com toques desfaz os toques dela.

## Onde está no código

- **`EV10`** — a cena escura, que serve à 10 e à 10.5.3 (`tick1052`, o nome antigo). Na 10.5.3, usa o modo `modo1052` com o `diagrama.jpeg`.
- **`CARDS101`** — o resto do tópico:
  - um `tickXXX` por narração: `tick102`, `tick103`, `tick1031`, `tick104`, `tick1041`, `tick105`, `tick1051`, `tick106`;
  - os toques nas colunas passam por `avancaColuna`;
  - `limpaToques` desfaz os toques de uma narração;
  - a festa e a ligação à narração seguinte ficam em `festa(false)`.
- **Tempos de cada narração** — nas constantes `T101`, `T102`, `T103`, `T104`, `T1031`, `T1041`, `T105`, `T1051`, `T1052`, `T106`.
- **Fim de cada narração** — em `SEQ.acabou`, nos `else if (id === '10.x')`.
- **Som "flip".** Toda etiqueta que cai (s¹ s², p¹…p⁶, d¹…d¹⁰, f¹…f¹⁴) faz o `flip`: as que caem pelo toque, em `avancaColuna`; as que caem pelo tempo, em `flipQueda`.
- **Peças da montagem neste slide** (com o x/y do palco quando foram fixadas):
  - `texto-101`, `texto-102`
  - `texto-1052` — fixado em x 437, y 187
  - `card-f14`
  - `etiqueta-f1` … `etiqueta-f14`
- **Ainda por fixar:** posições do `card-f14` e das etiquetas f, se o professor mandar.

## Pendências antigas (de antes do tópico 10)

Retiming da 8.4; card tocado todo verde ou só contorno; armadilha da Q8 do quiz 7.

## A 10.6.3 e o quiz 2 (v56.5)

- **Fim da 10.6.2:** o play passa a tocar a **10.6.3** (o césio; no código, `tick1064` e `T1064`). Ao começar, os textos do iodo saem.
- **10.6.3:** 3 s o Cs brilha; 5,5/9,6 s a linha 6 pisca (com a bolinha do 6); 7/10,7 s a coluna 1 (com a etiqueta s¹); 13 s "O subnível mais energético:"; 16 s o 6, 17 s o s, 18 s o ¹; 18,7 s o 6s¹ cresce e brilha; 20 s a narração pára com aplausos, funfare e confetes e segue no fim do funfare; 23 s a sala apaga e o cabeçalho vira "Quiz 2"; 24,5 s o Al acende; 26,5 s a mãozinha toca a bolinha do 3 ("Subnível mais energético: 3"); 28,5 s toca o card p¹ (aparece o p¹), com aplausos e confetes. **A demonstração usa o Al com p¹ (o professor tinha escrito s1; o Al é 3p¹).**
- **Quiz 2 (`QUIZ10B`)**, no fim da 10.6.3, depois do `quiz1.mp3` ("Certo, vamos para a primeira questão"). Oito questões, só representativos (nunca He, Mg, Al, I, Cs):
  - 1 a 4: "Toque no número da camada e no card do subnível mais energético do átomo X." (só o símbolo) — o aluno ESCOLHE uma bolinha e um card do alto da coluna (aro dourado; pode trocar quantas vezes quiser), a linha da resposta mostra a escolha, e com os dois escolhidos aparece o botão Confirmar; só no Confirmar vem o certo ou o errado (a dica diz qual parte está errada). O texto da questão fica centralizado. Duas do s e duas do p. Convite ao toque: as bolinhas e os cards do s e do p pulsam num dourado leve, cada grupo até a parte dele ser acertada (`chama`, classes chamaP10b/chamaC10b).
  - Antes da 5 toca a `10.6.4` ("agora vai ser o oposto…"); aos 7 s dela entra a 5; de 5 a 8 (duas do s e duas do p): "Toque no elemento cujo subnível mais energético é o 4p²." Nenhum elemento repete entre as oito. Da questão 6 em diante os cards do alto das colunas (s¹, p³…) e os números das linhas saem em fade; voltam quando o quiz fecha. Com a fala 10.6.4, a questão 4 sai da tela na hora.
  - De 5 a 8, no acerto, além do elemento brilhar e crescer, aparecem acesas em verde a bolinha da camada e o card do alto da coluna dele (`mostra10b`), mesmo da 6 em diante, quando estão escondidos.
  - No fim, a nota (Refazer, Continuar). O Continuar só clareia a sala: **o que vem depois do quiz 2 ainda não foi definido.**

## No celular (v57.0)

- A mesa do slide 11 no celular vem de `MESA_NO_CELULAR_POR_SLIDE[10]` = `{ x:9, y:28, e:1.02 }` (a tabela toda aberta, com as séries). Com as séries recolhidas (semF106, da 10.6 em diante), a `fechada`: `{ x:23, y:58, e:1.15 }`. A troca acontece no `tick106` (quando o semF106 muda) e no `aplicaAjuste`.
- O `texto-102` no celular: palco x 513, y 152 → na mesa 506,7; 234,5 (posto ao criar o texto).

## A 10.5 regravada (v57.2)

- O áudio novo da 10.5 tem 48,8 s (o antigo, 52 s). Todos os tempos de `T105` foram puxados 2,6 s para trás, acertados pelo "14" do card f¹⁴, que pulsa aos 10,8 s. As legendas foram refeitas pelo áudio novo.

## Tamanhos no tópico 10 (v57.9)

- Em todo o slide 11 (narrações e quizzes) as bolinhas dos números das linhas têm `scale:1.3` e os cards das colunas (etiquetas s¹, p³…) `scale:1.1`, guardados em `--esc0`; os pulsos (`pulsaF106`, `pulsa106`, `revA106`, `revB106`) partem do `--esc0`.
- A entrada das bolinhas (`numLinha25`) fica desligada no slide 11: ela voltava a tocar quando um pulso acabava, e as bolinhas encolhiam e deslizavam.
- No quiz 2, a linha da resposta muda de questão apagada e sem transição (antes, a resposta da questão nova piscava na tela).

## A 10.7 e a 10.7.0 (v58.6) — os de transição

- **Continuar do quiz 2** → o cartão sai (a sala ainda escura) e toca a **10.7** (`tick107`, `T107`).
- **10.7:** 1 s a sala clareia e a tabela volta ao lugar aberto, inteira e colorida, com o bloco f escondido (classe `fOculto107`; os quadrinhos 57–71/89–103 ficam); 3 s os representativos escurecem (`semSP107`); 7,5 s o card f¹⁴ (peça `card-f14-gigante`, no palco 186, 481, escala 1,01) por cima dos quadrinhos 57–71 e 89–103 do 3B (que ficam atrás dele; `gig107`; o d¹⁰ gigante foi tirado); 12 s a tela escura com o título "Elementos de transição"; linhas digitadas 16–18, 20–22,5, 26–28 ("Vamos aplicar a regra geral.", em amarelo), 30–34; no fim, "Toque na tela" sem o play → **10.7.0**.
- **10.7.0:** 2 s a tela clareia; 6–17 s a tela escurece e digita a regra do bloco d (n − 1); no fim, "Toque na tela" sem o play; o toque leva à **10.7.1**.

## A 10.7.1 (v59.3) — o exemplo do ferro, 3d⁶ (`tick1071`, `T1071`)

1 s a regra sai; 3 s o Fe cresce 15 % e brilha; 6 s a faixa da linha 4 pisca 2× (com a bolinha do 4), 7,5 s a da coluna 8 (com a etiqueta d⁶); 13 s digita "(n − 1)" na linha 4, logo depois da bolinha, por cima do K e do Ca (36 px); 15 s o n vira 4; 18,7 s fica um 3 vermelho, ali mesmo, até o fim (sem o "(n − 1 = 3)"); 20,8 s "Subnível mais energético:" (entre as linhas 2 e 3, um pouco acima do meio); 25 s o bloco d pulsa; 25,9 s a coluna pisca 2× de novo; 28/28,9/29,5 s o 3, o d e o ⁶; 30,5 s o 3d⁶ cresce e brilha, com confetes, aplausos e funfare; dali o 3 vermelho (não a bolinha do 4), o "(n − 1)" embaixo da bolinha e a etiqueta d⁶ ficam piscando. O "O subnível mais energético" do alto sai na 10.7.1. O fim da 10.7.1 ainda não leva a nada.
- As etiquetas d¹ a d¹⁰ ficam 20 px acima da linha 4 (antes encostavam nos cards), em todo o tópico.

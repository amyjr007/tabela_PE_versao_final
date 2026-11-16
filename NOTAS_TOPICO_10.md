# Notas do tópico 10 — "A tabela e o diagrama de Pauling" (slide 11)

Onde paramos: **v67.6** (2026-11-16). Este arquivo serve para retomar o trabalho em outra máquina (ou numa conversa nova).

## Para retomar (o que está em aberto em 2026-11-16)

- **Demonstração do quiz 2 (10.6.3.1):** o professor pediu "aos 4,3 s destaca o Fe", mas ficou o **Al** (3p¹), porque o quiz 2 é só dos representativos e a regra do d (n − 1) ainda não foi dada. Se ele confirmar o Fe, trocar em `tick1064` (`al1064`, a linha da demonstração `d1064` e o card).
- **Altura das séries pelo sumário:** dentro do slide (recomeço no mesmo slide), as séries de baixo ficam 14 px mais altas do que vindo de outro slide (ver o aviso na seção do sumário). Não corrigido; o professor ainda não pediu.
- **Química do bloco f:** a tela segue a contagem pela coluna da série (Pu = 5f⁵, Nd = 4f³); pelo diagrama seriam 5f⁶ e 4f⁴. O professor escolheu a da coluna.
- **Quiz musical:** as notas de "Atirei o pau no gato" foram escritas de memória — conferir no ouvido se o professor reclamar.
- **O que vem depois do quiz geral:** o cartão final tem Refazer e Capa; não há narração depois.
- Antes de mexer: `git pull`, ver se há cópias "(1)" do OneDrive e áudios novos ou regravados (`git status`).


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

`10 → 10.1 → 10.2 → 10.2.1 → 10.3 → 10.3.1 → 10.4 → 10.4.1 → 10.5 → 10.5.1 → 10.5.1.2 → (quiz) → 10.5.3 → 10.6 → 10.6.1 → 10.6.1.1 → 10.6.2 → 10.6.3 → 10.6.3.1 → (quiz 2) → 10.7 …`

| Narração | O que acontece | Como passa para a próxima |
|---|---|---|
| 10 | Cena escura: tabelinha, foto do Pauling, Mg, distribuição com setas | play → 10.1 |
| 10.1 | Cards s², p⁶, d¹⁰, f¹⁴; blocos ganham cor; encaixes aos 32 s; aluno arrasta | festa → 10.2 |
| 10.2 | Regra das colunas; bloco s, famílias 1A/2A, etiquetas s¹ s² | (sem botão, 1 s depois) → 10.2.1 |
| 10.2.1 | "Então, clica no card do subnível p ali…" (5,3 s); no fim o play some e uma mão amarela bate no card p⁶ (toque10, CHAMA_10): espera 2 s, entra em fade, bate uma vez, sai em fade, e volta uns 3 s depois (ciclo de 5,4 s); o toque amassa o card como um botão (aperta10, 0,38 s) e a narração seguinte vem em seguida — o mesmo no d¹⁰ e no f¹⁴ | toque no p⁶ → 10.3 |
| 10.3 | Bloco p (áudio regravado na v61.0: contagem aos 10,9–15,5 s, p¹ 21,55 s, p² 22,3 s); colunas sobem; p¹ (3A) e p² (4A); no fim o play sai; aluno toca da 5A à 8A | festa → 10.3.1 |
| 10.3.1 | Hélio cresce e brilha; etiqueta s² nele; pausa de 1 s aos 20 s; card d | mão no card d¹⁰ → 10.4 |
| 10.4 | Bloco d (e só o bloco aos 13 s, por 1 s); colunas 3 a 12; d¹; no fim o play sai; aluno toca da 4 à 12 | festa → 10.4.1 |
| 10.4.1 | Bloco f cresce aos 6 s | mão no card f¹⁴ → 10.5 |
| 10.5 | Fileiras do f; texto "metais de transição interna"; La/Ac escurecem; brilho corre; f¹–f⁴ em cima das séries (que descem 14 px neste slide, `DESCE_SERIES_10`), caindo de cima; no fim o play sai; aluno toca f⁵ a f¹⁴ | festa → 10.5.1 |
| 10.5.1 | Dos 1,8 aos 7 s os blocos crescem com o card encaixado, um de cada vez (s 1,8; p 3,2; d 4,6; f 6; o f volta aos 7); aplausos aos 6 s; aos 21 s a tabela fica sem cor e sem cards; dos 23 aos 31,2 s a instrução se digita linha a linha ("Toque no bloco s." 23–24,8; "Depois no bloco p." 25–26,8; "Depois no d." 27,7–28,7; "Por fim, toque no bloco f." 29,5–31,2) em 2 linhas, centrada entre os grupos 2 e 13, e fica no fim; aluno toca os blocos s, p, d, f (a frase do bloco certo fica verde, com ✓) | festa (como num quiz) → voz "perfeito" → 10.5.1.2 |
| 10.5.1.2 | Desde o começo a sala apaga e o cabeçalho vira "10 Quiz", como nos outros quizzes | no fim abre o **quiz do tópico 10** (sem a fala de abertura do quiz: a questão 1 já se digita; pelo sumário, com a fala) |
| Quiz (QUIZ10) | 8 questões, 2 de cada bloco (s, p, d, f), sorteadas de novo no Refazer; o comando reveza entre "Toque na coluna da tabela correspondente ao subnível x.", "Toque na coluna do subnível x." e "Agora toque na coluna x." (este nunca na questão 1, e nunca o mesmo duas vezes seguidas); as etiquetas somem durante o quiz; no erro a coluna tocada inteira balança em vermelho; no acerto a coluna sobe e a etiqueta dela cai em cima (com o flip), e desce na questão seguinte; no fim, o cartão da nota e a fala `audio_tabela_10.5.2` (sem eventos) | Continuar → a tabela volta e toca a 10.5.3 |
| 10.5.3 | Os eventos da antiga 10.5.2, 9,5 s mais cedo (acertado pelo "₁₂Mg:" aos 14 s): aos 3,5 s "O subnível mais energético"; aos 13,5 s a cena escura da 10 volta com o diagrama sem o Pauling e o ₁₂Mg: já embaixo da tabela; aos 20,5 s o diagrama; distribuição dos 24,5 aos 28,5 s; brilho aos 30,7 s; aos 34,5 s o 1s² pulsa com a seta dele no diagrama, aos 35,4 s o 3s² pulsa e o 3s² do diagrama acende; aos 42,5 s "subnível mais energético" (em amarelo, com som de teclas); no fim a mesa desce e as séries somem, atrás da cena escura | Saquei → 10.6 |
| 10.6 | Ver abaixo | toque na tela → 10.6.1 (v61.9: na montagem, na 10.6, o "Elementos representativos primeiro" é peça — texto-106: anda e muda de tamanho; v62.0: palco x 747, y 111, esc 1,31; v64.1: centrado na tabela, entre as colunas 1 e 18, e mais acima — mesa y 146; 31,4 px) |
| 10.6.1 | Ver abaixo. v62.1: no lugar das faixas, as setas (fazSetas): do Mg até a bolinha do 3 (7 s) e até a etiqueta s² (8,2 s); as pulsações da 1ª vez passam para a chegada (7,9 s e 9,1 s) | Saquei → 10.6.1.1 |
| 10.6.1.1 | Aos 6,5 s o 3s² pulsa | Vamos → 10.6.2 |
| 10.6.2 | O iodo (ver abaixo). v61.2: 3,8 s o número atômico cresce (foco-num), 5,5 s pisca de âmbar 2×, 13 s volta; 26 s o 5 grande e a bolinha do 5 cresce; com o p (27,5 s) a etiqueta p⁵ cresce; 28,8 s a bolinha pulsa, 29,2 s a etiqueta; voltam aos 31,3 s. v61.4 (áudio de 43,5 s): 31,2 s pausa de 1,5 s; 35,8 s pausa de 3 s enquanto a distribuição do iodo se desenha um subnível por vez (12 pedaços, clip-path), com som de digitação; 37 s o 5p⁵ da distribuição pulsa 3×; 39,7 s o 5p⁵ grande pulsa 3×; 41 s pausa de 1,5 s; no fim tudo fica na tela . v61.7: no lugar das faixas piscantes, setas luminosas que crescem do iodo (seta1063): a da linha aos 16,5 s até a bolinha do 5 (que pulsa 2× ao chegar, 17,4 s), a da coluna aos 17,5 s até a etiqueta p⁵ (pulsa 2× ao chegar, 18,4 s); 20 s pulsa a bolinha, 21,5 s a etiqueta; as pontas num vaivém discreto; v62.2: as setas (do iodo, do Mg e do Cs) numa cor só, amarelo vivo #FFE14D com contorno escuro; as setas ficam até a 10.6.3 (v61.8); a bolinha do 5 e a etiqueta p⁵ ficam crescidas até o fim; "O subnível mais energético: 5p⁵" desceu para a linha 6 | botão verde "Próximo" → 10.6.3 |

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
| b – Os subníveis e os blocos | 10.1 (sem a cena da 10 por cima: pula101) |
| c – O bloco s | 10.2 |
| d – O bloco p | 10.3 |
| e – O bloco d | 10.4 |
| f – O bloco f | 10.5 |
| g – Identifique os blocos | 10.5.1, aos 19 s |
| h – Quiz | o quiz direto (a mesa como no fim da 10.5.1.2) |
| i – O subnível mais energético sem tabela | 10.5.3 |
| j – A regra para os representativos (s ou p) | 10.6 (sem a figura da 10.5.3 por cima: pula106) |
| k – O exemplo do Mg | 10.6.1 |
| l – O exemplo do iodo | 10.6.2 |
| m – O exemplo do Cs | 10.6.3 |
| n – Quiz 2 | o quiz 2 direto |
| o – A regra para os de transição externa (bloco d) | 10.7.0 (sem o escuro da 10.7: pula1070) |
| p – O exemplo do Fe | 10.7.1 (sem o véu da regra: pula1071) |
| q – O exemplo do Zr | 10.7.2 |
| r – Quiz 3 | 10.7.3 aos 10,2 s (a demonstração e o quiz 3; v65.5: já escura e limpa, sem se montar — pula1073; v69.4: logo depois do Zr) |
| s – A regra para os de transição interna (bloco f) | 10.7.5 |
| t – O exemplo do Pu | 10.7.6 |
| u – Quiz musical | o jogo musical direto (a mesa como no fim da 10.7.3, a sala escura) |
| **11. Quiz geral** (capítulo próprio, v67.5) | o quiz final direto (20 questões, duas de cada tópico; a sala escura; v67.7: a mesa do começo do tópico 10 — trilha "10" parada no 0) |

**Todos os itens do sumário do tópico 10 saltam direto para a tela do começo** (v60.5), sem a cena se montar à vista. Cada item tem `salto:[trilha, segundo, quiz?]`; o `irPara` chama `preparaSalto10` (e um `efeitosDoTempo()` na hora) logo depois do `go()` — ou, no mesmo slide, logo depois do `recomecaSlide()`, para a cena da 10 não aparecer num quadro — (a trilha já é posta parada naquele segundo, e a classe `salto1071` no `#stage` desliga as transições), e o `entra` chama `saltaPara10`, que toca a narração (ou abre o quiz) quando a mesa chega; as transições voltam 0,3 s depois (e, de todo jeito, em 4 s). Item novo no sumário do tópico 10: usar `salto:[...]` + `entra(v, g){ saltaPara10(...) }`.

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
- **10.6.3:** (v62.1: no lugar das faixas, as setas do Cs — até a bolinha do 6 aos 5,5 s e até a etiqueta s¹ aos 7 s; as pulsações da 1ª vez na chegada, 6,4 s e 7,9 s) 3 s o Cs brilha; 5,5/9,6 s a linha 6 pisca (com a bolinha do 6); 7/10,7 s a coluna 1 (com a etiqueta s¹); 13 s "O subnível mais energético:"; 16 s o 6, 17 s o s, 18 s o ¹; 18,7 s o 6s¹ cresce e brilha; 20 s a narração pára com aplausos, funfare e confetes e segue no fim do funfare; 23 s a sala apaga e o cabeçalho vira "Quiz 2"; 24,5 s o Al acende; 26,5 s a mãozinha toca a bolinha do 3 ("Subnível mais energético: 3"); 28,5 s toca o card p¹ (aparece o p¹), com aplausos e confetes. **A demonstração usa o Al com p¹ (o professor tinha escrito s1; o Al é 3p¹).**
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

1 s a regra sai; 3 s o Fe cresce 15 % e brilha; (v62.3: no lugar das faixas, as setas amarelas — 6 s a da linha, até a bolinha do 4, que pulsa na chegada, 6,9 s; 7,5 s a da coluna, até a etiqueta d⁶, que pulsa aos 8,4 s; a da linha sai aos 13 s, quando a fórmula entra no lugar dela; as setas ficam abaixo das etiquetas, z-index 26; v62.4: na 10.7.1 as etiquetas do d sobem mais 30 px — classe dSobe1071, SOBE_D_1071 — para a seta da coluna aparecer, e a linha "Subnível mais energético: 3d⁶" sobe junto; v62.5: as setas em trechos — a da linha até a bolinha do 4 (6–13 s), depois até o 3 vermelho (24–27 s, com o 3 pulsando na chegada, 24,9 s; e 28 s até a festa); a da coluna até a d⁶ (7,5–13 s, 26–27 s com a d⁶ pulsando na chegada, 26,9 s, e 28,9 s até a festa); o ⁶ aos 29,7 s; na festa (30,5 s) as setas se recolhem para o Fe — em todos os exemplos a seta agora sai recolhendo); 13 s digita "(n − 1)" na linha 4, logo depois da bolinha, por cima do K e do Ca (36 px); 15 s o n vira 4; 18,7 s fica um 3 vermelho, ali mesmo, até o fim (sem o "(n − 1 = 3)"); 20,8 s "Subnível mais energético:" (entre as linhas 2 e 3, um pouco acima do meio); 25 s o bloco d pulsa; 25,9 s a coluna pisca 2× de novo; 28/28,9/29,5 s o 3, o d e o ⁶; 30,5 s o 3d⁶ cresce e brilha, com confetes, aplausos e funfare; dali o 3 vermelho (não a bolinha do 4), o "(n − 1)" embaixo da bolinha e a etiqueta d⁶ ficam pulsando (discreto: 8 % a mais, ciclo de 2,4 s); na resposta, o 3 é vermelho e pulsa com o 3 da fórmula, e o d⁶ pulsa com a etiqueta d⁶ — alternados: primeiro os 3 (com o (n − 1)), depois os d⁶ (meio ciclo, 1,2 s). O "O subnível mais energético" do alto sai na 10.7.1. O fim da 10.7.1 ainda não leva a nada.
- As etiquetas d¹ a d¹⁰ ficam 20 px acima da linha 4 (antes encostavam nos cards), em todo o tópico.

## A 10.7.1A e a 10.7.2 (v62.6) — o zircônio, 4d² (`tick1072`, `T1072`)

- **Fim da 10.7.1** → toca sozinha a **10.7.1A** ("Facinho, não é? Vamos fazer mais um exemplo?", 3,2 s); no fim dela, o botão verde **"Bora"** → **10.7.2**.
- **10.7.2** (36,1 s): os textos do Fe saem em fade (classe `sai1072`) e o Fe deixa de brilhar e piscar; as etiquetas do d continuam erguidas (dSobe1071).
  - 1,5 s o Zr cresce 15 % e brilha; 6,5 s seta até a bolinha do 5 (pulsa ao chegar, 7,4 s); 7,9 s seta até a etiqueta d² (pulsa aos 8,8 s).
  - 15 s as setas recolhem e digita "(n − 1)" na linha 5 (até 15,6 s); 17,3 s o n sai e entra o 5 (azul); 20,7 s fica o 4 vermelho.
  - 23 s digita "Subnível mais energético:" (até 24,5 s), no lugar da linha do Fe.
  - 26 s seta até o 4 vermelho (pulsa aos 26,9 s), recolhe aos 27,2 s; 27 s seta até a d² (pulsa aos 27,9 s), recolhe aos 28,2 s.
  - 30,2 s seta até o 4 e o 4 (vermelho) do 4d²; 31,2 s seta até a d² e o d; 32 s o ²; 33,2 s festa (confetes, aplausos, funfare) e as setas recolhem.
  - No fim da 10.7.2, 1 s depois, toca a **10.7.3**.

## A 10.7.3 e o quiz 3 (v62.7–v62.8) — `tick1073`, `T1073`, `QUIZ10C`

- **10.7.3** (25 s): aos 12 s a mesa fica limpa (`limpo1073`: os textos do Zr saem, o f¹⁴ gigante sai, s e p voltam acesos; o 57–71 e o 89–103 no 3B); 14 s o Fe brilha; 17 s a mãozinha aparece no meio e digita "Subnível mais energético:"; 18,2 s ela toca a bolinha do 3 (entra o 3, em vermelho); 20 s toca o card d⁶ (entra o d⁶); 21 s ela sai, com confetes e aplausos (sem funfare).
- **Fim da 10.7.3** → "Certo, vamos para a primeira questão" (`quiz1.mp3` — não existe áudio "Lá vai a primeira") e o **quiz 3** (`QUIZ10C`, herda do QUIZ10B; cabeçalho "Quiz 3"; marca `q10c`).
  - Só elementos do bloco d que seguem o diagrama de Pauling: `Z_QUIZ10C` = Sc, Ti, V, Mn, Co, Ni, Zn, Y, Tc, Cd, Hf, Ta, W, Re, Os, Ir, Hg (sem Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag, Pt, Au; sem o 7º período; sem o Fe e o Zr).
  - 1 a 4: o elemento brilha; o aluno toca a bolinha da camada (o período menos um) e o card do d; Confirmar embaixo da tabela; a linha da resposta no alto (no lugar da do Fe), a camada em vermelho.
  - Antes da 5 toca a `10.7.4` ("agora vai ser o contrário…", 7,2 s); a 5 entra aos 7,4 s. De 5 a 8: dado o subnível (ex.: 3d⁵), o aluno toca o elemento; da 6 em diante sem as etiquetas e as bolinhas (como no quiz 2).
  - No fim, o cartão com a nota (Refazer, Continuar). O Continuar só fecha o quiz: o que vem depois ainda não foi definido.
- **Sumário:** "q – O exemplo do Zr" (10.7.2) e "r – Quiz 3" (10.7.3 aos 10,2 s).
- **v63.0:** na 10.7.3 a sala já apaga aos 12 s e o cabeçalho vira "Quiz 3" (voltando para antes, clareia); na demonstração, o toque da mãozinha escolhe como no quiz (contorno amarelo, `sel10b`) e no fim a bolinha e o card ficam verdes (`certa10b`). No acerto das questões 5 a 8 do quiz 3, um "(n − 1)" vermelho em cima da bolinha da camada (`tag10c`).
- **v63.1:** nos tutoriais dos quizzes 2 (10.6.3) e 3 (10.7.3) a mãozinha é amarela e 15 % maior (classe `mao10` no `#mao`, tirada quando ela some). Na 10.6.3 ela aparece aos 24 s, no meio; aos 26,5 s vai até a bolinha do 3 e a toca (27 s), que fica escolhida (`sel10b`); o card p¹ também, aos 28,5 s; quando a mão sai (29,6 s), os dois ficam verdes.
- **v63.2:** os cards gigantes s², p⁶ e d¹⁰, que saem de dentro dos blocos para as colunas receberem as etiquetas (10.2 aos 20,4 s, 10.3 aos 10,6 s, 10.4 aos 18 s), não voltam mais em nenhuma narração seguinte (v64.2: nem na 10.5.1 — lá os blocos crescem sem eles); o f¹⁴ fica. Entre o fim da 10.2 e a 10.2.1, 1,5 s.
- **v63.3:** o card clicável (p⁶ no fim da 10.2.1, d¹⁰ no fim da 10.3.1, f¹⁴ no fim da 10.4.1) brilha discreto na cor dele desde o fim da narração (`brilho10`, 2,4 s), antes da mãozinha.
- **v63.4:** o brilho dos cards clicáveis virou um halo branco que pulsa (2 s), visível até em cima do bloco da mesma cor; o p⁶ já brilha desde o começo da 10.2.1 (`brilha10`); o brilho para no toque. Entre a 10.2 e a 10.2.1, 1 s.
- **v63.5:** tocado, o card gigante afunda (86 %) e fica verde vivo com contorno verde (`ativo10`), como um botão ativado; 2 s depois volta ao normal (em 0,35 s). A narração seguinte começa 0,38 s depois do toque.
- **v63.6:** na 10.3, os toques nas colunas do p valem a partir dos 25 s (`T103.toque`); o primeiro toque para a narração na hora (`parou103`), e depois da festa a 10.3.1 entra mesmo com ela parada.
- **v63.7:** no toque do card gigante (quando ele afunda verde), o som "right".
- **v63.8:** na 10.2.1 inteira o play fica fora; o p⁶ responde desde o começo dela (brilhando) — tocado no meio, a narração é cortada e vem a 10.3 (com o afundar verde e o "right").
- **v63.9:** na 10.3, tocada uma coluna (narração cortada), o play também sai.
- **v64.0 — a posição da tabela:** da 10.6 até o fim do tópico (10.6.x, Cs, quiz 2, 10.7, Fe, Zr, 10.7.3, quiz 3) a mesa fica sempre no lugar da 10.6 (`--px:6px; --py:97px`, classe `pos106`, separada da `semF106`, que só esconde as fileiras de baixo até a 10.6.3); no celular, a medida `fechada`. A posição própria dos quizzes (x 20, y 126) saiu.
- **v64.0 — a 10.5.1 mais leve:** o bloco tocado certo brilha com um halo só por bloco (`halo1051`, um retângulo medido pela caixa das cartas; o s em dois, o f em duas fileiras; La e Ac fora do d), que só muda de opacidade — antes eram filtro e sombras desfocadas em cada carta. O erro treme só a carta tocada, não a tela inteira.
- **v64.3 — a 10.5.3 regravada (63,3 s):** o texto "O subnível mais energético" aos 4,8–6,7 s; pela referência do professor (o Mg aceso aos 20 s, antes 13,5 s), todo o resto +6,5 s: cena escura 20 s, diagrama 27 s, distribuição 31–35 s, brilho 37,2 s, 1s² 41 s, 3s² 41,9 s, "subnível mais energético" 49–50,6 s. Legendas refeitas.
- **v64.4:** o quiz 2 abre 1,5 s depois do fim da 10.6.3.

## O quiz musical (v64.5) — `MUSICA10`

- No cartão do quiz 3, no lugar do Continuar, o botão **"Quiz ♪"** (o Refazer continua). Ele abre o jogo, com a sala ainda escura e o cabeçalho "Quiz ♪".
- No alto, oito notas, cada uma dada pelo subnível mais energético de um elemento; o aluno toca os elementos na ordem e cada acerto toca a nota (sintetizada com WebAudio: triângulo + oitava, som de caixinha de música; sem arquivo). O erro: som de erro, a carta treme e a mensagem diz o subnível do que foi tocado.
- Completas as oito, a melodia toca inteira (as notas acendem), e a pergunta "Que música é essa?" com três opções e "Ouvir de novo". Acertando, confetes, funfare e aplausos; depois o cartão com a nota (8 notas, os erros contam: os toques errados e as opções erradas). Refazer recomeça o jogo; Continuar fecha e a sala clareia.
- Por enquanto uma música (`MUSICAS_10`): "Brilha, brilha, estrelinha" — dó dó sol sol lá lá sol sol(longa); dó = Na (3s¹), sol = Fe (3d⁶), lá = I (5p⁵). As outras opções: "Ciranda, cirandinha" e "Atirei o pau no gato". Para outra música: mais uma entrada em `MUSICAS_10` (notas, tempos, um elemento por nota, outras opções).
- **v64.6:** no sumário, "s – Quiz musical" abre o jogo direto (a mesa como no fim da 10.7.3, sem a demonstração; a sala escura). Durante o jogo a narração fica parada e sem o play (`sem-play-m10`).
- **v64.7:** no quiz musical, o elemento achado fica verde (`m10-ok`) com um selo amarelo no canto com o número da ordem da nota (`m10-num`; o mesmo elemento junta os números: Na 1·2, Fe 3·4·7·8, I 5·6). Limpa ao refazer e ao fechar.
- **v64.8:** o quiz musical tem três músicas em sequência ("Música 1 de 3"…), cada uma com oito notas; acertada a música, vem a próxima; no fim um cartão só (24 notas; os erros das três contam).
  - "Atirei o pau no gato": sol fá mi ré mi fá sol sol(longa) — sol = Ca (4s²), fá = P (3p³), mi = Zn (3d¹⁰), ré = Br (4p⁵).
  - v64.9: "Marcha, soldado" saiu (não ficou bom); no lugar, "Noite feliz" (Gruber, 1818): sol lá sol mi, sol lá sol mi, no ritmo de valsa (tempos 1,5 · 0,5 · 1 · 2,5) — sol = K (4s¹), lá = Mn (3d⁵), mi = Cl (3p⁵). Na melodia inteira, cada nota dura conforme o tempo dela.
  - (As melodias das duas novas foram escritas de memória: conferir no ouvido; para corrigir, mudar `notas` em `MUSICAS_10`.)

## O quiz final (v65.0) — `QUIZFINAL`, `QUESTOES_FINAL`

- No cartão do quiz musical, no lugar do Continuar, o botão **"Quiz final →"** (o Refazer continua).
- Vinte questões de múltipla escolha, **duas de cada tópico (1 a 10)**, feitas pela taxonomia de Bloom — cada uma mostra o nível num selo colorido (Lembrar, Compreender, Aplicar, Analisar, Avaliar, Criar), com a dupla de cada tópico subindo de nível. Um cartão claro no meio da sala escura (a tabela escurecida atrás), com "Questão n de 20", o tópico, uma barra de progresso e quatro alternativas embaralhadas.
- Respondida: a certa fica verde (a errada escolhida, vermelha) e vem a explicação; o botão "Próxima →" (na última, "Ver minha nota →").
- No fim, o cartão com a nota (acertos/20 × 10) e uma mensagem final de incentivo em quatro faixas (≥ 9, ≥ 7, ≥ 5, < 5); botões Refazer e "Capa" (v65.2: fecha tudo e volta à capa).
- (A 10.7.3 não apaga mais a sala sozinha depois que o quiz 3 abriu — antes, fechados os jogos, ela voltava a escurecer.)
- **v65.2:** no cartão do quiz musical, depois do statistics, toca a fala `audio_tabela_10.7final.mp3` (36,4 s); o "Quiz final →" fica apagado até os 19 s dela; tocado com ela ainda falando, ela é cortada e o quiz geral abre.
- **v65.3:** na 10.7.1 (o Fe), o "(n − 1)" do fim fica em cima do 3 vermelho, também em vermelho (antes ficava embaixo da bolinha do 4, em azul).
- **v65.4:** `CARDS101.fechaJogos()` fecha o quiz 3, o musical e o geral (e zera o `jaAbriu` do quiz 3) ao sair do slide e em todo salto pelo sumário (`preparaSalto10`). Antes, tocar "Quiz 3" no sumário com o quiz 3 aberto deixava-o aberto por baixo do tutorial que recomeçava (Fe aceso, a mão, o 3d⁶ e a questão 1 juntos). O musical e o geral, direto, já marcam o quiz 3 como aberto (a demonstração não aparece).
- **v65.6:** o Confirmar do quiz 3 (questões 1 a 4) fica embaixo do Fl (coluna 14), abaixo da tabela.

## O bloco f, o plutônio e o caminho até o quiz musical (v65.7) — `tick1075`, `tick1076`

- **Cartão do quiz 3:** Refazer e **"Pra fechar"** (no lugar do "Quiz ♪"): a sala clareia e toca a **10.7.5**.
- **10.7.5** (34,5 s): 2 s a tabela abre de novo — os lantanídeos e actinídeos embaixo, com as etiquetas f¹…f¹⁴, no lugar aberto do fim da 10.5 (`abreF107`: sem `pos106` e sem `fOculto107`; classe `f1075` para deslizar); 9 s digita "n − 1" no alto; 10 s apaga o 1; 11 s o 2 (vermelho); 20 s as exceções ao diagrama de Pauling entre os lantanídeos e actinídeos apagam em fade (`EXCECOES_10`, v65.8 só elas: La, Ce, Gd, Ac, Th, Pa, U, Np, Cm, Lr; ficam apagadas até a 10.7.7); com a tabela aberta de novo (`f1075`), as etiquetas do f sobem 12 px e as séries descem 12 px. No fim, "Bora" → 10.7.6.
- **10.7.6** (36,8 s): 1 s o Pu brilha; 4,5 s o lugar dos actinídeos (o 89–103 do 3B) em vermelho; 6,7 s uma bolinha azul "7" ao lado da série de baixo; 8,7 s seta do Pu até ela; 10 s seta até o f⁵; 13,8 s "n − 2" ao lado da bolinha (as setas recolhem); 19 s o 5 vermelho; 23 s seta até o 5 (e "Subnível mais energético: 5" no alto); 25 s seta até o f⁵ (e o f⁵); 26 s o 5f⁵ cresce, com festa, e as setas recolhem. (v66.2: o áudio regravado já diz 5f⁵; a estrutura é a mesma, ±0,3 s.) 29,7 s a sala apaga (v66.4: a pausa é aos 27,6 s, de 1,5 s), cabeçalho "Quiz", e a pergunta digitada até 34 s: "Toque no elemento cujo subnível mais energético é o 4f³" — o **Nd** (z 60, a coluna do f³). Erro: som, a carta treme e a mensagem com o subnível do tocado. Acerto: festa e, 3 s depois, a sala clareia e toca a **10.7.7**.
- **10.7.7** (12,1 s): no fim, o botão verde **"Quiz ♪"** → a sala apaga, cabeçalho "Quiz ♪", e toca a **10.7.8** (40,4 s, a explicação do quiz musical); no fim dela, a música 1.
- O quiz musical segue como antes; o cartão dele leva ao quiz geral (com a fala 10.7final).
- **v65.9:** na 10.7.8, dos 8,5 aos 18 s, um elemento ao acaso pisca a cada 0,55–0,95 s, cada um com uma nota bem baixinha (18 % do volume das notas do jogo) — `MUSICA10.tickFala`, só tocando de seguida.
- **Atenção (achado na v66.0):** pelo sumário dentro do slide (recomeço no mesmo slide), as séries de baixo ficam 14 px mais altas do que vindo de outro slide — a montagem das séries depende do caminho (`pousaTabela`/`SERIES_VISIVEIS`). Com a tabela aberta de novo (10.7.5 em diante), as etiquetas do f podem encostar nas cartas de cima das séries nesse caso.
- **v66.1:** na 10.7.5 o "n − 1 → n − 2" fica à esquerda das séries de baixo, entre as duas fileiras (40 px). Na 10.7.6, aos 4,5 s, a casa 89–103 fica vermelha e cresce 25 % (`verm1076`), e a bolinha do 7 ao lado dela também cresce (até a festa).
- **v66.3:** na 10.7.6, aos 16 s o n do "n − 2" vira 7 (azul): "7 − 2"; aos 19 s, o 5 vermelho. A bolinha 7 da série e a fórmula são medidas quando a bolinha aparece (antes, pelo sumário, eram medidas com a mesa ainda chegando e ficavam fora da tela).
- **v66.5:** no quiz musical (a 10.7.8 e o jogo) e no quiz geral, a tabela volta a ficar sem os lantanídeos e actinídeos, no lugar da 10.6 (`abreF107` dá falso); os elementos que piscam na 10.7.8 não são das séries.
- **v66.6–v66.7:** na 10.6, aos 9 s (por 2 s), os blocos s e p crescem 7 % e brilham, com o halo de cada bloco (`cresceSP106`; os halos são refeitos na hora, e a 10.5.1 refaz os seus se foram medidos noutra narração); a tela escura da regra tem o título "Elementos Representativos (s ou p)". Na 10.6.1, sem as pulsações na chegada das setas: ficam as dos 11 s (bolinha do 3) e 12,3 s (etiqueta s²) e o revezamento do fim.
- **v70.1:** "A canoa virou" com as notas do professor: **sol sol lá sol fá mi** (Sol 3, Sol 3, Lá 3, Sol 3, Fá 3, Mi 3), o lá no Co (3d⁷). "Atirei o pau no gato": a 1ª nota com o dobro do tempo (o intervalo até a 2ª é maior). Os confetes do acerto não apareciam (o slide 10 não tinha a folha `.confete`, e eles caíam na do slide 1): agora `confete()` cria a folha no slide atual quando falta — vale também para o quiz geral. Entre as músicas, a caixa fica e só os subníveis trocam (`poeNotas`): os velhos sobem um fio e somem, os novos descem de cima, um depois do outro.
- **v70.0:** quiz musical com **4 músicas** — a 4ª é "A canoa virou": sol sol sol sol fá mi sol sol (a primeira frase das cifras melódicas, em dó, mais o "pois dei-"), com o sol no Ga (4p¹), o fá no Mg (3s²) e o mi no Ni (3d⁸). No acerto: confete, fanfarra (45 %) e aplausos (35 %), e a voz "perfeito"/"excelente"/"muitobem" ao acaso; entre uma música e a outra, "proxima"; na última, o elogio e o cartão. O erro agora diz "Toque na caixinha para ouvir de novo". (A narração 10.7.8 não foi regravada: se ela falar em "três músicas", fica desatualizada.)
- **v69.5:** o cabeçalho de quiz guarda o título de volta do cadastro do slide (`SLIDES[i].title`), não do texto da tela — fechado o quiz 2 e aberto o 3 logo depois, o texto ainda voltava letra a letra e, no fim do quiz 3, ficava "Quiz 2". No quiz musical, a **caixinha de música** (`.m10-caixinha`, SVG `CAIXINHA_SVG`) à direita dos subníveis: escura e sem toque durante o quiz; acesa em âmbar, balançando e soltando colcheias (`colcheia`) enquanto a melodia toca; depois, escura de novo mas tocável — toca a música outra vez (o "Ouvir de novo" das opções saiu). Na melodia, cada elemento brilha em âmbar com um pulso rápido de tamanho (`.soa10c`, no lugar do verde `certa3`).
- **v68.6:** no quiz geral, com a caixa escondida (a tabela acesa), os elementos citados na questão crescem 16 % e ganham um halo dourado que pulsa (`.qf-clara .pc.qf-cita`; `QUIZFINAL.marcaCitados`). Vale nas questões 4, 9, 10, 12, 16, 17, 18, 19 e 20, em cada versão (`QF_CITADOS`: A, B, C — nas 12 e 20, as quatro alternativas). O som do Confirmar caiu 40 % (`tocaEfeito('right', 0.6)`; o `tocaEfeito` aceita agora um volume opcional).
- **v68.5:** **no tópico 10 não se usam exceções** (regra do professor) — nem como alternativa errada. A questão "Criar" perdeu o Cu (versão A) e o Cr (versão B) e o "sem exceção" do enunciado; no lugar, distratores pela regra: Zn — 3d⁸ (coluna errada) e Sc — 4d¹ (camada errada) na A; V — 3d⁵ (coluna errada) na B. Ao escrever questões novas do 10, evitar Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag, Pt, Au.
- **v68.4:** no cartão da nota do quiz geral, o "Capa" virou **Relatório** (`QUIZFINAL.relatorio`): painel claro e rolável com as 20 questões divididas por tópico (resposta do aluno, ✓/✗, e no erro a certa e a explicação), a taxa de acerto por tópico em barras (verde 100 %, âmbar 50 %, vermelho 0 %) e o texto "O que revisar" (tópicos com 0 % primeiro, depois os de 50 %). "← Voltar à nota" traz o cartão de volta. As respostas ficam em `QUIZFINAL.respostas` (e no ONDE). **Refazer muda as questões**: há três versões de cada questão (`QUESTOES_A` + `QF_VARIANTES` → `QF_SLOTS`), mesma estrutura (tópico e nível de Bloom por posição); abrindo o quiz, a A; cada Refazer, a seguinte (A → B → C → A; `QUIZFINAL.rodada`, guardada no ONDE). A rolagem do relatório não pôde ser testada no Chrome invisível (lá nenhuma caixa rola); usa a receita da `.folha-lista` do resumo — conferir no tablet.
- **v68.3:** no quiz geral, o Confirmar toca sempre o mesmo som ("right"), acertando ou errando — sem o "error": o som não diz se acertou. Os acertos continuam contando para a nota.
- **v68.2:** o `quiz_final.mp3` foi regravado (28,0 s; legenda refeita). Tocar na caixa do quiz geral (fora dos botões, sem arrastar — até 8 px é toque) a esconde e a tabela acende (`.qf-clara` no slide tira o brightness .55 da mesa, em fade); um toque em qualquer lugar do slide a traz de volta e a tabela escurece (`QUIZFINAL.esconde`/`reaparece`/`ouveVolta`; esse toque não chega à tabela). O arrasto continua. O tutorial mudou (`QF_TUTORIAL`): sem o arrasto; aos 6 s a mão aparece na pergunta e aos 7 s toca (a caixa some), some aos 7,6 s; aos 8,8 s aparece na tela (no bloco s) e aos 9,2 s toca (a caixa volta), some aos 9,8 s; aos 13 s aparece perto da alternativa certa, aos 13,5 s a escolhe, vai ao Confirmar e o toca aos 15 s; some aos 15,5 s. A questão 1 fica escura até o fim da fala (28 s).
- **v68.1:** com a fala de abertura, o quiz começa pela **questão 0** (`QF_DEMO`: "Este aplicativo trata sobre...", certa "a tabela periódica"; selo cinza "Treino"; não conta). Depois de arrastar a caixa, a mão vai à certa (6,2–6,85 s) e a escolhe aos 7 s, vai ao Confirmar (8,7–9,55 s) e o toca aos 9,8 s (`demoConfirma`, sem som); a questão 1 entra valendo, mas escura e travada (`.escura`, brightness .42) até a fala acabar, quando clareia (filter .6s). A mão some aos 10,5 s. Se a fala falhar antes, a questão 0 vira a 1 (`paraFala`).
- **v68.0:** ao abrir o tópico 11 (sumário, carrossel ou o "Quiz final →" do musical), toca `Audios/quiz_final.mp3` (15,8 s) com o quiz travado (alternativas e Confirmar meio apagados, sem toque e sem arrasto). No relógio da fala (`QF_TUTORIAL`): aos 3 s a mãozinha amarela pousa na alça da caixa (aperta aos 3,5 s), dos 4 aos 4,8 s leva a caixa (+240, +60, dentro do slide), dos 5,1 aos 5,9 s a traz de volta, aos 6 s some em fade. Acabada a fala (ou se ela falhar), o quiz se solta (`QUIZFINAL.paraFala`). O Refazer e a volta pelo ONDE não tocam a fala. Legenda no legendas.js (`quiz_final`).
- **v67.9:** no quiz geral, o Confirmar não mostra a correção (nem verde/vermelho, nem a explicação): toca o som do acerto ou do erro e a próxima questão entra na hora (na última, o cartão da nota). Não há mais o botão "Próxima". (O professor pediu isso já na v67.7 — "quando clicar no confirmar não corrige, passa automaticamente pro próximo" era um pedido, não um defeito.)
- **v67.8:** no quiz geral, o "Próxima →" nasce no lugar do Confirmar: chega apagado e só aceita o toque 0,9 s depois. Antes, um duplo clique (ou o toque contado duas vezes) confirmava e já passava, e a correção não aparecia.
- **v67.7:** o quiz geral é o foco agora. Em todas as questões, a mesa é a do começo do tópico 10 (lilás, com as séries embaixo): `QUIZFINAL.mesaDoComeco()` põe a trilha "10" parada no 0, venha o quiz do sumário, do cartão do musical, do Refazer ou do ONDE; o próprio `abre` escurece a sala (`QUIZ10C.escurece`). Tocar numa alternativa só a marca (`.escolhida`, dá para trocar); o som (right/error) e a correção vêm no botão **Confirmar**, que vira "Próxima →". Na troca de questão (`proxima`), a caixa dispara para a direita (borrada, esticada) e a nova vem da esquerda, passa do lugar e assenta, com riscos de luz e faíscas (`rastro`) e um brilho que varre a caixa; a barra de progresso cresce depois que ela chega. O ONDE guarda o quiz geral (`o.final = { i, acertos }`; respondida, já conta a seguinte) e reabre na mesma questão.
- **v67.6:** no quiz geral a caixa das questões se arrasta (pelo fundo, não pelos botões; o tracinho no alto é a alça), sempre inteira dentro do slide; fica onde foi posta nas questões seguintes e no Refazer, e volta ao meio quando o quiz fecha (`QUIZFINAL.arrastavel`, `dx`/`dy`). No cabeçalho do quiz geral o título começa logo depois do "11" (antes o cobria).
- **v67.5 — o tópico 11:** o quiz geral deixou de ser o "v" do tópico 10 e virou o **tópico 11** (`TOPICO_11`), só com ele. Não é um slide novo: mora no slide 11, sobre a mesa do 10. No sumário é o capítulo "11. Quiz geral" (o item do NAV_TOPICOS tem `cap11:true` e fica fora da lista do 10); no carrossel é o cartão depois do último slide (`CAR.N11`, "11 / 11"; a foto é `Imagens/slides/pc-11.webp` e `cel-11.webp` — `node ferramentas/gera-miniaturas.mjs 11`); com o quiz aberto o cabeçalho mostra 11 (`no11()`). Do cartão 11 para o 10 no carrossel, o tópico 10 recomeça. A régua de quadradinhos do alto continua com os 10 slides.
- **v67.4:** na 10.7.1 (o Fe), sem as pulsações na chegada das setas (6,9 s e 8,4 s): a bolinha do 4 pulsa aos 24 s e aos 28 s, a etiqueta d⁶ aos 25,9 s e aos 29 s (`T1071.piscaL`, `piscaC`). O 3 vermelho continua pulsando aos 24,9 s.
- **v67.3:** durante a 10.6.3.1 o play sai da tela (classe `sem-play10631` no `#stage`, posta no `tick1064` e tirada no `fora`).
- **v67.2:** na 10.7.6, aos 7,2 s (logo depois que a bolinha 7 da série aparece), as duas bolinhas 7 — a da linha 7 e a da série — pulsam juntas, 2 vezes (`T1076.pulsa7`; `pulsa1063` na da linha, `pulsa1076` na da série).
- **v67.0:** na 10.7.0, a tela escura da regra do bloco d tem o título "Elementos de transição externa (bloco d)" (`tit107` dentro do `veu1070`), que entra junto com ela.
- **v66.9 — a 10.6.3 dividida:** o áudio da 10.6.3 foi cortado aos 22,5 s (termina em "E agora, deu para entender?"; a festa do 6s¹ acaba aos 22 s). 1,5 s depois toca sozinha a **10.6.3.1** (12,1 s: "Bora testar pra ver, fazendo um quiz expresso? Eu destaco um elemento…"). Na 10.6.3.1: 1 s a sala apaga e o cabeçalho vira "Quiz 2"; 4,3 s o Al acende; 5 s a mãozinha aparece no meio; 6,2 s ela toca a bolinha do 3 (e digita "Subnível mais energético: 3"); 8 s toca o card p¹ (aplausos e confetes); 9,1 s ela sai e os dois ficam verdes; no fim, 1,5 s depois, o quiz 2. No código, o `tick1064` cuida das duas: na 10.6.3.1 o tempo é `P2_1064` (24) + t, e os tempos da demonstração em `T1064` são `P2_1064 + x`.
- **v66.8:** no iodo e no Cs, como no Mg, sem as pulsações na chegada das setas. Iodo: a bolinha do 5 pulsa aos 20 s e a etiqueta p⁵ aos 21,5 s. Cs: o Cs brilha aos 2 s; a bolinha do 6 pulsa aos 9,4 s e aos 16 s, a etiqueta s¹ aos 11 s e aos 17,6 s.

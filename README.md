# Audiobook interativo da Tabela Periódica Moderna

A mesma aula do Prof. Amauri Junior, do lado de cá: o aluno abre
`tabela-periodica.html` no celular ou no Chromebook e a aula anda
sozinha, guiada pelo áudio. O palco é fixo em 1280×720 e a tela apenas
dá zoom nele, como no app do professor.

## O que já está aqui

1. **Capa** — o endereço é link (abre o e-mail já endereçado) e, com o
   botão direito ou o dedo demorado, oferece **Copiar e-mail**. O título
   e o retrato à esquerda; à direita, a tabelinha
   viva e três **blocos gigantes**: sódio, ítrio e lantânio, os mesmos
   cubos de seis faces do slide 1, em ponto grande. Quando a tabelinha
   acende um deles lá em baixo, o bloco dá uma volta aqui em cima.
2. **A Tabela Periódica** — os 118 elementos, prontos na mesa.

A passagem entre as duas é o cubo girando, a mesma do app do professor.
Os outros slides entram na lista `SLIDES`, no alto do script, e o resto
do arquivo não muda.

## Os cubos

Cada elemento é um **cubo de seis faces iguais**: número atômico,
símbolo, massa e nome em todas as seis. É de propósito — os cubos vão
girar nos minijogos e no que a narração mandar, e a carta não pode
perder a cara ao virar.

E cai sempre de pé: acabado o giro, o cubo leva uma correção no plano
da tela que põe o texto direito outra vez (`correcaoDeLeitura`). Meia
volta para cima, num cubo de verdade, mostraria a carta de cabeça para
baixo; aqui não mostra.

## A narração

O ícone troca pelo **atributo** `hidden`, e não pela propriedade: os
ícones são `<svg>`, e `.hidden` só existe em elementos HTML — num svg
ela é uma variável solta, e o botão ficava sempre no play.

O botão de play/pause fica no canto de baixo, à direita, no âmbar do
"Tabela Periódica" — a cor do que a capa tem de mais importante escrito
nela. O anel em volta dele é o quanto do áudio já correu.

**Parado, ele chama**: um brilho que respira e um anel que se abre e se
desfaz. A tocar, cala-se — já foi encontrado — e mostra a pausa no lugar
do play. O ícone segue o estado de verdade do som, e não o que o clique
pediu: assim nunca discorda dele, nem quando quem pára a narração é
outra coisa qualquer. Na capa ele é peça de montagem como
as outras — o **G** pega-o e arrasta-o —, e fora dela volta sozinho ao
canto que o CSS lhe dá.

Os arquivos vão em `Audios/`, um por slide, na ordem de `TRILHAS`:

```js
const TRILHAS = {
  'capa': 'Audios/audio_tabela_0.mp3',     // a abertura
  '1':    'Audios/audio_tabela_1.mp3',     // a onda das famílias e a tela escura
  '1.1':  'Audios/audio_tabela_1.1.mp3',   // a onda dos 118 e o verde ao acaso
  '1.2':  'Audios/audio_tabela_1.2.mp3'    // o elemento escolhido
};
const TRILHA_DO_SLIDE = ['capa', '1'];
```

Um slide pode ter **várias trilhas em cadeia**. Cada uma, ao acabar, diz o
que vem a seguir (`SEQ.acabou`).

**Slide sem trilha nenhuma declarada** (`null`): o botão nem aparece — um
botão que não toca nada é um botão avariado. É o caso da capa. Basta pôr
o nome do arquivo ali e ele volta.

**Trilha declarada que não carrega** (o arquivo ainda não foi gravado, ou
falhou): o botão fica em cena, mais apagado, e diz porquê quando alguém o
aperta — assim o lugar dele não dança quando ela chegar.

Os nomes dos arquivos não podem ter espaços: publicado, um espaço vira
`%20` e há servidor que não o devolve.

## A tabela viva

Parada, a tabela seria um cartaz. Enquanto a narração não começa, ela
respira sozinha, em compassos que correm ao mesmo tempo e não se
combinam:

- **Um cubo de cada vez**, ao acaso: uma volta para um lado, para o
  outro, para cima — ou só um pulinho no lugar. Nunca dois juntos: o
  olho tem de poder seguir aquele.
- **Um salto com giro**: parte desses elementos pula e gira ao mesmo
  tempo, e cai de volta na casa de onde saiu. Um vai na carta e o outro
  no cubo dentro dela, e por isso não se estorvam.
- **Uma família de cada vez**: a coluna inteira sobe, de cima para
  baixo, fica um instante no ar e desce. A família seguinte começa a
  subir **quando a anterior começa a descer** — é essa sobreposição que
  faz a tabela ondular em vez de piscar. São as dezoito, cada uma por
  sua vez, na ordem baralhada de uma rodada. O número do grupo recua
  enquanto a família dele passa por cima.
- **As coordenadas**, de oito em oito segundos mais ou menos: o sistema
  do slide 3 da aula do professor. Um elemento salta girando e, enquanto
  está no ar, a linha e a coluna dele acendem inteiras — as duas faixas
  âmbar, os dois números virados medalha, o resto da tabela recuado —, e
  a ficha dele aparece no vazio acima dos metais de transição, com o
  período e o grupo escritos ao lado. Este compasso **pede a palavra**:
  manda os outros dois calarem-se e entra assim que o que estava no ar
  pousar. (Esperar por um silêncio não servia — com as famílias a
  entrarem de 1,1 em 1,1 s e a demorarem 2 s a sair, ele nunca chegava.)

A vida pára quando a narração começa — daí em diante quem manda na
tabela é o roteiro — e volta quando ela é pausada ou acaba. `VIDA.liga()`
e `VIDA.desliga()` ligam e desligam à mão.

## A coreografia

O que a narração manda a tela fazer vive em `ROTEIROS`: uma lista por
slide, com o tempo em segundos e o que fazer.

**O relógio desta cena é o do áudio, e mais nenhum.** Pausar a narração
pára a coreografia onde ela está; seguir, segue de onde parou; e voltar
o áudio atrás traz a cena de volta com ele. Por isso **nenhum evento usa
temporizador próprio**: até a duração de um destaque é outra marca do
roteiro, no tempo do áudio. Um `setTimeout` correria sozinho com o som
em pausa, e a mão acabaria a apontar coisas que a voz ainda não disse.

O laço que lê esse relógio vai num intervalo de 60 ms, e não num
`requestAnimationFrame`: o rAF pára quando a aba deixa de desenhar, e a
narração continua a tocar.

A capa já está coreografada:

| tempo | o que acontece |
|---|---|
| 1,8 s | acende **Audiobook** |
| 2,7 s | a caixa de luz desliza para **interativo** |
| 3,6 s | apaga |
| 4,0 s | acende o retrato e o nome do autor, os dois na mesma caixa |
| 7,0 s | acende **Tabela Periódica** |
| 8,0 s | apaga (o destaque durou um segundo) |
| 9,6 s | acende a tabelinha da direita |
| 13,6 s | apaga |
| 14,5 s | digita **O que é a tabela...** à direita do retrato |
| 15,8 s | debaixo, **Pra que serve?** |
| 17,2 → 20 s | **Como podemos usá-la na Química...** — e o tracinho fica a piscar |
| 22 s | apaga as três |
| 24,5 s | **9º ano**, em cima |
| 27 → 28 s | **1º ano do Ensino Médio** |
| 30 s | apaga |
| 33,6 s | a mãozinha vai à alça dos controles |
| 34,5 s | aperta, e a barra abre |
| 35,3 s | vai ao botão da visão geral |
| 36,1 s | aperta, e ela abre |
| 36,7 s | passa para as miniaturas — a barra ficou por baixo da visão geral |
| 37,7 s | a visão geral fecha |
| 38,3 s | a barra fecha e a mão sai |
| 38,8 s | a mão aponta o botão da narração |
| 41,2 s | sai |
| 46,0 s | volta ao botão |
| 46,8 s | e faz o gesto de apertar |
| 47,4 s | sai |

A mão **faz mesmo** o que mostra: abre a barra e abre a visão geral. Só
o play é mímica — um clique de verdade ali pararia a narração no meio da
frase que a está a explicar.

### A sequência do slide 1

| quando | o que acontece |
|---|---|
| fim da abertura | o play vira **Iniciar →**; o toque leva ao slide da tabela |
| play | toca a `1`, e a vida solta da tabela cala-se até o fim da história |
| `1` · 2,6 → 4,8 s | a onda: cada família sobe e desce, da esquerda para a direita |
| `1` · 13,6 s | a tela escurece; digita **A tabela é um instrumento de consulta.** até 15,6 s |
| `1` · 16,6 → 18 s | embaixo, **Não foi feita pra ser memorizada!** |
| fim da `1` | a tela fica escura e pede **Toque na tela para continuar**; com a tela escura, o botão do canto sai de cena |
| toque | a tela clareia (esmaece) e toca a `1.1` |
| `1.1` · 5,1 → 7 s | os 118 crescem e piscam numa onda, da esquerda para a direita |
| `1.1` · 8 s → fim | um de cada vez cresce e acende de verde; o anterior volta ao normal |
| fim da `1.1` | **Toque em um elemento** |
| toque num elemento | ele sobe a girar e a crescer até o vazio acima do Fe e do Co, e toca a `1.2` |
| `1.2` · 1 s | o card dá uma pulsada |
| `1.2` · 2,9 s | o número atômico cresce; à esquerda aparece **Número atômico →**, a brilhar |
| `1.2` · 3,8 s | a massa cresce e escreve-se **Massa atômica →**, a brilhar; o número volta, o nome dele fica sem brilho |
| `1.2` · 7,3 s | a massa volta; os dois nomes ficam |
| `1.2` · 9 → 14 s | o número cresce outra vez, e o nome dele volta a brilhar |
| `1.2` · 15,7 s → | e outra vez, até o fim |
| fim da `1.2` | o play fica pronto na **`1.3A`** se o símbolo do escolhido tem uma letra, ou na **`1.3B`** se tem duas |
| `1.3A` · 11,7 s / `1.3B` · 10,5 s | o elemento volta para a casa dele — a ida vista ao contrário |
| `1.3A` · 1,2 s | o símbolo dentro do card do escolhido pulsa duas vezes |
| `1.3A` · 8,7 → 13 s | os elementos de **duas letras** crescem, um a um, com luz âmbar |
| `1.3A` · 16 → 23 s | oito elementos cujo **nome em português começa pelo símbolo** — H, C, N, Al, Cl, Fe, I, Ba — crescem um a um, com luz marrom |
| `1.3A` · 24,9 s | o **F** gira e cresce no lugar; 26 s o nome pulsa 2×; 27 s volta, com a animação ao contrário |
| `1.3A` · 29,2 s | o mesmo com o **Ca**; 31 s o nome pulsa; 33 s volta |
| `1.3A` · 33,8 s | o mesmo com o **O**; 35,7 s o nome pulsa; 38 s volta |
| `1.3B` · 1 s | o símbolo dentro do card do escolhido pulsa duas vezes |
| `1.3B` · 5,4 s | só a **segunda letra** do símbolo pulsa duas vezes |
| `1.3B` · 9 s | o símbolo todo pulsa uma vez |
| `1.3B` · 13 → 20 s | oito elementos cujo nome começa pelo símbolo — He, Li, Ne, Al, Cl, Fe, Ni, Ba — crescem um a um, com luz marrom |
| `1.3B` · 21,7 s | o **F** gira e cresce no lugar; 22,8 s o nome pulsa 2×; 24 s volta |
| `1.3B` · 25,6 s | o **Ca** gira e cresce; 27 s o nome pulsa 2×; 28 s volta |
| `1.3B` · 28 s | e o **O** gira e cresce; 29 s o nome pulsa 2×; 32 s volta |
| fim da `1.3A`/`1.3B` | **o quiz**: seis perguntas seguidas — "Qual o nome desse elemento?" |
| fim do quiz | o cartão da nota, e o play pronto na **`1.4`** |
| `1.4` · 1 → 8 s | oito elementos de símbolo sem nada a ver com o nome em português — P, K, Ag, Sn, Sb, W, Au, Hg — crescem um a um, com luz vinho |
| `1.4` · 10 s | o **Na** gira e cresce no lugar, e o nome dele some; 15 s "Sódio" aparece e pulsa 2×; 24 s volta |
| `1.4` · 25 s | o **Pb**, do mesmo jeito; 29 s "Chumbo" aparece e pulsa 2×; 34 s volta |
| `1.4` · 35,6 s | o **Cu**; 39,7 s "Cobre" aparece e pulsa 2×; 45 s volta |
| `1.4` · 54 s | **o segundo quiz**, com os de nome diferente (arrastado o áudio para depois dos 54 s, abre quando ele acaba) |

Tudo o que anima é **função do tempo da narração** (`efeitosDoTempo`):
a altura de cada coluna na onda é um seno do segundo em que o áudio
está, a tela escura é "trilha 1 e depois de 13,6 s", e até o verde ao
acaso segue um baralho fixo dos 118 — o mesmo segundo dá sempre o mesmo
elemento, e voltar o áudio atrás mostra outra vez os mesmos. Os nomes "Número atômico" e "Massa atômica" ficam à esquerda do card,
cada um na altura do que aponta — altura medida no próprio card, porque
o aluno pode ter escolhido qualquer um dos 118. Só o voo do
eleito tem relógio próprio, e ele acontece com o som parado, entre uma
trilha e a outra.

### O quiz

No fim da `1.3A` ou da `1.3B`, e outra vez aos 54 s da `1.4`, **seis
perguntas** seguidas. Um elemento
sai da casa dele e vem para a frente, a girar, junto com o cartão **Qual
o nome desse elemento?** — o cubo à esquerda, com um **?** no lugar do nome
(que está escrito nas seis faces e daria a resposta), e as três respostas
à direita, uma em cima da outra.

**Enquanto o quiz dura, o play sai de cena**: quem faz a aula andar é a
escolha do aluno (nem a barra de espaço toca nada).

| resposta | o que acontece |
|---|---|
| acerto | confetes, `funfare` e `applause`, e a voz: `exato!` e `muitobem` alternados (1.ª, 3.ª e 5.ª `exato!`; 2.ª e 4.ª `muitobem`), `perfeito` na 6.ª |
| erro em qualquer uma | a tela treme em vermelho com `error`, e depois `Calmanaproximaacerta` |

Depois de cada resposta o cubo mostra o nome certo e volta para casa,
rápido e a girar, e o exemplo seguinte rola para a frente **ao mesmo tempo**
que toca o som da entrada: `eesseaqui` e `próximo` alternados (entrada da
2.ª e da 4.ª `eesseaqui`; da 3.ª e da 5.ª `próximo`), `sómaisesse` na entrada
da última. O som da entrada toca também depois de um erro. Errar não prende
o aluno: a aula avança. Cada
efeito sonoro espera o anterior acabar.

**No fim, o cartão da nota**: de 1 a 10, pela fração de acertos
(acertos ÷ 6 × 10, arredondado, nunca abaixo de 1 — 6 acertos dão 10, 5
dão 8, 4 dão 7, 3 dão 5), com uma mensagem sempre positiva que muda com a
nota, e o som `statistics`. Depois do quiz da `1.3A`/`1.3B` o play volta, já
carregado com a `1.4`. Depois do quiz da `1.4` ainda não há narração
seguinte: o cartão fica sem a seta "Toque no play para continuar", e o
play não volta (`DEPOIS_DO_QUIZ` diz o que vem depois de cada quiz).

Os elementos saem de listas (`QUIZ_UMA`, `QUIZ_DUAS`) em que **o símbolo
sai do nome em português** — Carbono dá C, Cobalto dá Co. Ficaram de fora
os que não batem: Sódio (Na), Potássio (K), Cobre (Cu), Prata (Ag), Ouro
(Au)… Depois da `1.3A`, seis de uma letra; depois da `1.3B`, seis de
duas; nunca o elemento que o aluno escolheu. A primeira resposta de cada
item é a certa; as outras são nomes de verdade, com a mesma inicial
(Cobalto, Cromo, Cálcio) — mas **nenhuma opção começa pelas mesmas duas
letras de outra**, sem contar acentos: com Cobalto e Cobre lado a lado, o
"Co" do cubo servia aos dois, e o aluno não tinha como decidir pelo
símbolo.

O quiz da `1.4` usa a lista contrária, `QUIZ_DIFERENTES`: só os de **nome
bem diferente do português** — Na (Sódio), K (Potássio), Cu (Cobre), Ag
(Prata), Au (Ouro), Hg (Mercúrio), Pb (Chumbo), Sn (Estanho), Sb
(Antimônio), W (Tungstênio), P (Fósforo), S (Enxofre). As opções erradas
são armadilhas de letra, nomes que parecem sair do símbolo (Nióbio para
Na, Criptônio para K, Platina para Pb), e a regra das duas primeiras
letras vale do mesmo jeito.

A volta do elemento é a ida ao contrário: a ida sai depressa e chega
devagar, então a volta sai devagar e chega depressa — a fração do
caminho feita é p³, e posição, tamanho e giro seguem a mesma curva, em
função do tempo da narração.

### As frases digitadas

Não são marcas do roteiro: são uma **função do tempo**. A cada tique do
relógio pergunta-se em que segundo a narração está, e daí sai quantas
letras de cada frase estão escritas. Pausar congela a escrita a meio da
palavra; voltar o áudio atrás des-escreve. Ficam em `FRASES_CAPA`:

```js
{ de:17.2, ate:20.0, some:22, txt:'Como podemos usá-la na Química...' }
```

`de → ate` é o intervalo em que ela é digitada; `some`, quando esmaece.
O tracinho mora no fim da frase mais recente — firme enquanto ela se
escreve, a piscar quando acabou. A caixa das frases é peça de montagem
(`frases`), com tamanho fixo mesmo vazia: uma caixa de altura zero não
se deixaria pegar.

### O destaque e a mãozinha

| chamada | o que faz |
|---|---|
| `foca('.p-audio')` | a peça cresce e ganha um halo quente |
| `foca(['.capa .foto','.capa .autor'])` | acende várias ao mesmo tempo |
| `semFoco()` | apaga |
| `levaMao(elemento)` | a mãozinha desliza até ele |
| `bateMao()` | o gesto de apertar, com a onda do toque |
| `tiraMao()` | sai de cena |

**Nunca há dois acesos**: acender um apaga o anterior, e é essa troca
que o olho segue. Nos textos o destaque é palavra a palavra — cada
pedaço do título é uma peça própria (`.p-audio`, `.p-inter`,
`.p-tabela`) e cresce sozinho.

As duas palavras da primeira linha crescem **para fora**, cada uma para
o seu lado — "Audiobook" ancorada no fim, "interativo" no começo. A
partir do centro, com um aumento de 20%, uma comia a outra inteira.
"Tabela Periódica" tem a linha só para ela, e cresce do meio.

As peças soltas — o retrato, o nome, a tabelinha — crescem pelo mesmo
caminho: uma segunda escala, `--luz`, entra na conta da escala delas,
ao lado da que a montagem pinçou. Cada uma mexe na sua, sem apagar a
outra.

### O que o roteiro pode pedir (`TP`)

| chamada | o que faz |
|---|---|
| `TP.gira(quem, {eixo, graus, dur, atraso})` | gira os cubos; `eixo` é `'x'`, `'y'` ou `'z'`, e `graus` soma-se ao que já havia |
| `TP.onda({eixo, graus, dur, passo})` | o giro atravessa a tabela coluna a coluna |
| `TP.acende(quem, {so:true})` | levanta e ilumina; com `so`, apaga todo o resto |
| `TP.destaca(quem)` | deixa só estes à vista, sem os levantar |
| `TP.salta(quem, {alto, atraso})` | o pulinho no lugar |
| `TP.pulaGirando(quem, {alto, eixo, graus, subir, cair})` | pula e gira ao mesmo tempo, e cai no mesmo lugar |
| `TP.coordenadas(quem, {ms})` | acende a cruz do elemento: faixas, medalhas, ficha, período e grupo |
| `TP.semCoordenadas()` | apaga a cruz |
| `TP.apaga()` | tudo volta ao normal |
| `TP.reinicia()` | desfaz giros e luzes |
| `TP.diz('texto')` | um recado curto no rodapé do palco |

**quem** pode ser o número atômico (`26`), o símbolo (`'Fe'`), uma lista
(`[1,8,11]`) ou um pedido: `{familia:'halogenios'}`, `{grupo:17}`,
`{periodo:3}`, `{de:57, ate:71}`. Sem nada, são os 118.

## Na tela

| tecla | o que faz |
|---|---|
| ← → | voltar / avançar |
| Espaço | tocar e parar a narração |
| O | ver todos os slides |
| G | modo montagem: arrastar e redimensionar a capa |
| Ctrl+C | na montagem: copiar posições e tamanhos |
| R | na montagem: devolver o slide ao lugar de origem |
| F | tela cheia |
| Esc | fechar / esconder os controles |

A visão geral — o botão de quadradinhos na barra, ou a tecla **O** —
mostra os slides em miniatura. Não são desenhos deles: são os próprios
slides copiados e postos em escala, com o que estiver dentro de cada um
no momento em que ela abre — a tabela montada, os cubos como estiverem
virados, a carta que a narração deixou acesa. Um toque na miniatura
leva a aula para lá.

O toque num cubo dá-lhe uma volta — é a única coisa que o aluno pode
fazer com as mãos, por enquanto.

## Na montagem (tecla G)

Fora da aula, a capa vira mesa de trabalho: **G** — ou o ícone ✥ da
barra, para quando o tablet estiver sem teclado — solta todas as peças
dela. Um dedo arrasta; dois dedos em pinça mudam o tamanho, e a roda do
mouse faz o mesmo. **R** devolve tudo ao lugar de origem.

São peças da capa: a marca, o título, o risco, o nome do autor, o
endereço, o retrato e a tabelinha do canto — que mora no palco, e não no
slide, mas na capa é peça como as outras.

Ao entrar na montagem, cada peça é **solta**: sai do fluxo do layout e
passa a viver por x, y — o centro dela, em px do palco 1280×720 — e uma
escala. As medidas são tiradas todas ANTES de soltar qualquer uma: se a
primeira saísse do fluxo, as de baixo subiriam e as seguintes já sairiam
erradas.

**Ctrl+C** copia as posições e os tamanhos de tudo o que está na tela e
abre a folha com o texto, já na área de transferência:

```
/* slide 1 · Capa */
  { el:'marca',      x: 212, y:227, larg: 248, alt: 15, fonte:   12, esc:1.00 },
  { el:'titulo',     x: 337, y:338, larg: 497, alt:162, fonte:   52, esc:1.00 },
  { el:'risco',      x: 188, y:447, larg: 200, alt:  4             , esc:1.00 },
  { el:'autor',      x: 250, y:484, larg: 323, alt: 29, fonte:   22, esc:1.00 },
  { el:'email',      x: 275, y:663, larg: 373, alt: 22, fonte:   17, esc:1.00 },
  { el:'foto',       x: 790, y:400, larg: 198, alt:293             , esc:1.00 },
  { el:'tabelinha',  x:1084, y:514, larg: 340, alt:212             , esc:1.00 },
```

É esse texto que volta para mim: com ele eu fixo no arquivo, como
valores, o que foi arrumado à mão aqui. Fixado, ele mora em `LAYOUTS`,
no script — e é de lá que a capa sai posta, sempre, mesmo sem ninguém
abrir a montagem. O **R** devolve o slide a esses valores, e não ao que
o CSS sozinho faria.

As medidas são tiradas outra vez quando as fontes de casa acabam de
carregar: a medida de um texto é a medida da letra dele, e até lá quem
está na tela é a fonte do sistema, que tem outra largura.

## A versão

O número da versão aparece no **canto de baixo à esquerda** do palco, e
sobe a cada mudança publicada. É por ele que se confere, no aparelho do
aluno, se a atualização já chegou.

Ele mora num lugar só: a constante `VERSAO`, no começo do script de
`tabela-periodica.html`. O selo lê dali, e o service worker também —
a página regista-o como `sw.js?v=v1.0`, e ele tira a versão do próprio
endereço. Subindo `VERSAO`, muda o endereço, o aparelho instala o serviço
novo e apaga o cache velho. Não há uma segunda versão para esquecer.

Os commits seguem o mesmo número: `v1.1 · o que mudou`.

## Sem internet

O app se instala: aberto pelo endereço publicado, o navegador oferece
instalá-lo, e a partir daí ele abre em tela cheia, com ícone próprio, e
sem depender da rede. As fontes moram em `fontes/`, servidas do próprio
repositório — nada é pedido para fora.

**Cada narração nova tem de ser acrescentada à lista `CASCA`, em
`sw.js`, e a versão ali subida** — senão o aparelho já instalado
continua a servir a casca velha, sem ela.

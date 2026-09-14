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
2. **A Tabela Periódica** — os elementos prontos na mesa; por enquanto
   sem os lantanídeos e os actinídeos, que a narração revela mais tarde.
3. **2 · Os critérios de Organização — A lei periódica** — a mesma tabela,
   a desordem, o encaixe e os critérios de Moseley (narrações `2` a `2.5`) e o quiz.

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

### As séries escondidas

Os **lantanídeos e os actinídeos ficam fora da mesa** por enquanto — a
narração vai revelá-los mais tarde (`SERIES_VISIVEIS = false`). Os cubos
deles existem, mas nascem com a classe `serie-oculta` e não entram em
`TP.todos()`: nenhuma onda, sorteio, salto ou cruz os acorda, e o verde ao
acaso sorteia só entre os que estão na mesa. As casas "57–71" e
"89–103" do grupo 3 continuam lá, sem a seta para baixo.

Sem as duas linhas de baixo, a tabela aproveita o espaço: **cubos de 62
px** em vez de 58 (quem limita é a largura, com 18 colunas) e o bloco
centrado na altura (`TAB_TOPO` 164). A letra das faces cresce junto, por
`--k = LADO / LADO_BASE`. Crescido no lugar, um cubo nunca passa das
bordas do palco: o Na, na coluna 1, é empurrado para dentro enquanto
cresce. O Urânio saiu do quiz por ser actinídeo.

## O slide 3 · Os critérios de Organização — A lei periódica

Chega-se a ele pelo **Continuar** do cartão do jogo da memória (ou pela
barra). A tabela é a mesma do slide 2 — sem as séries, com a medida do
celular — e, como lá, respira sozinha à espera do play: cubos que
saltam e giram, famílias que sobem e descem, a cruz das coordenadas.

| quando | o que acontece |
|---|---|
| `2` · 0 → 12 s | a mesa continua a respirar sozinha, como antes do play |
| `2` · 14 → 17,2 s | uma **faixa** de brilho verde atravessa a tabela da esquerda para a direita (até 15,6 s) e volta, da direita para a esquerda — forte na frente e a apagar-se atrás dela (`ONDA_VERDE.cauda`, 3 colunas) |
| `2` · 18 → ≈ 24 s | **os cards desorganizam-se um de cada vez**, em ordem sorteada, cada um num arco até a sua vaga, e ficam num **cinza neutro** — a cor da família só volta quando o card assenta na casa dele. Em `DESORDEM`: `dura` 0,8 s por card, `fila` 0,06 s entre um e o seguinte (≈ 6 s ao todo), `curva` 0,35 (o salto é uma curva, mesmo na vertical), `giro` 17° |
| `2` · 29 s | a tela escurece e **Henry Moseley** entra pela borda **esquerda** e pousa, com "Henry Moseley · 1913" embaixo |
| `2` · 39 → 39,8 s | "Critério 1" é digitado à direita |
| `2` · 40,2 → 44 s | em duas linhas: "Os elementos serão organizados em linhas, / em ordem crescente de número atômico." |
| fim da `2` | o play sai e aparece "Toque na tela para continuar" |
| o toque | a tela escura esmaece com a foto e o texto, e toca a `2.1`; a desordem fica |
| fim da `2.1` | **o 1 brilha**, em vermelho neon (as casas vazias e os números dos grupos e dos períodos continuam escondidos: a tabela forma-se do nada, e eles só voltam com ela toda montada): tocando nele, ele voa para a casa dele (e ganha a cor ao assentar) e toca a `2.2`. Depois brilham o 2, o 3 e o 4 — só o que brilha responde; os outros tremem um fio |
| depois do 4 | a tabela arruma-se sozinha, um card de cada vez, até ao **36**, e pára; **a `2.3` dispara quando o 32 salta** para o lugar dele (`ENCAIXE`: `toqueAte` 4, `sozinhoAte` 36, `gatilho` 32, `passo` 0,0875 s — 60 % mais rápido que os 0,14 s do começo) |
| — | o card que volta para casa voa por cima dos espalhados e fica acima deles: a tabela que se forma nunca fica tapada |
| — | cada salto para casa leva **0,26 s** (`SALTO`) — os 0,7 s do começo, 80 % mais rápidos e depois mais 50 % —, igual no toque, no automático e na junção das colunas |
| `2.3` · 2,5 s | a tela escurece de novo, com Moseley já no lugar e "Critério 2" já escrito |
| `2.3` · 3,6 → 7 s | em duas linhas: "Os elementos quimicamente semelhantes / formarão colunas." |
| fim da `2.3` | "Toque na tela para continuar"; o toque desfaz a tela escura, em fade, e toca a `2.4` |
| `2.4` · 2,8 s | o que está montado (do 1 ao 36) **abre-se em colunas** — um pouco menores, para caberem — e fica à frente dos espalhados, sem brilho fixo; **aos 25 s as colunas juntam-se de novo** |
| `2.4` · 7 → 12 s | no vazio da tabela, num quadro claro: "Nessas colunas todos são semelhantes" (digitada dos 7 aos 10 s, apaga-se aos 12 s); junto, um brilho verde varre **uma coluna de cada vez, de cima para baixo** — só as que têm mais de um card: a 1, a 2 e da 13 à 18 —, e não fica |
| `2.4` · 15 s | o **H** cresce e destaca-se, com luz dourada, à frente de todos (um fio para dentro, para não sair do palco); **aos 25 s volta ao normal**, ao lugar dele, junto com as colunas |
| `2.4` · 18,2 → 21 s | **só na coluna 1**: o Li, o Na e o K crescem e brilham em sequência, descendo e subindo de volta |
| `2.4` · 24 s | o texto apaga-se |
| fim da `2.4` | o **37** brilha; tocado, a tabela inteira arruma-se — as colunas juntam-se, o H volta, e os que faltam voam para casa um de cada vez — e, montada, **brilha**, com `funfare`, confetes e `applause` |
| depois da festa | toca a **`2.5`**; a tabela volta a ser de cubos (um toque num card fá-lo girar) |
| `2.5` · 4,8 s | a tabela abre-se em **7 linhas**, com os números delas (o modelo do professor) |
| `2.5` · 6–8 s | brilho verde e aumento sutil do 1 ao 118, forte na frente e a apagar atrás |
| números | uma vez na bolinha do professor, os números das linhas e das colunas ficam assim (os das linhas só se escondem com a tabela em colunas) |
| `2.5` · 9,1 s | a tabela passa às **18 colunas**, com os números delas |
| `2.5` · 12–16 s | o mesmo brilho, coluna a coluna (de cima para baixo) |
| fim da `2.5` | a tabela junta-se e toca a **`2.5A`**; daí em diante, um toque em qualquer lugar da tabela a abre em linhas, o seguinte em colunas, o terceiro fecha |
| fim da `2.5A` | o botão do canto troca o play por um **ponto de interrogação**: o quiz |
| fim do quiz | depois de `statistics`, toca a **`2.5B`** (e cala se o aluno escolher antes); **Continuar** leva ao slide 4 |
| o quiz | junta a tabela, apaga o fundo (preto, como no quiz do professor), toca `quiz1` e, acabado ele, a tabela gira as faces e entra a questão 1 de 8 — ver "O quiz do slide 3" |
| — | todo salto é curvo: uma Bézier com o ponto de controlo ao lado do meio do caminho (`pontoDoArco`), na desordem, no encaixe e na montagem final |

Na desordem, **só os 48 primeiros (do 1 ao 48) ficam na tela**, todos na
**faixa de baixo** — o espaço das linhas 5 a 7, que fica livre enquanto a
tabela se monta até à linha 4 —, numa grade de 12 × 4 com um tremor
pequeno: a parte de cima é onde a tabela se forma, e nada lá fica por
cima dela. Os
outros saem voando pela direita, para fora da tela, e só voltam quando
são chamados, na arrumação final (`NA_TELA`); o sorteio é fixo, e voltar o
áudio refaz a mesma desordem. Desarrumada a mesa, as casas vazias e os
números dos grupos e dos períodos esmaecem — voltam com a ordem.
Tudo segue o relógio da narração: pausar congela, voltar desfaz.

Por dentro, `SLIDES_COM_MESA = [1, 2]`: a mesa é montada em cada um
desses slides, e as funções dos cubos (`TP`), a vida solta (`VIDA`) e a
medida do celular valem para a mesa do slide em que se está
(`slideDaMesa()`). A tela escura, o quiz e o jogo continuam a ser só do
slide 2.

**Desempenho no slide 3.** Os voos para casa andam, quadro a quadro, num
deslocamento dentro do `transform` do card (`--vx`, `--vy`), que o
navegador compõe sem refazer o desenho da página — e que funciona em
qualquer aparelho —; o primeiro passo é escrito antes de o navegador
pintar, e o card nunca aparece no destino antes de voar (na versão
anterior, a animação das propriedades `translate`/`rotate` à parte não
andava em aparelhos mais antigos, e o card "teleportava"). Calada a vida solta (depois dos 12 s da `2`), a mesa fica
**plana**: só a face da frente de cada cubo é desenhada, sem a perspectiva
de cada um — 88 camadas a compor em vez de 528 —, com a face do mesmo
tamanho. Ao entrar nela, cada cubo é posto de frente sem se ver (as seis
faces são iguais): a vida solta deixa alguns de lado, com meia volta ou
um quarto, e esses ficariam invisíveis; na mesa plana os giros param. A foto de Moseley desliza com uma transição curta entre os
tiques do relógio.

### O quiz do slide 3

Oito perguntas, **respondidas com um toque na tabela** (o quadro da
pergunta, no vazio acima dos metais de transição, não pega o dedo). As
cinco primeiras são as do slide 2 do app do professor (Os critérios de
Organização); as três últimas são novas. Os números saem sorteados a
cada vez:

1. o elemento de número atômico Z;
2. o imediatamente posterior (ou anterior) ao número atômico Z;
3. o primeiro elemento de uma linha;
4. o último elemento de outra linha;
5. um elemento quimicamente semelhante a X (qualquer um da coluna dele);
6. o que fica logo abaixo de X, na mesma coluna *(nova)*;
7. outro elemento da mesma linha de X *(nova)*;
8. o último elemento da coluna de X *(nova)*.

A troca de uma questão para a outra é a do quiz do professor: a caixa
respondida sai pela direita enquanto a nova entra pela esquerda, e a
tabela inteira gira as faces dos cubos, em onda diagonal (só na
troca, não na primeira). O rótulo é "Questão N de 8" (e "Questão N de
6" no quiz do slide 2).

No **acerto**, o card cresce e passa à frente dos outros (volta ao tamanho
quando entra a questão seguinte, ainda à frente até assentar), fica verde, com confetes, `funfare` e `applause`, e
depois a voz — sorteada entre `exato!`, `muitobem`, `issomesmo!` e
`excelente`, sem repetir (a mesma regra vale no quiz do slide 2); na
última, `perfeito`. No **erro**, a questão não muda: o card tocado balança
em vermelho, a tela treme, toca `error` (e, no primeiro erro da questão,
`Calmanaproximaacerta`), e a **dica** aparece debaixo da pergunta — as
cinco primeiras são as do professor. No segundo erro da mesma questão, a
resposta pulsa em âmbar. A questão seguinte entra junto com o som da
entrada (`eesseaqui` e `próximo` alternados, `sómaisesse` antes da
última). No fim, o cartão do resultado (`statistics`): **cada erro
desconta o valor de uma questão** (nota = 10 × (8 − erros) / 8, nunca
abaixo de 0), com **Refazer** (outro sorteio) e **Continuar**, que fecha
o quiz e deixa o botão dele no canto. Enquanto o quiz dura, o play sai de cena.

### Slide 4 · As coordenadas periódicas — Os grupos e os períodos

A mesma tabela (sem as séries, o mesmo desenho e a mesma medida no
celular), agora no **tabuleiro liso** do app do professor: todas as cartas
no lilás claro (`#DCD7F3 → #C0B8E8`), com a letra escura (`.mesa.lisa`).
Chega com o play à espera da narração `3`; até ele ser tocado — e nos
primeiros 5 s dela —, a mesa respira com as animações sutis dos outros
slides (a vida solta). Na navegação rápida: "1. Início" e "2. Quiz" (o começo da `3.3`). Os eventos, todos
no relógio do áudio (`EV3`, `efeitos3`):

| Narração · tempo | O que acontece |
|---|---|
| `3` · 5 s | a vida solta cala-se |
| `3` · 7 s | o **Fe** gira em 3D, cresce e acende de verde |
| `3` · 9 s / 9,8 s | a faixa da **linha** dele (4.º período) e depois a da **coluna** (grupo 8); o resto recua |
| `3` · 11 s | tudo volta ao normal |
| `3` · 13 s | a tabela abre-se em **linhas**; 14 → 15 s digita "séries ou períodos" |
| `3` · 15,6 s | o áudio **pára 1 s** e continua |
| `3` · 16 s | a tabela fecha, e o texto sai em fade |
| `3` · 16,4 s | abre-se em **colunas**; 16,8 → 18 s digita "grupos ou famílias" |
| `3` · 20,4 s | o texto sai e a tabela fecha |
| `3` · 22,5 s | o **Na** gira em 3D, cresce e acende (como o Fe), e o símbolo dele (com o número atômico) vai para o vazio da tabela |
| `3` · 25,6 s / 26,8 s | "3º período" ao lado do símbolo, com a faixa da **linha**; "grupo 1" embaixo, com a faixa da **coluna** |
| fim da `3` | o botão **Entendi**, no vazio da tabela à direita do símbolo (o play sai de cena); tocado, acende, toca o `right` e passa à narração `3.1` (`Audios/audio_tabela_3.1.mp3`) |
| `3.1` · 1 s | o **Mn** gira em 3D, cresce e acende; o símbolo dele vai para o vazio da tabela (a cena do Na sai) |
| `3.1` · 3,3 s | "4º período" e a faixa da **linha** |
| `3.1` · 5 s / 6,3 s | "grupo"; depois o **7** completa-o, com a faixa da **coluna** |
| fim da `3.1` | o **Entendi** de novo; tocado, acende, toca o `right` e passa à `3.2` |
| `3.2` · 0,6 s | o **Pb** gira em 3D, cresce e acende; o símbolo dele vai para o vazio (a cena do Mn sai) |
| `3.2` · 1,9 s | "6º período" e a faixa da **linha** |
| `3.2` · 3,7 s / 5 s | digita "grupo"; depois digita o **14**, com a faixa da **coluna** |
| fim da `3.2` | o **Entendi**; tocado, acende, toca o `right` e passa à `3.3` |
| `3.3` · 2,2 → 5 s | no vazio da tabela, digita "Toque no elemento que tá no 4º período, grupo" |
| `3.3` · começo | as perguntas começam: a sala escurece (o véu do quiz) e cada pergunta vem no quadro padrão ("Questão 01"…), com a troca da esteira e o giro da tabela |
| `3.3` · 6 s | põe o **8**, e a resposta passa a ser um toque na tabela; acabada a narração, o play sai do canto (e fica fora nas perguntas seguintes) |
| perguntas | no acerto, o card cresce e fica verde, com confetes, `funfare`, `applause` e a voz, e toca a narração da pergunta seguinte; no erro, balança em vermelho, toca `error` e vem a dica (no segundo erro, a resposta pulsa em âmbar) |
| `3.4` | Questão 02: "Agora toque no elemento que tá no terceiro período, grupo 17." (o Cl) |
| `3.5` | Questão 03: "Toque no elemento que tá no sétimo período, grupo 2." (o Ra) |
| `3.6` | Questão 04: a explicação; acabado o áudio, três elementos (K, Sn, Ba), um de cada vez: o elemento acende e gira na tabela, e vem a **caixa do carrossel**, com o uso da do app de referência (quiz do capítulo 2): pequena, sempre no meio da altura da tabela e do lado oposto ao do elemento (para nunca o tapar), entra com um salto; o elemento em cima, dois carrosséis (período e grupo, três números à vista) e o confirmar. No erro a caixa treme e fica avermelhada um instante; no segundo, a linha e a coluna do elemento acendem |

## Desempenho

- **Sem filter nas faces.** O sombreado das faces de lado dos cubos é um véu
  (`::after`) por cima da cor, e não um `filter: brightness()`: eram 1195
  faces filtradas nas duas mesas, cada uma uma superfície à parte.
- **O apagado na carta**, e não nas seis faces (`.pc.apagado`).
- **Os cubos guardados.** `TP.todos()` e `TP.cubo()` leem uma lista e dois
  índices guardados no slide (`sl._cubos`), em vez de varrer a página a cada
  chamada. Revelando as séries, apagar `sl._cubos`.
- **O slide 3 na mesa plana até ao fim** (a `2.5`, os toques, o quiz): uma face
  desenhada por cubo em vez de seis. O giro da troca do quiz é o do professor,
  no plano da tela.
- **Sem `backdrop-filter`** no botão do play, na alça da navegação e na barra:
  por cima da tabela em movimento, obrigavam a redesenhar o fundo a cada quadro.

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

A **cruz das coordenadas** acende a linha e a coluna do elemento que salta,
com os dois números dos eixos, e põe o card em destaque; o resto da
tabela recua. Não escreve nada no vazio da tabela, e ao acabar tudo se
apaga em fade.

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
| `1.3A` · 8,7 → 13 s | oito elementos de símbolo com duas letras — He, Li, Mg, Si, Zn, Br, Ag, Pt — crescem um a um, com luz âmbar |
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
| `1.3A` · 42 s / `1.3B` · 35,5 s | **o quiz**: seis perguntas seguidas — "Qual o nome desse elemento?" —, com o fim da narração ainda a tocar |
| fim do quiz 1 | o cartão da nota, com **Refazer** e **Continuar**; Continuar toca a **`1.4`** |
| `1.4` · 1 → 8 s | oito elementos de símbolo sem nada a ver com o nome em português — P, K, Ag, Sn, Sb, W, Au, Hg — crescem um a um, com luz vinho |
| `1.4` · 10 s | o **Na** gira e cresce no lugar, e o nome dele some; 15 s "Sódio" aparece e pulsa 2×; 16,8 s o símbolo pulsa; 17,7 s o nome pulsa outra vez; 21 s **"Natrium"** é escrito à direita, em destaque; 24 s o Na volta, e a palavra sai a girar até sumir junto com ele |
| `1.4` · 25 s | o **Pb**, do mesmo jeito; 29 s "Chumbo" aparece e pulsa 2×; 30 s **"Plumbum"** à esquerda; 34 s volta, e a palavra some a girar |
| `1.4` · 35,6 s | o **Cu**; 39,7 s "Cobre" aparece e pulsa 2×; 41 s **"Cuprum"** à esquerda; 45 s volta, e a palavra some a girar |
| `1.4` · 54 s | **o segundo quiz**, com os de nome diferente (arrastado o áudio para depois dos 54 s, abre quando ele acaba) |
| fim do quiz 2 | o cartão da nota, com **Refazer** e **Continuar**; Continuar toca `audio_tabela_1_jogo_memória` |
| fim da narração do jogo | o botão do canto troca o play por um **controle de jogo**; um toque abre o jogo da memória |

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

Aos 42 s da `1.3A` ou aos 35,5 s da `1.3B`, e outra vez aos 54 s da
`1.4`, **seis perguntas** seguidas (`QUIZ_NA_HORA`; arrastado o áudio
para depois dessa hora, o quiz abre quando ele acaba). Um elemento
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
nota, e o som `statistics`. O cartão tem dois botões, e **o play do canto
fica fora de cena** (nem a barra de espaço toca): **Refazer** abre outro
quiz igual, com outro sorteio; **Continuar** tira o cartão e toca a
narração seguinte — a `1.4` depois do quiz 1, e
`audio_tabela_1_jogo_memória` depois do quiz 2 (`DEPOIS_DO_QUIZ` diz o que
vem depois de cada quiz).

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

Cada item dessa lista traz **o nome latino** de onde o símbolo saiu, e é
ele que a resposta mostra: **"Exato! Plumbum é o Chumbo."** no acerto e
"Plumbum é o Chumbo." no erro, com as letras que viraram o símbolo em
ouro e sublinhadas (**P**lum**b**um, **H**ydrar**g**yrum). Natrium, Kalium,
Cuprum, Argentum, Aurum, Hydrargyrum, Plumbum, Stannum, Stibium,
Wolframium, Phosphorus e Sulfur. A Prata leva "a": "Argentum é a Prata".

A volta do elemento é a ida ao contrário: a ida sai depressa e chega
devagar, então a volta sai devagar e chega depressa — a fração do
caminho feita é p³, e posição, tamanho e giro seguem a mesma curva, em
função do tempo da narração.

### O jogo da memória

Acabada a narração `audio_tabela_1_jogo_memória`, o botão do canto troca
o play por um **controle de jogo**, com a legenda "Jogo da memória"; um
toque nele (ou a barra de espaço) abre o jogo. É o jogo do slide 2 do
app do professor — lá, o "quiz 2" —, com a mesma estrutura e os mesmos
sons:

- **vinte cartas viradas, dez pares**: de um lado o símbolo com o número
  atômico e a massa, do outro o nome com um emoji, a categoria, o grupo e
  o período (H, O, C, N, Na, Fe, Cu, Ag, Au, Zn). Cada par tem a sua cor,
  que aparece quando ele é achado;
- **os pontos**: 10 por par, 20 se for prata ou ouro, mais 5 se o par
  seguinte for do mesmo grupo do anterior, e menos 2 por engano;
- **os sons**: `flipcard` ao virar uma carta, `right` no par certo,
  `error` com a tela a tremer em vermelho no engano;
- **o fim**: confetes e o cartão do resultado do professor — troféu, a
  pontuação de 0 a 10 num anel que se enche (pontos ÷ 120), a conta de
  pares, enganos e pontos, um recado, o som `statistics` e os botões
  **Refazer** (outra partida, baralhada de novo) e **Continuar**, que
  leva ao slide 3;
- **a fala do fim**: acabado o `statistics`, toca
  `audio_tabela_1_jogo_memória_fim`. Um botão do cartão tocado com ela a
  meio corta-a, e a aula vai para o que foi escolhido.

Enquanto o jogo dura o play sai de cena; o Esc fecha o jogo (e cala a
fala), com o botão do jogo ainda no canto para outra partida. Mudando de
slide, o jogo fecha.

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

**No celular deitado a cena ocupa a tela inteira.** A tela dele é mais
larga do que 16:9, e a cena (1280 × 720, medida pela altura) deixava duas
faixas nos lados. No celular (tela com o lado menor até 540 px) mais largo
do que 16:9 — e só nele —,
o papel de fundo passa para a tela inteira, as camadas que cobrem a cena
(a tela escura, o quiz, o jogo, o vermelho do erro) cobrem também as
faixas, e o play e a versão vão para os cantos da tela. A cena em si não
muda de tamanho nem de lugar. Tablets, Chromebooks e computadores ficam
exatamente como eram, mesmo com a janela do navegador mais larga do que
16:9. A página também pede ao navegador
que não a escureça (`color-scheme: only light`): o modo escuro automático
de alguns celulares pintava de preto o fundo fora do palco.

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

## Ajuste da tabela (só no celular)

**No celular a tabela é um pouco maior e um fio mais alta**:
`MESA_NO_CELULAR = { x: 2, y: -22, escala: 1.156 }`, a medida tirada no
aparelho do professor (tela 832 × 384, palco 0,533, folga 140). Ela
avança pelas laterais que o celular tem a mais. Tablets, Chromebooks e
computadores ficam com a tabela de sempre.

A medida foi tirada com uma ferramenta que **fica guardada, desligada**
(`AJUSTE_LIGADO = false`), para ser usada de novo mais adiante — basta
pôr `true`, e o painel volta no celular a começar da medida em uso.
Ligada, ela existe **só no celular** (lado menor da tela até 540 px): tablets,
Chromebooks e computadores não veem o painel, e a tabela deles não muda.
No celular, no slide da tabela, **a tabela fica travada** — os cubos não
respondem ao toque, os toques no slide não fazem nada e a mesa não se
mexe sozinha — e:

- **um dedo arrasta** a tabela;
- **dois dedos, em pinça, aumentam ou diminuem**, em volta do ponto entre
  eles.

O painel no alto da tela mostra a medida (deslocamento em pixels do
palco e escala). **Copiar** leva para a área de transferência uma linha
como `mesa: x -20, y 30, escala 1.180 | tela 893x314, palco 0.436,
folga 384` — é ela que se cola na conversa para o tamanho ser aplicado
no app, também só no celular — e mostra-a num aviso na tela. **Zerar**
volta ao tamanho de sempre. **×** desliga o ajuste até a página
recarregar (a medida fica aplicada, para ver a tabela assim com as
interações de volta). A medida vive nas variáveis da `.mesa` — `--px`,
`--py` e `--zoom` —, com a origem no meio do palco.

## Navegação rápida (tecla N)

Uma ferramenta de desenvolvimento. Do slide da tabela em diante há uma
**alça na borda direita** ("Navegação"); ela abre uma gaveta com os
tópicos do slide, e um toque num tópico leva direto a ele. A gaveta
acende o tópico em que a aula está, e fecha com o Esc, com um toque
fora dela ou com a tecla N.

| tópico | aonde leva |
|---|---|
| 1. Visão geral da tabela | o começo do slide, como quem acaba de chegar a ele |
| 2. Quiz 1 | aos 42 s da `1.3A` ou aos 35,5 s da `1.3B`: o quiz entra com o fim da fala. Os atalhos **1.3A · uma letra** e **1.3B · duas letras** escolhem a versão |
| 3. Quiz 2 | aos 54 s da `1.4`: o quiz dos nomes diferentes |
| 4. Jogo da memória | a narração `audio_tabela_1_jogo_memória` do começo, que acaba no botão do jogo; o atalho **abrir o jogo direto** pula a narração |

A gaveta mostra **os tópicos do slide em que se está**, com o título dele e
a numeração a começar do 1. No slide 3 (Os critérios de Organização):

| tópico | aonde leva |
|---|---|
| 1. Início | o começo do slide |
| 2. O critério 1 de organização | aos **25 s da narração `2`**, com a tabela já desmontada — a mesa aparece desarrumada, sem os cards a correr para lá |
| 4. Quiz | abre o quiz direto: a tabela montada, a sala apaga-se, toca o `quiz1` e entra a questão 1 |
| 3. O critério 2 de organização | a narração **`2.3`** do começo, com a tabela **montada até à linha 4** (do 1 ao 36, em casa e coloridos), o 37 ao 48 espalhados embaixo e o resto fora da tela |

Cada atalho começa do zero: nenhum card fica marcado como "em casa" de um
tópico para o outro (do 3 para o 2, a tabela volta a estar toda
desmontada). Para a mesa aparecer já como está naquele ponto, os eventos usam o
segundo pedido até o áudio saltar para ele (`TEMPO_FORCADO`), e por um
instante os cards ficam sem transições (`.mesa.sem-transicao`).

**Um tópico abre com a mesa montada como se os anteriores tivessem
acontecido.** O slide recomeça sempre do zero; cada tópico anterior
deixa na mesa o que construiu (`deixa()`), e só então o escolhido entra
(`entra()`). Voltar para trás é o mesmo caminho: estando no 3 e indo ao
2, tudo se desfaz e o 2 é refeito como na primeira vez, depois do 1. Por
enquanto nenhum tópico deixa nada — a mesa só vai mudar de verdade
quando as séries forem reveladas, e é aí que o `deixa()` passa a contar.

Nos quizzes vale o elemento que o aluno tinha escolhido (se servir para
a versão pedida); senão, um ao acaso. A narração volta depois de a mesa
pousar, a partir do segundo do tópico, e os eventos seguem o relógio.
Um tópico novo é um item a mais em `NAV_TOPICOS`.

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

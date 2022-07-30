
# Javascript
- Estado do JS (https://2020.stateofjs.com/en-US/technologies/)
- Onde é executado
- Omnipresente na web 
- App híbridos 
- Aplicação de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (Internet das Coisas): o JS está presente em tudo
- ECMAScript

## Fundamentos JS
- Fundamentos do JavaScript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base## Metodologia
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha de evolução
- Começa fácil e vai aumentando a complexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades


## Lógica de Programação
- Computador:
- - Máquina que extrai dados
- - Processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultado do processamento
- Processamento de dados: Entrada (dados) > Processamento > Saída (informação)

#### E a lógica?
Lógica é aquilo que faz sentido


#### Como escrever um programa?
- Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução


#### A lógica de programação
- É a técnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
- A sequencia de passos, instruções que o computador deve seguir é conhecida como ALGORITMO
#### Algoritmo
- Sequência lógica e finita de intruções que resolvem um problema
- Exemplo: receita de bolo, manual de instrução
- Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritmo
- Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagens de programação


### Algoritmo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: entrada 1;
3. Receber o segundo número: entrada 2;
4. Receber o terceiro número: entrada 3;
5. PROCESSAMENTO: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log ;
7. Fim;


### Torre de Hanoi
- Mover todos os discos para a direita, com o menor número de movimentos possível, sem colocar um disco em cima de um disco menor: https://www.somatematica.com.br/jogos/hanoi/
- Jogos: https://www.somatematica.com.br/jogos.php


## Funcionalidades gerais
- Criar algoritmos e programas para executar no navegador: client side
- Manipular o DOM: elementos HTML, eventos (clique, submit), estilos CSS
- Node.js: framework JS para back-end / runtime em JS 
- Mongo.db / GraphQL: banco de dados em JS
- React / Vue.js / Angular: frameworks JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile
- Rebecer e manipular dados
- Tomar decisões baseados na lógica computacional 
- Loop e interações 
- Condições de saída

### Executar o JS
- Console browsers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/
## Variáveis
São utilizadas para referenciar espaço na memória

- var
- const (fica com valor imutável)
- let
- string (tipo de variável para conjunto de caracteres)
- tipagem: número ou string
- array: conjunto de valores
# Operadores

## Aritméticos

+ somar
- subtrair 
* multiplicar
/ dividir
% resto de divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false):

< menor que
> maior que
<= menor ou igual
=> maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true/false):

== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

## Operadores de lógica e junção lógica 

!   NÃO (NOT)
&&  E (AND)
||  OU (OR)

### Exemplos

a != b // o valor de a é diferente de b
x !=== y // o valor e o tipo de x é diferente de y
!a == b // o valor de a nao é igual ao valor de b 

### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

### Operador lógico de contribuicão 

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == 'preto' ? 'preto' : 'branco';

## Calculo media 

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = ( nota1+nota2+nota3+nota4 )/ 4;
if ( media >= 8 ){
    console.log ('aluno aprovado')
} else { 
     console.log ("aluno reprovado")
}

## Funçoes
- Evitar repetiçao de códigos
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia( notas ) {

    var notas=0;
    for( c=0; c < notas.lenght; c++ ) {
        notas+=notas[c];
    }

    media = notas / notas.length;

    return media;
}

# Code Togheter
1. descrever um algoritmo para resolvero problema da 'travessia' de modo seguro; um homem precisa atravessarum rio com um barco que possui capacidade apenas para carregar ele mesmo e mais um e seus tres pertences, que são: um lobo, uma cabra e um maço de alfafa. em cada viagem só poderá ir o homem e apenas um de seus pertences. A seguinte regra deverá ser respeitada: o lobo nao pode ficar sozinho com a cabra e nem a cabra sozinha com o maço de alfafa. escreva um algoritmo para fazer a travessia dos pertences que estao em uma margem do rio para outra.

2. JS: Exibir média de 3 números com entradas pelo formulario HTML
enviar links do git ou do fiddle.
---
layout: post
title:  "O que muda no JavaScript com o EcmaScript 6"
date:   2016-03-15 12:12:45 -0300
image: ../../../assets/images/cA4aKEIPQrerBnp1yGHv_IMG_9534-3-2.jpg
---
Acredito que todos já saibam da nova versão do JavaScript(ES6), oficialmente chamada de ES2015.

A falta de suporte dos navegadores não pode ser uma desculpa para você ficar pensando em não estudar ou não aplicar o ES6. Cuidado para não ficar ultrapassado!

Já existe como configurar o seutaks manager para fazer o transpile do ES6 com o [Babel](https://babeljs.io/). A versão mais recente do [Node.js](https://nodejs.org/en/download/) já está rodando tranquilamente o ES6, mas nem tudo do ES6 estará presente.

Então sem mais desculpas, vamos aprender...


**Variáveis com let e escopo**

A novidade let agora permite declarar variáveis limitadas ao âmbito de um bloco. Isso é totalmente o oposto do var, por declarar e sobrescrever variáveis no âmbito global de sua função envolvente.

No ES6, o let irá fazer hoisting da variável no topo do bloco, ou seja, caso seja declarado novamente no mesmo contexto, a segunda declaração retornará um TypeError. E caso a variável definida com let seja referenciada antes da sua declaração, o erro será de referência.

Veja alguns exemplos do let:
{% highlight javascript %}
var foo = 3;
var bar = 1;

if (foo === 3) {
  let foo = 5; // O escopo é dentro do bloco
  var bar = 2; // O escopo é dentro da função

  console.log(foo);  // 5
  console.log(bar);  // 2
}

console.log(foo); // 3
console.log(bar); // 2
for (let x = 0; x<5; x++) {
  console.log(x); // 0, 1, 2, 3, 4 e 5
}

console.log(x); // x is not defined
{% endhighlight %}

**Arrow function**

Agora com a sintaxe mais curta ficou ainda mais tranquilo trabalhar com funções no JavaScript. Deixando o this com o valor do contexto vinculado da função, ou seja, que acabem as gambiarras do “var self = this”.

Ao deixar o this mais aberto, as regras de 'strict mode’ para com ele, são ignoradas.

Lembrando que o uso da arrow function significa que essa função será anônima.

Veja alguns exemplos de como utilizar arrow functions:
{% highlight javascript %}
// Arrow function vazia
let foo = () => {};
foo(); // undefined

// Não recebendo parâmetro
(() => "foo bar")() // "foo bar"

// Recebendo apenas um parâmetro
var compare = a => a > 13 ? 13 : a;
compare(12); // 12
compare(19); // 13

// Recebendo multiplos parâmetros
var compare = (x, y) => {
    if (x < y) {
        return y;
    } else {
        return x;
    }
}
{% endhighlight %}

**Parâmetros de função**

No JavaScript os parametros das funções são sempre undefined por padrão. E com a mudança do ES6, agora é possível definir um valor padrão para paramentos de função, quando não são passados ou são passados como undefined.

Isso evitará as verificações dentro da função se as variáveis passadas são do tipo undefined antes da sua utilização no decorrer da função.

Veja alguns exemplos de parâmetros de função:

{% highlight javascript %}
// Antes do ES6

function calculate(foo, bar) {
  var bar = typeof bar !== 'undefined' ?  bar : 10;

  return a*b;
}

calculate(2); // 20
// Depois do ES6
function calculate(foo, bar = 1) {
  return foo*bar;
}

calculate(2); // 20
{% endhighlight %}

**Spread Operator**

Essa funcionalidade permite espalhar múltiplos argumentos no caso de função ou espalhar múltiplos elementos no caso de array.

Isso traz um poder muito grande para os arrays e também muito benefício às chamadas de função, podendo ser utilizado várias vezes para os argumentos da função.

Veja alguns exemplos de spread operator:

{% highlight javascript %}
// Antes do ES6 era preciso usar a função prototype apply
function exFunc(a, b, c) { }
var foo = [0, 1, 2];
exFunc.apply(null, foo);
// Depois do ES6
function exFunc(a, b, c) { }
var foo = [0, 1, 2];
exFunc(...foo);
// Usando em mais de um argumento
function exFunc(v, w, x, y, z) { }
var foo = [0, 1];
exFunc(100, ...foo, 3, ...[4,2]);
// Arrays mais poderosos e simples
var fruits = ['maça', 'laranja'];
var allFruits = ['melão', …fruits, 'morango', 'banana'];
console.log(allFruits); // ['melão','maça','laranja','morango','banana']
{% endhighlight %}

**Destructuring assignment**

Agora ficou fácil trabalhar com objetos e arrays. Essa sintaxe foi criada para extrair os valores desses arrays e objetos.

É possível também trabalhar com a extração de funções exportadas de um outro arquivo, para o arquivo a ser utilizado.

Claro que trabalhar com muitos valores e dimensões em um array ou um objeto muito abrangente, pode trazer confusão e requer muito cuidado.

Mas começando a utilizar aos poucos, podem ter certeza de que destructuring assignment é vida!

Vejam alguns exemplos básicos de como funciona o destructuring assignment:
{% highlight javascript %}
var life = ["foo", "bar", "be", "beer"];

// Antes do ES6
var foo  = life[1];
var bar  = life[1];
var be   = life[2];
var beer = life[3];

// Depois do ES6
var [foo, bar, be, beer] = life;

// Sem necessidade de declaração do array
var a, b;
[a, b] = [1, 2];

// Trocando valores entre variáveis
var a = 1;
var b = 3;
[a, b] = [b, a];

// Exemplo com objeto
let foo = {
  bar: 'Bar',
  be: 'Be',
  beer: 'Beer'
};
let {bar,be,beer} = foo;
console.log(bar);  // "Bar"
console.log(be);   // "Be"
console.log(beer); // "Beer"

// É possível pular itens
let {,be,beer} = foo;
console.log(bar);  // undefined
console.log(be);   // "Be"
console.log(beer); // "Beer"

// É possível extrair todo o conteúdo após outra extração
let life = ["foo", "bar", "be", "beer"];
let [foo, ...foobar] = life ;
console.log(foo);  // "foo"
console.log(foobar);   // ["bar","be","beer"]

// Trabalhando com extração de funções de outros arquivos
// file1.js
export foobar(){
  console.log("Foo Bar "+be);
}

// file2.js
import {foobar} from '..file1';
foobar("Be Beer"); // "Foo Bar Be Beer"
{% endhighlight %}

**Generator functions**

Funções criadas para trabalhar com iterações de objetos. Podem encerrar a iteração e depois, com uma nova chamada, continuar de onde parou.

Quando a função é chamada a primeira vez, o objeto iterado é retornado, e não há execução do corpo da função. Assim, quando o método next(), for executado, aí sim a função será executada por completo e a iteração começará.

Foi criada também a expressão "yield” que trabalha como um limitador da iteração, funciona parecido com o uso de “break" em um “forEach".

Veja alguns exemplos de como usar generator functions:
{% highlight javascript %}
function* fooBar(){
  var beer = 0;
  while(beer < 2)
    yield beer++;
}

var foo = fooBar();

console.log(foo.next().value); // 0
console.log(foo.next().value); // 1
console.log(foo.next().value); // undefined

// Deixando mais claro a funcionalidade do yield
function* foobar(x) {
  yield x + 1;
  yield x + 5;
}

function* foo(x){
  yield x; // A iteração máxima será o valor recebido
  yield* foobar(x); // A iteração máxima será o último valor da função foobar()
  yield x + 20; // A iteração máxima será o valor recebido + 20
}

var foobar = foo(10);

console.log(foobar.next().value); // 10
console.log(foobar.next().value); // 11
console.log(foobar.next().value); // 15
console.log(foobar.next().value); // 30
console.log(foobar.next().value); // undefined

// Lembrando que Generator functions não podem ser construtoras
function* foobar() {}
var x = new foobar; // throws "TypeError: foobar is not a constructor"
{% endhighlight %}

Essas não são todas as novidades do ES6, existem muito mais! Separei apenas as mais fundamentais e básicas, para começarmos a estudar e aplicar nos nossos projetos.

É isso, galera! Obrigado pela visita!

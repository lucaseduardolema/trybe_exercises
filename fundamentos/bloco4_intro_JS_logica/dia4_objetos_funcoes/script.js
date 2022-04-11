// Para fixar
// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: '34',
  medals: {
    golden: 2,
    silver: 3
  }
};

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log(player.bestInTheWorld)

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log(`\nA jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`);

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata"

console.log(`\nA jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);

// parte 2
// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let i in names) {
  console.log(`\nOlá ${names[i]}`);
};

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let i in car) {
  console.log(`\n${i} ${car[i]}`);
}

// Exercicios
// Parte I - Objetos e For/In

// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida

console.log(`\nBem vinda, ${info.personagem}`);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'Sim';

console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log('\n'+key);
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let key in info) {
  console.log('\n'+info[key]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
};

for (key in info, info2) {
  console.log(`\n${info[key]} e ${info2[key]}`);
}

// Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log(`\nO livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco'
};

// console.log(leitor.livrosFavoritos)

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(`\n${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`)

// Exercicios
// Parte II - Funções

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(palavra) {
  let palavraInvertida = [];
  for (let i = 0; i < palavra.length; i += 1) {
    palavraInvertida.unshift(palavra[i])
  }
  //console.log('\n'+palavraInvertida);
  palavraInvertida = palavraInvertida.join('');
  // console.log(palavraInvertida);
  if (palavra == palavraInvertida) {
    return true
  } else {
    return false
  }
}
console.log('\n'+ verificaPalindrome("arara"));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let arrayTeste = [2, 3, 6, 7, 10, 1];

function indiceMaiorValor(arr) {
  for (let i in arr) {
    // console.log(i)
    if (arr[i] > arr[0]) {
      var indiceMaior = i
      // console.log(`Maior indice ${indiceMaior}`)
    }
  }
  return indiceMaior
}
console.log(`\nPosição do maior número: ${indiceMaiorValor(arrayTeste)}`);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor (arr) {
  for (let i in arr) {
    if (arr[i] < arr[0]) {
      var indiceMenor = i
    }
  }
  return indiceMenor
}
console.log(`\nPosição do menor número: ${indiceMenorValor(arrayTeste2)}`)

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda

let arrayTeste3 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let quantidadeCaracter = arrayTeste3[0]

function maioQuantidadeCaracter(arr) {
  for (let i in arr) {
    // console.log(i)
    // console.log(arr[i])
    if (arr[i].length > quantidadeCaracter.length) {
      quantidadeCaracter = arr[i]
      // console.log(quantidadeCaracter)
    }
  }
  return quantidadeCaracter
}
console.log(`\nPalavra que contém maior número de caracteres: ${maioQuantidadeCaracter(arrayTeste3)}`);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2

let arrayTeste4 = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(arr) {
  for (let i in arr) {}
}
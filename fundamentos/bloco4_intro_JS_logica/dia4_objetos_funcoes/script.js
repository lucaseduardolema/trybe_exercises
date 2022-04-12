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
  for (let i of arr) {
    // console.log(i)
    // console.log(arr[i])
    if (i.length > quantidadeCaracter.length) {
      quantidadeCaracter = i
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

// function maisRepete(arr) {
//   let emOrdem = arr.sort(function(a, b) {return a - b})
//   console.log(emOrdem)
//   let cont1 = 0
//   let cont2 = 0
//   for (let i of emOrdem) {
//     for (let i2 of emOrdem) {
//       if (i === i2) {
//         cont1
//       }
//     }
//   }
// }
function maisRepete(arr) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in arr) {
    let verificaNumero = arr[index];
    for (let index2 in arr) {
      if (verificaNumero === arr[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return arr[indexNumeroRepetido];
}
console.log(`\nInteiro que mais repete: ${maisRepete(arrayTeste4)}`)

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15

function soma(N) {
  let calc = 0;
  for (let i = N; i >= 0; i -= 1) {
    calc = calc + i;
  }
  return calc
}
console.log(`\nEssa é a soma ${soma(5)}`);

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending) {
  let fim = '';
  for (let i = word.length; i >= (word.length - ending.length); i -= 1){
    fim = word.charAt(i) + fim;
    // console.log(fim)
  }
  if (fim == ending) {
    return true
  } else {
    return false
  }
}
console.log(`\nO final de da 1ª palavra é igual a 2º: ${verificaFimPalavra('trybe', 'be')}`);

// Bonus

// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

function converteRomanos(str) {
  str = str.toUpperCase();
  // console.log(str)
  let numeros = {
    "I": 1,
    "IV": 4, 
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  };
  let resut
  for (let i in numeros) {
    // console.log(i)
    if (i == str) {
      resut = numeros[i]
      break
    } else {
      resut = "Erro"
    }
  }
  return resut
}
console.log(`\nRomanos convertido: ${converteRomanos("xc")}`)

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// console.log(vector[0][1]);

function arrayOfNumbers(arr) {
  let pares = [];
  for (let i in arr) {
    for (let i2 in arr[i]) {
      if (arr[i][i2] % 2 == 0)
      pares.push(arr[i][i2])
    }
  }
  return pares
}
console.log(`\nNúmeros pares do array: ${arrayOfNumbers(vector)}`)

// 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function cestaDeFrutas(arr) {
  let cestaOrganizada = {};
  let fruta = arr[0];
  let quantidadeFruta = 0;
  // cestaOrganizada.push(fruta)
  console.log(cestaOrganizada)
  for (let key of arr) {

  }

  return cestaOrganizada
};
console.log(`Sua cesta possui: ${cestaDeFrutas(basket)}`);

// Usando o objeto abaixo, faça os exercícios a seguir:

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

// 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

console.log(`\nO morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`)

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

for (let i in moradores) {
  // console.log(moradores[i][0].nome)
  console.log(`\nMorador ${moradores[i][0].nome} ${moradores[i][0].sobrenome}`)
  console.log(`\nMorador ${moradores[i][1].nome} ${moradores[i][1].sobrenome}`)
}
// console.log(moradores.blocoDois[0])
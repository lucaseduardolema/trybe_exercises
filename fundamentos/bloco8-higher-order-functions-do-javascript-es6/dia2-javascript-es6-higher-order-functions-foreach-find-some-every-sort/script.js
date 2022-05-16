// Para fixar
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

const msg = emailListInData.forEach((value) => showEmailList(value));

// Para fixar
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  return array.find((value) => {
    if (value % 3 === 0 && value % 5 === 0) {return value};
  })
}

console.log(findDivisibleBy3And5(numbers));

// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => arr.find((value) => value.length > 5 ? value : undefined);

console.log(findNameWithFiveLetters(names));

// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((value) => value.id === id ? value : undefined);
}

console.log(findMusic('31031685'));

// Para fixar
// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const namesSome = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((value) => value === name)

console.log(hasName(namesSome, 'Ana'));

// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((value) => value.age > minimumAge);

console.log(verifyAges(people, 18));

// Para fixar
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const peopleSort = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const peopleOrderByAgeDecrement = (arr) => arr.sort((a, b) => a.age - b.age);

console.log(peopleOrderByAgeDecrement(peopleSort));

// 2 - Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const peopleOrderByAgeIncrement = (arr) => arr.sort((a, b) => b.age - a.age);

console.log(peopleOrderByAgeIncrement(peopleSort));

// Exercicios

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// Dica: use a função find.

function authorBornIn1947(arr) {
  return arr.find((value) =>  value.author.birthYear === 1947);
}

console.log(authorBornIn1947(books));

// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName(arr) {
  let nameBook = arr[0].name;
  arr.forEach((value) => value.name.length < nameBook.length ? nameBook = value.name : nameBook = nameBook);
  return nameBook;
}

console.log(smallerName(books));

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

function getNamedBook(arr) {
  return arr.find((value) => value.name.length === 26);
}

console.log(getNamedBook(books));

// 4 - Ordene os livros por data de lançamento em ordem decrescente.

// const expectedResultOrederDesc = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: { name: 'George R. R. Martin', birthYear: 1948 },
//     releaseYear: 1991,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: { name: 'Stephen King', birthYear: 1947 },
//     releaseYear: 1986,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: { name: 'Frank Herbert', birthYear: 1920 },
//     releaseYear: 1965,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
// ];

function booksOrderedByReleaseYearDesc(arr) {
  return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc(books));

// 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// const expectedResult = false;

function everyoneWasBornOnSecXX(arr) {
  return arr.every((value) => value.author.birthYear >= 1901 && value.author.birthYear <= 2000 ? true : false);
}

console.log(everyoneWasBornOnSecXX(books));

// 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

function someBookWasReleaseOnThe80s(arr) {
  return arr.some((value) => value.releaseYear >= 1980 && value.releaseYear < 1991 ? true : false);
}

console.log(someBookWasReleaseOnThe80s(books));

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário. - em tentativa

// const expectedResult = false;

// function authorUnique(arr) {
//   let bornYear1 = arr[0].author.birthYear;
//   return arr.forEach((value) => arr.some());
// }

// console.log(books[0].author.birthYear)
// console.log(authorUnique(books));

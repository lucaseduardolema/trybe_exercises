// Pratica 1
// Obtenha o valor "Serviços" do array menu 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu

menu.push('Contato')
console.log(menu)

// Pratica 2
//Utilize o for para imprimir os elementos da lista groceryList com o console.log()

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// Pratica 3
// Utilize o for/of para imprimir os elementos da lista names com o console.log()

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let pessoa of names) {
  console.log(pessoa);
}

//Exercicio

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let result = 0;

for (let i = 0; i < numbers.length; i += 1) {
  result += numbers[i];
}
console.log(`\nO resultado da soma é ${result}`);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array

console.log(`\nA média aritimética é ${result / numbers.length}`)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if (result / numbers.length > 20) {
  console.log(`\nvalor maior que 20`);
} else {
  console.log(`\nvalor menor ou igual a 20`)
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o

let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(`\nEsse é o maior numero: ${maior}`)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let impar = [];
let par = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    impar.push(numbers[i]);
  } if (impar == 0) {
    console.log("nenhum valor ímpar encontrado");
  }
}
console.log(`\nExistem ${impar.length} números impares no array`)

// Utilizando for , descubra qual o menor valor contido no array e imprima-o

// let menor = undefined;

// for (let menor of numbers) {
//   if (menor )
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   menor = numbers[i]
//   if (numbers[i] < menor) {
//     menor = numbers[i];
//   }
// }
// console.log(`\nEsse é o menor numero: ${menor}`)

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let listaNumero = [];

for (let i = 1; i <= 25; i += 1) {
  listaNumero.push(i);
  if (listaNumero.length == 25) {
    listaNumero = listaNumero;
  }
}
console.log('\n',listaNumero)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por

let listaNumeroDividida = [];

for (let i = 0; i < listaNumero.length; i += 1) {
  listaNumeroDividida.push(listaNumero[i] / 2);
}
console.log(listaNumeroDividida)
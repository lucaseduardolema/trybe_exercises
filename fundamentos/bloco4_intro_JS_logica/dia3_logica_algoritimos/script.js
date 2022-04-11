// Exercicios
// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
//Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let number = 10;
let fatorialDez = number;

for (let i = 1; i < number; i += 1) {
  fatorialDez = fatorialDez * i;
}
console.log(`\nEsse é o fatorial: ${fatorialDez}`)

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let wordInvertida = []

for (let i = 0; i < word.length; i += 1) {
  wordInvertida.unshift(word[i])
}
console.log(`\nEssa é a palavra invertida: ${wordInvertida}`)

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorPalavra.length){
    maiorPalavra = array[i];
  }
}
console.log(`\nEssa é a maior palavra do array: ${maiorPalavra}`)

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorPalavra.length){
    menorPalavra = array[i];
  }
}
console.log(`\nEssa é a menor palavra do array: ${menorPalavra}`)

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// em tentativa
let numerosPrimos = [];
let maiorPrimoAte50;
let contador

for (let index = 1; index <= 50; index += 1) {
  for (let index2 = 2; index2 <= 50; index2 += 1) {
    if (Number.isInteger(index / index2)) {
      numerosPrimos.push(index)
    } for (let index3 = 0; index3 < numerosPrimos.length; index3 += 1) {
      
    }
  }
}
console.log(numerosPrimos)

let x = 4
let y = 1

console.log(Number.isInteger(4/1))
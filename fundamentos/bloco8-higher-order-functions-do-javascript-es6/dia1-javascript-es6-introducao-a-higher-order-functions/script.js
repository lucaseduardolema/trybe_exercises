// Vamos praticar com os seguintes exercícios:
// 1 - Crie uma função que retorne a string 'Acordando!!';
// 2 - Crie outra função que retorne a string 'Bora tomar café!!';
// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!';
// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
//doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando';

const coffee = () => 'Bora tomar café!!';

const sleeping = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(sleeping);

// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const gerarEmail = (nome) => `${nome.replace(' ', '_').toLowerCase()}@trybe.com`;
console.log(gerarEmail('Lucas Eduardo'))

const newEmployees = (nomeid1, nomeid2, nomeid3, callback) => {
  const employees = {
    id1: `Nome: ${nomeid1}, Email: ${callback(nomeid1)}`, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: `Nome: ${nomeid2}, Email: ${callback(nomeid2)}`, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: `Nome: ${nomeid3}, Email: ${callback(nomeid3)}`, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees('Pedro Guerra', 'Luiza Drumond', 'Carla Paiva', gerarEmail));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const confereResultado = (numeroEscolhido, numeroSordeado) => numeroEscolhido === numeroSordeado ? 'Parabéns você ganhou' : 'Tente novamente';

const loteria = (num, callback) => {
  const sorteio = Math.round(Math.random() * 5);
  return callback(num, sorteio);
}

console.log(loteria(3, confereResultado));

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const confereGabarito = (gaba, resps) => {
  let pontos = 0
    for (let i = 0; i < gaba.length; i += 1) {
      if (resps[i] === 'N.A') {
        pontos = pontos;
      } else if (resps[i] === gaba[i]) {
        pontos += 1
      } else {
        pontos -= 0.5
      }
    }
  return pontos
}

const resultadoProva = (gabarito, respostas, callback) => {
  return callback(gabarito, respostas);
};

console.log(resultadoProva(RIGHT_ANSWERS, STUDENT_ANSWERS, confereGabarito));
// Pratica 1
// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro?

const myName = "Lucas";
const birthCity = "Belo Horizonte";
let birthYear = 1994;

console.log(myName, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);

// birthCity = "São Paulo";

// console.log(birthCity);

// Pratica 2
// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail)

// Crie uma costante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.

const base = 5;
let height = 8;
const area = base * height;

console.log(area);

const perimeter = base * 4;

console.log(perimeter);

// Pratica 3
// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;

const nota = 59;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else {
  console.log("Você foi reprovada(o)");
}

// Pratica 4
// Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
// Agora imprima a variável message fora das suas condições.

const currentHour = 15.56;
let message = '';

if (currentHour > 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}

console.log(message);

//Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
// Implemente condicionais para que:
// Se nossa variável "weekDay" for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", imprima "Oba, mais um dia de aprendizado na Trybe >:D".
// Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".

let weekDay = 'quarta-feira'

if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
  console.log("FINALMENTE, descanso merecido UwU");
}

//Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica'

let estadoCandidato = 'aprovada';

switch (estadoCandidato) {
  case 'aprovada':
    console.log('aprovada');
    break;
  
  case 'lista':
    console.log('lista');
    break;

  case 'reprovada':
    console.log('reprovada');
    break;

  default:
    console.log('não se aplica');
} 

// Exercicio
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 5
let b = 6

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 9;
const num2 = 56;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados

const num3 = 57;
const num4 = 834;
const num5 = 128;

if (num3 > num4 && num3 > num5) {
  console.log(num3);
} else if (num4 > num3 && num4 > num5) {
  console.log(num4);
} else {
  console.log(num5);
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const num6 = 827;

if (num6 % 2 == 0) {
  console.log('positive');
} else {
  console.log('negative');
}

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const ladoA = -60;
const ladoB = 60;
const ladoC = 60;

if (ladoA < 0 || ladoB < 0 || ladoC < 0) {
  console.log('ângulo inválido')
} else if (ladoA + ladoB + ladoC === 180) {
  console.log(true);
} else if (ladoA + ladoB + ladoC > 180) {
  console.log(false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chessPiece = "BISHOP";
let result = chessPiece.toLowerCase();

switch (result) {
  case "bishop":
    console.log("diagonals");
    break;
  default:
    console.log("erro")
}


// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota2 = 87;

if (nota2 < 0 || nota2 > 100) {
  console.log("erro");
} else if ( nota2 < 50) {
  console.log('F')
} else if ( nota2 >= 50 && nota2 < 60) {
  console.log('E')
} else if ( nota2 >= 60 && nota2 < 70) {
  console.log('D')
} else if ( nota2 >= 70 && nota2 < 80) {
  console.log('C')
} else if ( nota2 >= 80 && nota2 < 90) {
  console.log('B')
} else if ( nota2 >= 90) {
  console.log('A')
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if

const num7 = 13;
const num8 = 146;
const num9 = 5;

if (num7 % 2 == 0 || num8 % 2 == 0 || num9 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if

const num10 = 14;
const num11 = 146;
const num12 = 52;

if (num10 % 2 == 1 || num11 % 2 == 1 || num12 % 2 == 1) {
  console.log(true);
} else {
  console.log(false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProduto = 70;
const valorVenda = 150;

let custoFinal = custoProduto + (custoProduto * 0.2);

let lucro = undefined

if (custoProduto < 0 || valorVenda < 0) {
  console.log('erro')
} else {
  lucro = ((valorVenda - custoFinal) * 1000);
  console.log(lucro);
}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

const inssAliquota1 = 0.08;
const inssAliquota2 = 0.09;
const inssAliquota3 = 0.11;
const inssAliquota4 = 570.88;

const ir1 = 0.075;
const ir2 = 0.15;
const ir3 = 0.225;
const ir4 = 0.275;

const salary = 9000;
let baseSalary = undefined;
let finalSalary = undefined;

if (salary <= 1556.94) {
  baseSalary = (salary - (salary * inssAliquota1));
} else if (salary >= 1556.95 && salary <= 2594.92) {
  baseSalary = (salary - (salary * inssAliquota2));
} else if (salary >= 2594.93 && salary <= 5189.82) {
  baseSalary = (salary - (salary * inssAliquota3));
} else if (salary > 5189.82) {
  baseSalary = (salary - inssAliquota4)
}

if (baseSalary <= 1903.98) {
  finalSalary = baseSalary;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  finalSalary = (baseSalary - (baseSalary * ir1 - 142.8));
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  finalSalary = (baseSalary - (baseSalary * ir2 - 354.8));
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  finalSalary = (baseSalary - (baseSalary * ir3 - 636.13));
} else if (baseSalary > 4664.68) {
  finalSalary = (baseSalary - (baseSalary * ir4 - 869.36));
}
console.log(finalSalary)
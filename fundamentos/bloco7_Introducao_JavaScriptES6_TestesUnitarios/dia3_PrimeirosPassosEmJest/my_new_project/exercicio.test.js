// 🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const {
  sum,
  myRemove,
  myFizzBuzz
} = require("./exercicio.js");

describe('função sum', () => {
  test('soma de 4 e 5', () => {
    expect(sum(4, 5)).toBe(9)
  });

  test('soma de 0 e 0', () => {
    expect(sum(0, 0)).toBe(0)
  });

  test('lançamento de erro parametro string', () => {
    expect(() => { sum(4, '5')}).toThrowError();
    expect(() => { sum(4, '5')}).toThrowError(Error('parameters must be numbers'));
  });

});

// 🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe('função myRemove', () => {
  test('retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });
  
  test('não retorna array original', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('retorna array original', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// 🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('função myFizzBuzz', () => {
  test('divsao por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('divisao por 3',  () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('divisao por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  });

  test('input string', () => {
    expect(myFizzBuzz('fd')).toBe(false)
  });

  test('number não divisivel por 3 e/ou 5', () => {
    expect(myFizzBuzz(1)).toBe(1)
  })
});


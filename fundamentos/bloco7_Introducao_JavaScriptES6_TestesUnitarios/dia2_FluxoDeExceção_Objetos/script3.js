const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (obj, key, value) => obj[key] = value;

addTurno(lesson2, 'turno', 'noite');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.

const objLength = (obj) => Object.entries(obj).length;

console.log(objLength(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => Object.values(obj);

console.log(listValues(lesson2));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {};

Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons)

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalStudents = () => {
  const sala1 = allLessons.lesson1.numeroEstudantes;
  const sala2 = allLessons.lesson2.numeroEstudantes;
  const sala3 = allLessons.lesson3.numeroEstudantes;
  return sala1 + sala2 + sala3;
}

console.log(totalStudents())

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

const getValueByNumber = (obj, index) => Object.values(obj)[index]

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const verifyPair = (obj, key, value) => obj[key] === value ? true : false;

console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// Bonus
// 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = () => {
  let total = 0
  const sala1 = allLessons.lesson1.numeroEstudantes;
  const sala2 = allLessons.lesson2.numeroEstudantes;
  const sala3 = allLessons.lesson3.numeroEstudantes;
  if (allLessons.lesson1.materia === 'Matemática') {
    total += sala1 ;
  } 
  if (allLessons.lesson2.materia === 'Matemática') {
    total += sala2
  } 
  if (allLessons.lesson3.materia === 'Matemática') {
    total += sala3
  }
  return total
}
console.log(mathStudents())

// 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
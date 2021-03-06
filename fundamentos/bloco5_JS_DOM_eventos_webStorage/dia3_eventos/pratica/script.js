const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// efeito de translate aplicado na classe tech

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClassTech1() {
  if (firstLi.className === '' && secondLi.className === 'tech' || thirdLi.className === 'tech'){
    firstLi.className = 'tech';
    secondLi.className = '';
    thirdLi.className = '';
  }
}

function addClassTech2() {
  if (secondLi.className === '' && firstLi.className === 'tech' || thirdLi.className === 'tech'){
    firstLi.className = '';
    secondLi.className = 'tech';
    thirdLi.className = '';
  }
}

function addClassTech3() {
  if (thirdLi.className === '' && firstLi.className === 'tech' || secondLi.className === 'tech'){
    firstLi.className = '';
    secondLi.className = '';
    thirdLi.className = 'tech';
  }
}
firstLi.addEventListener('click', addClassTech1);
secondLi.addEventListener('click', addClassTech2);
thirdLi.addEventListener('click', addClassTech3);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addText() {
  const element = document.querySelector('.tech');
  element.innerText = input.value;
}
input.addEventListener("change", addText)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function goPortfolio() {
  window.open('https://lucaseduardolema.github.io/home/', '_blank')
}
myWebpage.addEventListener("dblclick", goPortfolio)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function backgroudColorH3() {
  myWebpage.style.backgroundColor = 'red'
}
myWebpage.addEventListener("mouseover", backgroudColorH3)

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
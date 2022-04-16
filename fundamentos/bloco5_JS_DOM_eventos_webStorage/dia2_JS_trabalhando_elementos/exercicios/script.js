// 1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

function createH1() {
  const elementoH1 = document.createElement('h1');
  elementoH1.innerText = 'Exercício 5.2 - JavaScript';
  document.body.prepend(elementoH1);
}
createH1();

// 2 Adicione a tag main com a classe main-content como filho da tag body ;

function createMain() {
  const elementoMain = document.createElement('main');
  elementoMain.className = 'main-content';
  const elementoIrmao = document.getElementsByTagName('script')[0];

  elementoIrmao.parentNode.insertBefore(elementoMain, elementoIrmao);
}
createMain();
// 3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

function createSection() {
  const elementoSection = document.createElement('section');
  elementoSection.className = 'center-content';
  document.querySelector('.main-content').appendChild(elementoSection);
}
createSection()

// 4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

function createP() {
  const elementoP = document.createElement('p');
  elementoP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod cumque culpa illo voluptatem sint earum aliquid eaque omnis magnam quo voluptatibus tempora ab, iusto error temporibus animi dicta. Excepturi!'
  document.querySelector('.center-content').appendChild(elementoP)
}
createP()

// 5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

function createSectionLeft() {
  const elementoSection = document.createElement('section');
  elementoSection.className = 'left-content';
  document.querySelector('.main-content').appendChild(elementoSection);
}
createSectionLeft()

// 6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

function createSectionRight() {
  const elementoSection = document.createElement('section');
  elementoSection.className = 'right-content';
  document.querySelector('.main-content').appendChild(elementoSection);
}
createSectionRight()

// 7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

function createImage() {
  const elementoImg = document.createElement('img');
  elementoImg.src = 'https://picsum.photos/200';
  elementoImg.className = 'small-image';
  document.querySelector('.left-content').appendChild(elementoImg);
}
createImage()

// 8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

function createList() {
  const elementoUl = document.createElement('ul');
  document.querySelector('.right-content').appendChild(elementoUl);
  
  const numerosExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
  for (let i = 0; i < numerosExtenso.length; i += 1) {
    const elementoLi = document.createElement('li');
    document.getElementsByTagName('ul')[0].appendChild(elementoLi);
    document.getElementsByTagName('li')[i].innerText = numerosExtenso[i];
  }
}
createList()

// 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

function createH3() {
  for (let i = 0; i < 3; i += 1) {
    const elementoH3 = document.createElement('h3');
    document.querySelector('.main-content').appendChild(elementoH3);
  }
}
createH3()

// 10 Adicione a classe title na tag h1 criada;

function titleH1() {
  document.getElementsByTagName('h1')[0].className = 'title';
}
titleH1()

// 11 Adicione a classe description nas 3 tags h3 criadas;

function classH3() {
  for (let i = 0; i < 3; i += 1) {
    document.getElementsByTagName('h3')[i].className = 'description';
  }
}
classH3()

// 12 Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

function removeSection() {
  const main = document.querySelector('.main-content');
  const sectionRemover = document.querySelector('.left-content');
  main.removeChild(sectionRemover);
}
removeSection()

// 13 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

function centerSection() {
  const section = document.querySelector('.right-content');
  section.style.marginRight = 'auto'
}
centerSection()

// 14 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

function colorFatherCenterContent() {
  const elementoPai = document.querySelector('.center-content').parentElement;
  elementoPai.style.backgroundColor = 'green'
}
colorFatherCenterContent()

// 15 Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

function removeTwoLastListItem() {
  for (let i = 0; i < 2; i += 1) {
   const ultimoItem = document.getElementsByTagName('ul')[0].lastChild;
   ultimoItem.remove()
  }
}
removeTwoLastListItem()
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
*/

// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

document.getElementsByTagName('p')[1].innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deserunt ipsa assumenda perspiciatis expedita repellat nisi temporibus esse quas. Repellat ad, molestiae nesciunt ullam illo nihil ipsa quis odit error.';

// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';

// 3. Crie uma função que mude a cor do quadrado vermelho para branco.

document.getElementsByTagName("section")[0].style.backgroundColor = 'white';

// 4. Crie uma função que corrija o texto da tag <h1>.

document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
const conteudoP = document.getElementsByTagName('p');

for (let i = 0; i < conteudoP.length; i += 1) {
  conteudoP[i].style.textTransform = 'uppercase'
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

for (let i = 0; i < conteudoP.length; i += 1) {
  console.log(conteudoP[i])
}
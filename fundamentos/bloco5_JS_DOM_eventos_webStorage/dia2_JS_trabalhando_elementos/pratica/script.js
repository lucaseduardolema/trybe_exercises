// Parte 1
// Acesse o elemento elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta'))

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red'

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

document.getElementById('elementoOndeVoceEsta').firstElementChild.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, odit corporis. Tempore nam atque, perspiciatis illo autem commodi? Culpa quam totam magni similique aperiam quidem magnam voluptatem tempore cum facere.'

// Acesse o primeiroFilho a partir de pai .

console.log(document.getElementById('pai').firstElementChild)

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

console.log(document.getElementById('elementoOndeVoceEsta').parentElement.lastElementChild.previousElementSibling)

// Agora acesse o terceiroFilho a partir de pai .

console.log(document.getElementById('pai').lastElementChild.previousElementSibling)

// Parte 2
// Crie um irmão para elementoOndeVoceEsta .

let elementoDiv = document.createElement('div')
document.querySelector('#pai').appendChild(elementoDiv)

// Crie um filho para elementoOndeVoceEsta .

let elementoP = document.createElement('p')
document.querySelector('#elementoOndeVoceEsta').appendChild(elementoP).innerHTML = 'filho elementoOndeVoceEsta'

// Crie um filho para primeiroFilhoDoFilho .

let elementoA = document.createElement('a');
document.querySelector('#primeiroFilhoDoFilho').appendChild(elementoA).innerHTML = 'filho do primeiroFilhoDoFilho'

// A partir desse filho criado, acesse terceiroFilho .

console.log(document.getElementsByTagName('a')[0].parentElement.parentElement.nextElementSibling)

// Parte 3
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

document.getElementById('primeiroFilho').remove()
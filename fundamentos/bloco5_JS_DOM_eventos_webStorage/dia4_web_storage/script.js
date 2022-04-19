// Imagine que você é a pessoa responsável por desenvolver uma página que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página, utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.
// Bônus
// As propriedades descritas acima são obrigatórias , mas você é livre para adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo a melhora da experiência da pessoa que lê em sua página.

let valorBg = localStorage.getItem('bgTela');
let valorTxColor = localStorage.getItem('txColor');
let valorTxSize = localStorage.getItem('txSize');
let valorTxLineHeigth = localStorage.getItem('txLineHeigth');
let valorFontFamily = localStorage.getItem('fontFamily');

if (valorBg !== 'undefined') {
document.body.style.backgroundColor = valorBg;
};

if (valorTxColor !== 'undefined') {
  document.body.style.color = valorTxColor;
};

if (valorTxSize !== 'undefined') {
  document.body.style.fontSize = valorTxSize;
}

if (valorTxLineHeigth !== 'undefined') {
  document.getElementById('texto-formatado').style.lineHeight = valorTxLineHeigth;
}

if (valorFontFamily !== 'undefined') {
  document.getElementById('texto-formatado').firstElementChild.style.fontFamily = valorFontFamily
}

function bgTela() {
  let cores = ['black', 'green', 'white', 'red', 'yellow'];
  let random = Math.floor(Math.random() * 5);
  let corAleatoria = cores[random];
  document.body.style.backgroundColor = corAleatoria;
  
  localStorage.setItem('bgTela', corAleatoria);
}
document.getElementById('bgTela').addEventListener('click', bgTela);


function txColor() {
  let cores = ['black', 'green', 'white', 'red', 'yellow'];
  let random = Math.floor(Math.random() * 5);
  let corAleatoria = cores[random];
  document.body.style.color = corAleatoria;

  localStorage.setItem('txColor', corAleatoria);
}
document.getElementById('txColor').addEventListener('click', txColor);

function txSize() {
  let tamanhos = ['16px', '18px', '20px', '22px', '24px'];
  let random = Math.floor(Math.random() * 5);
  let tamanhoAleatorio = tamanhos[random];
  document.body.style.fontSize = tamanhoAleatorio;

  localStorage.setItem('txSize', tamanhoAleatorio);
}
document.getElementById('txSize').addEventListener('click', txSize);

function txLineHeigth() {
  let lineHeigth = ['15px', '20px', '25px', '30px', '35px'];
  let random = Math.floor(Math.random() * 5);
  let lineAleatoria = lineHeigth[random];
  document.getElementById('texto-formatado').style.lineHeight = lineAleatoria;

  localStorage.setItem('txLineHeigth', lineAleatoria);
}
document.getElementById('txLineHeigth').addEventListener('click', txLineHeigth);

function fontFamily() {
  let fontes = ['Courier New', 'Franklin Gothic Medium', 'Gill Sans', 'Lucida Sans', 'Segoe UI'];
  let random = Math.floor(Math.random() * 5);
  let fonteAleatoria = fontes[random];
  document.getElementById('texto-formatado').firstElementChild.style.fontFamily = fonteAleatoria;

  localStorage.setItem('fontFamily', fonteAleatoria)
}
document.getElementById('fontFamily').addEventListener('click', fontFamily);
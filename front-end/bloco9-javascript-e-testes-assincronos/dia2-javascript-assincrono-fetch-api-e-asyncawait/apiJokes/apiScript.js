// apiScript.js

// Em seguida, no terminal, vamos fazer a requisição: curl -H "Accept: text/html" "https://icanhazdadjoke.com/". Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
// Para a próxima requisição, vamos usar o comando: curl -H "Accept: text/plain" "https://icanhazdadjoke.com/". Veja que agora recebemos apenas a piada aleatória em formato texto.
// Por fim, faça a requisição: curl -H "Accept: application/json" "https://icanhazdadjoke.com/". Agora a API retorna um objeto no formato JSON.

// Agora vamos tentar fazer as requisições a API usando fetch. Essa função recebe dois parâmetros:
// O endereço para o qual a requisição será feita, ou seja, a url do serviço.
// Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves method e headers

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { "method": "GET", "headers": {'Accept': 'application/json'} })
    .then((response) => response.json())
    .then((data) => {
      return document.getElementById('jokeContainer').innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();
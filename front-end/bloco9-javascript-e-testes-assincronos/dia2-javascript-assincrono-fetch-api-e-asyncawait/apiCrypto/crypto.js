const api_url = `https://api.coincap.io/v2/assets`

async function getCryptos() {
  const listOfCryptos = await fetch(api_url);
  const cryptoJson = await listOfCryptos.json();
  const arrCrypto = cryptoJson.data;
  console.log(cryptoJson.data);

  return arrCrypto.forEach(element => {
    const elemPai = document.getElementById('crypto-list');
    const elemLi = document.createElement('li');
    elemLi.innerHTML = `${element.name} (${element.symbol}) valor em dólares: ${parseFloat(element.priceUsd).toFixed(2)}`;
    elemPai.appendChild(elemLi);
  });
}

window.onload = () => getCryptos();

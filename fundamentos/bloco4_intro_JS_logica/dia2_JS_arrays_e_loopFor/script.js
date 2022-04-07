// Pratica 1
// Obtenha o valor "Serviços" do array menu 

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Procure o índice do valor "Portfólio" do array menu

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu

menu.push('Contato')
console.log(menu)

// Pratica 2
//Utilize o for para imprimir os elementos da lista groceryList com o console.log()

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}

// Pratica 3
// Utilize o for/of para imprimir os elementos da lista names com o console.log()

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let pessoa of names) {
  console.log(pessoa);
}
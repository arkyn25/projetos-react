
// ## Desafio 2 - Somatório com reduce
// Dada a lista no arquivo `lista.json` some os preços de todos os produtos utilizando o reduce.

const list = require('./lista');

const arrayPrice = list.map((element) => parseInt(element.price.slice(2)));
const sumPrice = arrayPrice.reduce((acc,price) => acc + price,0).toFixed(2);
const total = `R$ ${sumPrice}`;

console.log(total);
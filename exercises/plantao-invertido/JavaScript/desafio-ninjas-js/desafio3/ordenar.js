// ## Desafio 3 - Trabalhando com objetos complexos
// Dado o array em `data.json`, faça um console.log do preço do terceiro elemento do array principal.

// Dica: o preço está na propriedade `b` do objeto.

const data = require('./data.json');

// seu código aqui
const string = data[2][1].b[0];
const price = string.split('/')[1].trim();
console.log(string)
console.log(price);
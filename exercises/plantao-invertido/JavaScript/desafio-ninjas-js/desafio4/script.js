// Seu código aqui

// Dada uma página com uma lista de frutas. Ao clicar no botão "Listar Frutas", 
// você deverá fazer um `alert` na tela, exibindo a lista de frutas em ordem alfabética DECRESCENTE.

const listaFruta = document.querySelectorAll('.fruta')
const button = document.querySelector('button')

const frutas = []

listaFruta.forEach((fruta) => frutas.push(fruta.innerHTML))

frutas.sort().reverse()

button.addEventListener('click', () => {
    alert(frutas.join('\n'))
})
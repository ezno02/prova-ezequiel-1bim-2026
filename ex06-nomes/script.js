const { createElement } = require("react")

const enviarBtn = document.getElementById('enviarBtn')
const limparBtn = document.getElementById('limparBtn')
const lista = document.getElementById('lista')
let nomes = []

enviarBtn.addEventListener('click', () => {
    const nome = document.getElementById('nome')
    nomes.push(nome)
})

limparBtn.addEventListener('click', () => {
    while (lista.firstChild) {
        nomes.shift()
    }
    makeList()
})
function makeList() {
    nomes.forEach((nome) => {
        const card = createElement('div')
        card.innerHTML = nome
        lista.appendChild(card)
    })
}
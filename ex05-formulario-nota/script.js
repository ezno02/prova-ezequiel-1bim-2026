const sendBtn = document.getElementById('sendBtn')
sendBtn.addEventListener('click', () => {
    const nota = Number(document.getElementById('nota').value)
    if (nota >= 7) {
        console.log('Aprovado')
    } else if (nota >= 5) {
        console.log('Recuperação')
    }else {
        console.log('Reprovado')
    }
})
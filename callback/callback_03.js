const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, '..', 'dados', 'aprovados.txt')

fs.readFile(caminho, function(erro, conteudo) {
    
    if(erro) return
    console.log(conteudo.toString())
})
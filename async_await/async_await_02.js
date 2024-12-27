let urlBible = 'https://bible-api.com/john 3:16'
async function obterVersiculo(livro, capitulo = 1, versiculo = 1) {
    const url = `${urlBible}${livro} ${capitulo}:${versiculo}`
    // const url = `https://bible-api.com/${livro} ${capitulo}:${versiculo}`
    
    const resposta = await fetch(url)
    const dados = await resposta.json()
    return dados.verses[0].text

}

obterVersiculo('john', 1, 1)
    .then(text => console.log(text))

// buscar todos os livros

async function obterLivros(livro, capitulo = 1, versiculo = 1) {
    const url = `${urlBible}${livro} ${capitulo}:${versiculo}`
    const resposta = await fetch(url)
    const dados = await resposta.json()
    return dados
}

obterLivros()
    .then(livros => console.log(livros))
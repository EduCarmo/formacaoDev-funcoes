const carrinho = [
    { nome: 'Caneta', qtd: 10, preco: 7.99, fragil: false },
    { nome: 'Caderno', qtd: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtd: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtd: 1, preco: 19.20, fragil: false },

    { nome: 'Impressora', qtd: 5, preco: 1000, fragil: true },
    { nome: 'iPads', qtd: 2, preco: 7500, fragil: true },
    { nome: 'Computador', qtd: 2, preco: 5000, fragil: true },
]


const produtoFrafil = produto => produto.fragil
const totalProduto = produto => produto.qtd * produto.preco
const totalizar = (total, valor) => total + valor

qtdDeItensFrafil = carrinho.filter(produtoFrafil).length
const resultado = carrinho
    .filter(produtoFrafil)
    .map(totalProduto)
    .reduce(totalizar) / qtdDeItensFrafil

console.log(resultado)

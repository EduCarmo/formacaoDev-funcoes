const carrinho = [
    {nome: 'Caneta', qtd: 10, preco: 7.99},
    {nome: 'Impressora', qtd: 4, preco: 649.50},
    {nome: 'Caderno', qtd: 4, preco: 27.10},
    {nome: 'Lapis', qtd: 3, preco: 5.82},
    {nome: 'Tesoura', qtd: 1, preco: 19.20},
]

const apenasNome = produto => produto.nome
const calcularTotal = produto => produto.qtd * produto.preco

console.log(carrinho.map(apenasNome))
console.log(carrinho.map(calcularTotal))
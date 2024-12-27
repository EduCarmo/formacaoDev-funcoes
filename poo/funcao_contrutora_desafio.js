// Função construtora -> Produto
// nome, preco, desonto (0 - 1) 15% 0.15
// precoFinal

function Produto(nome, preco, desconto) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto

    this.precoFinal = () => this.preco * (1 - this.desconto)
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Impressora', 649.50, 0.25)

console.log(`A ${p1.nome} custa R$ ${p1.precoFinal().toFixed(2)} com desconto `)
console.log(`A ${p2.nome} custa R$ ${p2.precoFinal().toFixed(2)} com desconto`)

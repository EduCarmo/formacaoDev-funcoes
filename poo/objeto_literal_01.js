const produto = {
    nome: 'iPad',
    marca:'Apple',
    preco: 7500,
    fragil: true,
    desconto: 0.15,

    precoComDesconto: function() {
        return this.preco * (1 - this.desconto)
    }
}

const precoFinal = produto.precoComDesconto()
console.log(precoFinal)
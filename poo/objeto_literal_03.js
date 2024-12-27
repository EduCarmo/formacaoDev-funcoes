// Problema da utilização de objetos literais
const usuario1 = {
    nome: 'Ana',
    email: 'ana@ana.com',
    senha: '123456',
    cadastro: new Date()
}

const usuario2 = {
    name: 'Carlos',
    email: 'carlos@carlos.com',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)
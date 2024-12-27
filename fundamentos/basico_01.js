const a = 4
console.log(a)

// Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()


// Function Expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

function executar (x) {
    if (typeof x === 'function'){
        x()
    }
}

executar(bomDia)
executar(boaTarde)

function potencia(exp) {
    return function (base) {
        return Math.pow(base, exp)
    }
}

const aoQuadrado = potencia(2)
console.log(aoQuadrado(4))
console.log(aoQuadrado(5))
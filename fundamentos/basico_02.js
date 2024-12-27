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

boaTarde() // o retorno é undefined


function somar (a, b) {
    return a + b
}

console.log(somar(1, 3))
// fn => 3 * 7
// fn => 3 + 7
// fn => 3 - 7

const multiplicar = (a, b) => a * b
const somar = (a, b) => a + b
const subtrair = (a, b) => a - b

// calcular (3) (7) (fn)

const calcular = (a, b, fn) => fn(a, b)

console.log(calcular(3, 7, multiplicar))
console.log(calcular(3, 7, somar))
console.log(calcular(3, 7, subtrair))



function esperarPor(tempo) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

async function executar() {
    await esperarPor(2000)
    console.log('Depois de 2 segundos...')
    await esperarPor(3000)
    console.log('Depois de 3 segundos...')
    await esperarPor(1500)
    console.log('Depois de 1.5 segundos...')
}

executar()


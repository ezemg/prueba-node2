let monedas = 0
function sumarMonedasDe25(cantidadDeMonedas) {
    for (let i = 0; i < cantidadDeMonedas; i+=2) {
        monedas = monedas + 0.25
    } return monedas
}

console.log (sumarMonedasDe25(10))
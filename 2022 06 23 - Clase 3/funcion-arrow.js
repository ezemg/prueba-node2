let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0
}

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}

console.log(horaActual())

let dameCinco = () => [1,2,3,4,5]

console.log(dameCinco())
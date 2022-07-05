let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0
}

let saludo = () => 'Hola mundo!'

console.log(saludo())

let dobleDe = a => a * 2

console.log(dobleDe(4))

let suma = (a,b) => a + b

console.log(suma(1,1))

let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes()
}

console.log(horaActual())
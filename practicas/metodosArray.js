// Map = recorre el Array y modifica cada uno de los elementos

let numeros = [2, 4, 6]
let dobleDeLosNumeros = numeros.map(function(unNumero){
    return unNumero * 2
})

console.log(dobleDeLosNumeros)

// Filter = Filtra los elementos, dependiendo de la logica implementada. Devuelve los elementos que cumplan la condicion

// let mayores = edades.filter(function(unaEdad){
//     return unaEdad >= 18
// })

// Reduce = Se ejecuta sobre un array, recibe un callback, y el callback recorre uno a uno los elementos.
// Busca reducir el valor al minimo.

let numeros2 = [5, 7, 16]

let resultado = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
})

console.log(resultado)
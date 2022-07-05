function sumar(...numeros){
    return numeros.reduce((acumulador, numero) => acumulador += numero)
}

console.log(sumar(1,4))
console.log(sumar(3,6,9,30))
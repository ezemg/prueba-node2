function productoria(numeros) {
    let total = 1
    for (let i = 0; i < numeros.length; i ++) {
        total = total * numeros[i]
    } return total
}

let numeros = [1, 4, 7, 10]

console.log(productoria(numeros))
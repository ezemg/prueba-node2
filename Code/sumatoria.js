function sumatoria(numeros) {
    let resultado = 0
    for (let i = 0; i < numeros.length; i++) {
        if ((numeros[i] % 2 == 0) && (numeros[i] != 10)) {
            resultado = resultado + numeros[i]
        }
    } return resultado
} 


numeros = [5, 10, 15, 20, 30]

console.log(sumatoria(numeros))
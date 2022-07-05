function masMenos(numeros){
    let positivos = 0
    let cero = 0
    let negativos = 0
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > 0) {
            positivos += 1
        } if (numeros[i] < 0) {
            negativos += 1
        } if (numeros[i] == 0) {
            cero += 1
        }
    
    let suma = positivos + cero + negativos
    let porcentaje = [positivos / suma, cero / suma, negativos / suma]
    }
}

let numeros = [1, 2, 0, -1]
console.log(masMenos(numeros))
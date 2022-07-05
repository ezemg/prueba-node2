let doble = numero => numero * 2
let triple = numero => numero * 3

function aplicarCallback (numero, callback){
    return callback(numero)
}


console.log(aplicarCallback(4, triple))
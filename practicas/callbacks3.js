let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let multiplicacion  = (a, b) => a * b;
let division = (a, b) => a / b

let calculadora = (a, b, callback) => callback(a, b)

console.log(calculadora(5, 2, multiplicacion))

function agregarHttp(url) {
    return 'http://' + url
}

function procesar(unArray, callback){
    let urls = []
    for (i = 0; i < unArray.length; i++) {
       urls.push(callback(unArray[i]))
    } return urls
}
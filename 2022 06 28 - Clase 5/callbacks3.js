//let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)

//console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]

//let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)

//console.log(largoDeElmentos); // imprime [ 14, 13 ]


function agregarHttp(url) {
    return 'http://' + url
}

function largoString (url) {
    return url.length
}

function procesar(unArray, callback){
    let sitioWeb = []
    for (i = 0; i < unArray.length; i++) {
       sitioWeb.push(callback(unArray[i]))
    } return sitioWeb
}



let sitioWebCompleto = (unArray, callback) => procesar(unArray, callback);


let urlCompletas = procesar(["www.google.com", "www.yahoo.com"],agregarHttp)
let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)

console.log(urlCompletas)
console.log(largoDeElmentos)
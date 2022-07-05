const { arrayBuffer } = require("stream/consumers");

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]

function agregarHttp(url) {
    return 'http://' + url
}

function procesar(miArray, callback){
    let urls = []
    for (let i = 0; i < array.length; i++){
        urls.push(callback(array[i]))
    } return urls;
}
function agregarHttp(url) {
    return 'http://' + url
}

function procesar(unArray, callback){
    let urls = []
    for (i = 0; i < unArray.length; i++) {
       urls.push(callback(unArray[i]))
    } return urls
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)

console.log(urlCompletas)

["www.google.com","www.yahoo.com"]


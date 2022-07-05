function nombreCompleto(nombre, apellido){
    return nombre + ' ' + apellido
}

function iniciales(nombre, apellido){
    return nombre[0] + apellido[0]
}

function saludar(nombre, apellido, callback){
    return 'Hola ' + callback(nombre, apellido) + '!'
}

console.log(saludar('Ezequiel', 'Grynberg', iniciales))
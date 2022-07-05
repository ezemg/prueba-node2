function nombreCompleto (nombre, apellido) {
    return nombre + ' ' + apellido
}

//console.log(nombreCompleto('Ezequiel', 'Grynberg'))

function saludar (nombre, apellido, callback) {
    return 'Hola ' + callback + '!'
}

console.log(saludar("Ezequiel", "Grynberg", nombreCompleto))
function reemplazoFastFast (miTexto, palabraBuscada, palabraReemplazo) {
    return miTexto.replace(palabraBuscada, palabraReemplazo)
}

console.log(reemplazoFastFast('hola que tal', 'hola', 'chau'))

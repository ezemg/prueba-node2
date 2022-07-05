function longitudNombreCompleto(nombre, apellido){
    return (nombre + " " + apellido).length
}

function esNumeroDeLaSuerte(numero) {
    return (numero > 0) && (numero % 2 == 0 || numero % 3 == 0) && (numero != 15)
}function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return (alturaPersona >= 1.5 || alturaPersona >= 1.2 && vieneConCompania) && (!tieneAfeccionCardiaca)
}
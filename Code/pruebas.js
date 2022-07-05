function puedoIrAlBanco (diaDeLaSemana, horaActual){
    if (diaDeLaSemana == "Domingo" || "Sabado") {
        return = false
    } else if (diaDeLaSemana == :"Sabado") {
        return = false
    } else if 

}


function filosofoHipster (profesion, nacionalidad, cantidadDeKilometros) {
    return (nacionalidad == "Argentina") && (profesion == "Músico") &&(cantidadDeKilometros > 2)
}

function puedeJubilarse(edad, genero, aniosAporte){
    if ((genero == "F") && (edad >= 60) && (aniosAporte >= 30)) {
        return true
    } else if ((genero == "M") && (edad >= 65) && (aniosAporte >= 30)) {
        return true
} else {
    return false
}
}

function puedeJubilarse(edad, genero, aniosAporte){
    if ((genero == "F") && (edad >= 60) && (aniosAporte >= 30)) {
        return true
    } else if ((genero == "M") && (edad >= 65) && (aniosAporte >= 30)) {
        return true
} else {
    return false
    }
}

function estaEnEdad (edad, genero){
    if ((edad >= 60) && (genero == "F")){
        return true
    } else if ((edad >= 65) && (genero == "M")) {
        return true
    } else {
        return false
    }
}

console.log(estaEnEdad(63, M))
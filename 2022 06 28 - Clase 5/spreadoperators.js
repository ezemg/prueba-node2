let peliculasAccion = ['End Game', 'Iron Man 3', 'Capitan America'];
let peliculasComedia = ['Mi Pobre Angelito', 'Que Paso Ayer?']

let peliculas = [...peliculasAccion, ...peliculasComedia]

console.log(peliculas)

let generoComedias = {
    nombreGenero: 'Comedia',
    popularidad: 3
}

let miPobreAngelito = {
    nombre: 'Mi Pobre Angelito',
    duracion: 120,
    ...generoComedias
}

let quePasoAyer = {
    nombre: 'Que Paso Ayer?',
    duracion: 110,
    ...generoComedias
}

console.log(miPobreAngelito)
console.log(quePasoAyer)


function peliculasVistas(...nombresDePeliculas){
    for(let i = 0; i < nombresDePeliculas.length; i++){
        console.log("La persona ya vio " + nombresDePeliculas[i])
    }
}

peliculasVistas('End Game', 'Iron Man 3')
let clubesUno = ['River', 'Voke', 'Racing'];
let clubesDos = ['San Silencio', 'Lanush', 'GimnasiaJamasCampeon']

let todosLosClubes = [...clubesUno, ...clubesDos]

console.log(todosLosClubes)


let auto = {
    marca: 'Ferrari',
    kms: 0,
    anio: 2019
}

let corredorUno = {
    nombre: 'Vettel',
    edad: 32,
    ...auto
}

let corredorDos = {
    nombre: 'Leclerc',
    edad: 21,
    ...auto
}

console.log(corredorDos)
console.log(corredorUno)

let notas = [1, 2, 3, 4, 5]
console.log(Math.min(...notas))
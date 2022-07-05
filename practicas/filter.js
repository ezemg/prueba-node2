let notas = [ 10, 4, 5, 8, 9, 2, 7]

let notasAprobadas = notas.filter(function(numero){
    return numero >= 7;
})

console.log(notasAprobadas)

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == true
})

let desaprobados = estudiantes.filter(function(estudiante){
    return estudiante.aprobado == false
})


console.log(aprobados)
console.log(desaprobados)
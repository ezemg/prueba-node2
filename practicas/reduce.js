let notas = [ 10, 4, 5, 8, 9, 2, 7]

let sumaNotas = notas.reduce(function(estado, numero){
           return estado + numero
})

console.log(sumaNotas)

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(estado, numero){
    return estado + numero
})

console.log(totalVueltas)
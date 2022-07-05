// let fechaActual = new Date()

// console.log(fechaActual.getDay())
// console.log(fechaActual.getDate())
// console.log(fechaActual.getMonth())
// console.log(fechaActual.getFullYear())

let miCumple = new Date(1991, 04, 10)

console.log(miCumple.getDay())



let fechaActual = new Date(1986, 9, 3);

// console.log(fechaActual.toUTCString())
// console.log(fechaActual.getFullYear())
// console.log(fechaActual.getMonth())
// console.log(fechaActual.getDate())

let anio = fechaActual.getFullYear()
let mes = fechaActual.getMonth()
let dia = fechaActual.getDate()
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]

console.log('Hoy es el ' + dia + ' de ' + meses[mes] + ' de ' + anio)
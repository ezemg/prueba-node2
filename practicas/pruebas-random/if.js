

let condicion = 11> 10 ? 'el 4 es mas grande' : 'el 10 es mas grande'

console.log(condicion)

let edad = 5

function saberEdad (edad) {
    
    switch (edad) {
    case 10:
        console.log('tiene 10 anos')
        break;
    case 5:
        console.log('tiene 5 anos');
        break
}
}

console.log(saberEdad(10))

function finDeSemana (dia) {
    case 'viernes':
        console.log('buen finde');
        break;
    case 'lunes':
        console.log('buena semana');
        break;
    default:
        console.log('buen dia');
        break;
}
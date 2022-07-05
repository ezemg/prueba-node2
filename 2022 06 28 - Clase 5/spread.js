let frutasUno = ['banana', 'pera', 'manzana'];
let frutasDos = ['durazno', 'ciruela', 'naranja'];

let todasLasFrutas = [...frutasUno, ...frutasDos]

console.log(todasLasFrutas)


let cursada = {
    curso: 'Fullstack',
    turno: 'Manana',
    sede: 'Belgrano'
};

let estudianteUno = {
    nombre: 'Denise',
    email: 'denise@email.com',
...cursada
}

let estudianteDos = {
    nombre: 'Javier',
    email: 'javi@email.com',
...cursada
}

console.log(estudianteDos)

function conVariosParametros(...params){

}
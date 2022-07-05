const fs = require('fs');
const archivo = require('./funcionesDeTareas');


let tareas = archivo.leerArchivo()

function listar () {

    for (let i = 0; i < tareas.length; i ++){
        console.log(i+1 + '. ' + tareas[i].titulo)
    }
}

const accion = process.argv[2];

switch (accion) {
    case 'listar':
        listar();
        break;
    case undefined:
        console.log('Atencion - Tienes que pasar una accion');
        break;
    default:
        console.log('No entiendo que quieres hacer')
}


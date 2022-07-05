const archivo = require('./funcionesDeTareas');

let tareas = archivo.leerArchivo()

function listar(){
    console.log('\n Listado de tareas. \n - - - - - - - - -');
        for (let i = 0; i < tareas.length; i++) {
         console.log((i + 1) + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado)
    }
}

const accion = process.argv[2]

switch (accion){
    case 'listar':
        listar();
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer.')
        break;
}


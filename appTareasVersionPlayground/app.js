let archivoTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

let tareas = archivoTareas.leerArchivo();

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        tareas.forEach(function(elemento, i){
            console.log((i + 1) +'. ' + elemento.titulo + ' - ' + elemento.estado)
        })
        console.log()
        break;

    case 'crear':
        let nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        tareas.push(nuevaTarea)
        tareas.forEach(function(elemento, i){
            console.log((i + 1) +'. ' + elemento.titulo + ' - ' + elemento.estado)
        })
        console.log()
        break;
        
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}

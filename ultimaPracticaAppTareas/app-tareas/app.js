const archivo = require('./funcionesDeTareas');
let tareas = archivo.leerArchivo()


const listar =() => {
    console.log('Listado de tareas.');
    console.log('------------------');
    let tareas = archivo.leerArchivo()
    tareas.forEach((elemento, i) => {
        console.log((i + 1) + '. ' + elemento.titulo + ' - ' + elemento.estado)
    })
}

const crearTarea = (nombre) => {
    archivo.guardarTarea({
        titulo: nombre,
        estado: 'pendiente'
    })
}

const filtrar = (estado) => {
   archivo.filtrarPorEstado(estado).forEach((elemento, i) => {
    console.log(i+1 + ". " + elemento.titulo + " - " + elemento.estado)
   })
}

const accion = process.argv[2]

const estadosValidos = ['en progreso', 'pendiente', 'terminada']

switch (accion){
    case 'listar':
        listar();
        break;
    case 'crear':
        let nombreTareaNueva = process.argv[3]
        if(nombreTareaNueva){
            crearTarea(nombreTareaNueva);
            listar();
            break
        }
        console.log("Error: Debe colocar un nombre")
        break;
    case 'filtrar':
        let estado = process.argv[3]
        if(estadosValidos.includes(estado)){
            filtrar(estado) 
        } else {
            console.log('Error: Coloque un estado valido')
        }
        break
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué quieres hacer.')
        break;
}


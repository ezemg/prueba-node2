const fs = require('fs');

let archivoTareas = {
    archivo : 'tareas.json',
    leerArchivo: function(){
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function (tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas), 'utf-8')
    },
    guardarTarea: function(nuevaTarea){
        const tareas = this.leerArchivo();
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas)
    },
    filtrarPorEstado: function(estado){
        const tareas = this.leerArchivo()
        return tareas.filter((tarea) => tarea.estado === estado)
    } 
}

module.exports = archivoTareas;

JSON
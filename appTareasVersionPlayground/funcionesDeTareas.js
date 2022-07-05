const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    
    },
    escribirJSON: function(tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas), 'utf-8')
    },
    guardartarea: function(nuevaTarea){
        const tareas = this.leerArchivo;
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas)
    }
}

module.exports = archivoTareas;

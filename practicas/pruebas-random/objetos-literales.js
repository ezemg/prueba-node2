let tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    activo: true,
    saludar: function () {
        return 'Hola, me llamo ' + this.nombre
    }
    
}

console.log(tenista.saludar())


function Auto (marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

let miAuto = new Auto('Ford', 'Falcon')


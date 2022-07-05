function reemplazoFastFast(miTexto, palabraBuscada, palabraReemplazo) {
    return miTexto.replace(palabraBuscada, palabraReemplazo)
}


function menciona(texto, palabra){
    if(texto.indexOf(palabra) != -1){
        return true
    } else {
        return false
    }
}

let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11, 16)


let cursoJs = {
    cantidadDeAlumnos: 23,
    docentes: ['Johnny', ' Fer'],
    horario: "de 21.00 a 23.30",
    comunicacion: function(){
        return 'El curso tiene ' + this.cantidadDeAlumnos + ' alumnos; los docentes son ' + this.docentes + '; y el horario de cursada es ' + this.horario
    }
}

function Cursos(cantidadDeAlumnos, docentes, horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario

}

let cursoNuevo = new Cursos(40, ['Ezequiel', 'Joaquin'], 'de 9.00 a 11.30')
let cursoMarketing = new Cursos(45, ['Diego', 'Debi'], 'de 17.00 a 19.00')

console.log(cursoJs.comunicacion())
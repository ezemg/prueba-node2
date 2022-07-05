let = fruta = 'lapicera';

let resultado = fruta == 'Manzana'?'Buenisimo, me gustan las manzanas':'Ufa, queria manzana'

console.log(resultado)


let semaforo = 'asdasd';

switch(semaforo){
    case 'Verde': 
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaucion');
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
        break
}




let dia = 'Lunes'

switch(dia){
    case 'Viernes':
        console.log('buen finde');
        break;
    case 'Lunes':
        console.log('buena semana');
        break;
    default:
        console.log('buen dia')
        break
}


function tengoClases(dia) {
	switch (dia) {
    	case 'lunes' || 'miércoles' || 'viernes':
			console.log("tenés clases");
			break;
		default:
			console.log("no tenés clases")
            break
	}
}


console.log(tengoClases(lunes))
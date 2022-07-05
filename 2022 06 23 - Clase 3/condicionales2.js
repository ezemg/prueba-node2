let dia = 'lunes'

function tengoClases(dia) {
	switch (dia) {
    	case 'lunes':
		case 'miércoles':
		case 'viernes':
			console.log("tenés clases");
			break;
		default:
			console.log("no tenés clases")
			break
	}
}




let elMayor = 11 > 10 ? 'El 4 es mayor' : "el 10 es mayor"
console.log(elMayor)

let bicicletaA = {
    rodado: 34,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = (bicicletaA.rodado > bicicletaB.rodado) ? bicicletaA : bicicletaB

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );
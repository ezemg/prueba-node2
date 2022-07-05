function reporteDePasajeros(estacion) {
    let arrayResultado = []
    for (let i=0; i <= estacion; i++) {
        let pasajeros = 200;
        if (i => 5) {
            pasajeros = pasajeros + i*20 + 20;
        } else {
            pasajeros = pasajeros + i*20;
        }
        arrayResultado.push("En la estación "+ i +" hay "+ pasajeros +" pasajeros arriba del tren");
    }
    return arrayResultado;
}


console.log(reporteDePasajeros(0)); 

console.log (reporteDePasajeros(1))
 
console.log(reporteDePasajeros(2)); 
 
console.log(reporteDePasajeros(4));  
 
console.log(reporteDePasajeros(5))

console.log(reporteDePasajeros(6)) 
 
console.log(reporteDePasajeros(7)); 


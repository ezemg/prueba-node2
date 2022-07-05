let monedas = 0; // Acá inicializo la variable totalCalorias con un valor de 0 (cero)

for( let i = 0 ; i < 5 ; i++ ){ 
       monedas = monedas + 0.25;  // Acá la variable, como ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia"
}

console.log(monedas); // La variable totalCalorias acá ya existe y nos devuelve el valor total que buscábamos.
    
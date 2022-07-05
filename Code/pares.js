function sumatoriaHasta(x) {
    let suma = 0
    for (let i = 0; i < x; i++) {
        suma = suma + i
    } return suma
}

function caloriasDeTrote(x){
    let calorias = 0
    for (let i = 0; i <=x; i++) {
        calorias += 5 * i 
    } return calorias
}

console.log(caloriasDeTrote(2))
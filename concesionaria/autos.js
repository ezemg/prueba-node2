let autos = [
    {
    marca: "Ford",
    modelo: "Fiesta",
    precio: 150000,
    km: 200,
    color: "Azul",
    cuotas: 12,
    anio: 2019,
    patente: "APL123",
    vendido: false,
},
{
    marca: "Toyota ",
    modelo: "Corolla ",
    precio: 100000,
    km: 0,
    color: "Blanco",
    cuotas: 14,
    anio: 2019,
    patente: "JJK116",
    vendido: false ,
}
]

function buscar(patente) {
    for (i=0; i<autos.length; i++){
        if(patente == autos[i].patente){
            return autos[i]
        } else {
            return null
        }
    } 
}

function vender(patente){
    if (buscar(patente) == patente) {
        return autos[i].vendido = true
    }
}  

console.log(vender("APL123"))
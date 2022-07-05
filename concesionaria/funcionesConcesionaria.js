const autos = require('./autos.js')

const concesionaria = {
   autos: autos,

   buscarAuto: function buscar(patente) {
    for (i=0; i<=autos.length; i++){
        if(patente === autos[i].patente){
            return autos[i]
        } else {
            return null
        }
    } 
},
    venderAuto: function(patente){
        if (this.buscarAuto(patente) == patente) {
            return autos[i].vendido == true
        }
    }  
};


console.log(concesionaria.buscarAuto('APL123'))
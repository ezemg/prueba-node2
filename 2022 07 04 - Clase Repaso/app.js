const celulares = require('./celulares')

const dbz = {
  celulares: celulares,

  buscarCelular: function(codigo){
    for (let i = 0; index < celulares.length; index++){
        if(celulares[index].codigo == codigo){
            return celulares[index]
        } 
        }   return null  
    },

  venderCelular:'',
  celularesParaLaVenta: '',
  celularesNuevos: '',
  listaDeVentas: '',
  totalDeVentas:'',
  puedeComprar:'',
  celularesQuePuedeComprar:'',
};


function saldosDeMesesConGanancia(unPeriodo) {
    var saldos = [];
    for (var i = 0; i < unPeriodo.length; i++) {
      if (unPeriodo[i] > 0){
        saldos.push(unPeriodo[i])
      }    
    }
    return saldos
  }
  
 let unPeriodo = ([100, 20, 0, -10, 10])


console.log(saldosDeMesesConGanancia(unPeriodo))
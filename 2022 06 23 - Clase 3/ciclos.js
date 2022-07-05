function noParesDeContarImparesHasta(numero){
    let acumulador = 0
    for (let i = 1; i <= numero ; i + 2){
        acumulador ++
    } return acumulador
}


console.log(noParesDeContarImparesHasta(45))

function noParesDeContarImparesHasta(numero){
    let acumulador = 0
    for (let i = 0; i <= numero ; i ++){
        if (i % 2 != 0){ acumulador ++}
    } return acumulador
}
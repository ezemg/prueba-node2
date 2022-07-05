function noParesDeContarImparesHasta(numero){
    let acumulador = 0
    for (let i = 0; i <= numero; i ++) {
        if (i % 2 != 0) {acumulador++}
    } return acumulador
}

console.log(noParesDeContarImparesHasta(5))

console.log('hola mundo')
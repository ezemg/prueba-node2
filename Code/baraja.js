function naipes(palos){
    let baraja = []
    for (i = 1; i <= 12; i++){
        if (i != 8 && i != 9) {
        baraja.push (i + " de " + palos)
        }
    } return baraja
}


console.log(naipes("espadas"))
function sumaDeLosParesDel0Al(x) {
    let numeros = 0
    for (let i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            numeros = numeros + i
        }
    } return numeros
}

console.log(sumaDeLosParesDel0Al(10))
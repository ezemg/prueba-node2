function factorial(x){
    let base = 1
    for (let i = 1; i <= x; i++) {
        base *= i 
    } return base
}

console.log(factorial(100))
let miArray = [0, 1, 2, 3, 4];

console.log(miArray.lenght);

let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar(unArray, otroArray) {
  let aux = unArray.pop();
  otroArray.push(aux);
}

let miArray = [1, 2, 3, 4, 5]
function contiene(miArray, numero) {
    return miArray.indexOf(numero) != -1
}

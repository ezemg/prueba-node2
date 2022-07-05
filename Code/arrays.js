let medallas = ["Nada", "Oro", "Plata", "Bronce"]
function medallaSegunPuesto(puesto) {
    if (puesto == 1) {return medallas[1]
    } else if (puesto == 2) {
        return medallas[2]
    } else if (puesto == 3) {
        return medallas[3]
    } else {
        return "Seguí participando"
    }
}

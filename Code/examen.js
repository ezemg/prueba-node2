function asientosDisponibles (asientos, seleccion) {
    if (asientos.indexOf(seleccion) != -1) {
        return "Felicitaciones, el asiento número " + seleccion + " está disponible"
    } else {
        return "Lo sentimos, el asiento número " + seleccion + " está ocupado, pero aún quedan " + asientos.length + " asientos disponibles"
    }
}

console.log (asientosDisponibles([15, 28, 44, 45], 50))
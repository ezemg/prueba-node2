let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function entrenarHoras(cantidadHoras) {
        return this.energia -= (cantidadHoras * 5);
        return this.experiencia += (cantidadHoras * 2)
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


entrenarHoras: function entrenarHoras(n) {
    this.energia -= (n * 5);
    this.experiencia += (n * 2)
}
function estaEnEdad(edad, genero) {
  if (edad >= 60 && genero == "F") {
    return true;
  } else if (edad >= 65 && genero == "M") {
    return true;
  } else {
    return false;
  }
}

console.log(estaEnEdad(63, "M"));

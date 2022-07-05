function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca) {
  if (tieneAfeccionCardiaca == true) {
    return false;
  } else if (alturaPersona < 1.2) {
    return false;
  } else if (alturaPersona >= 1.2 && vieneConCompania == true) {
    return true;
  } else if (alturaPersona >= 1.5) {
    return true;
  }
}

console.log(puedeSubirse(1.2, false, false));

alturaPersona;

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca) {
  if (tieneAfeccionCardiaca == true) {
    return false;
  } else if (alturaPersona < 1.2) {
    return false;
  } else if (alturaPersona >= 1.2 && vieneConCompania == false) {
    return false;
  } else if (alturaPersona >= 1.5) {
    return true;
  } else {
    return true;
  }
}

function estaEnEdad(edad, genero) {
  if (exdad >= 60 && genero == "F") {
    return true;
  } else if (edad >= 65 && genero == "M") {
    return true;
  } else {
    return false;
  }
}

function tieneSuficientesAportes(aniosAporte) {
  return aniosAporte >= 30;
}

function puedeJubilarse(edad, genero, aniosAporte) {
  return estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
}

function elMayor(numeroA, numeroB) {
  if (numeroA > numeroB) {
    return numeroA;
  } else {
    return numeroB;
  }
}

function signo(numero) {
  if (numero > 0) {
    return 1;
  } else if (numero < 0) {
    return -1;
  } else {
    return 0;
  }
}

function puedoIrAlBanco(diaDeLaSemana, horaActual) {
  return (
    diaDeLaSemana != "Sábado" &&
    diaDeLaSemana != "Domingo" &&
    horaActual >= 10 &&
    horaActual <= 15
  );
}

function filosofoHipster(profesion, nacionalidad, cantidadDeKilometros) {
  return (
    nacionalidad == "Argentina" &&
    profesion == "Músico" &&
    cantidadDeKilometros > 2
  );
}

function filosofoHipster(nacionalidad, profesion, cantidadKm) {
  return nacionalidad == "Argentina" && profesion == "Músico" && cantidadKm > 2;
}

function esNumeroDeLaSuerte(numero) {
  return numero > 0 && (numero % 2 == 0 || numero % 3 == 0) && numero != 15;
}

function puedeJubilarse(edad, genero, aniosAporte) {
  if (edad >= 60 && genero == "F" && aniosAporte >= 30) {
    return true;
  } else if (edad >= 65 && genero == "M" && aniosAporte >= 30) {
    return true;
  } else {
    return false;
  }
}

function puedeJubilarse(edad, genero, aniosAporte) {
  return (
    ((edad >= 60 && genero == "F") || (edad >= 65 && genero == "M")) &&
    aniosAporte >= 30
  );
}

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca) {
  return (
    (alturaPersona >= 1.5 || (alturaPersona >= 1.2 && vieneConCompania)) &&
    !tieneAfeccionCardiaca
  );
}

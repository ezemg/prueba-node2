let edad = 19;
let acceso = "";

if (edad < 16) {
  acceso = "prohibido";
} else if (edad > 16 && edad <= 18) {
  acceso = "permitido solo acompanado de un mayor";
} else {
  acceso = "permitido";
}

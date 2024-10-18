/*16.Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés) */
var horaEntrada = parseInt(prompt("Ingrese la hora de entrada (en horas): "));
var horaSalida = parseInt(prompt("Ingrese la hora de salida (en horas): "));
var horas = horaSalida - horaEntrada;

if (horas > 0 && horas <= 0.5) {
  console.log("Por políticas de la empresa usted no paga.");
} else if (horas > 0.5 && horas <= 2) {
  var mas30min = 30 + (horas - 0.5) * 10;
  console.log("Usted tiene que pagar: " + mas30min + " pesos");
} else if (horas > 2 && horas <= 3) {
  var mas2horas = 80 + (horas - 2) * 25;
  console.log("Usted tiene que pagar: " + mas2horas + " pesos");
} else if (horas > 3) {
  var mas3horas = 130 + (horas - 3) * 30;
  console.log("Usted tiene que pagar: " + mas3horas + " pesos");
} else if (horas === 0) {
  console.log("Tiene que pagar 720 pesos");
}

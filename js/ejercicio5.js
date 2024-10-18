/*5. Comparaciones: Escribe un programa que compare dos números y diga cuál
es mayor o si son iguales.*/
let num1 = parseInt(prompt("Ingresa el numero 1: "));
let num2 = parseInt(prompt("Ingresa el numero 2: "));
if (num1 > num2) {
  console.log("el numero 1 (" + num1 + ") es mayor");
} else if (num2 > num1) {
  console.log("El numero 2 (" + num2 + ") es mayor");
} else {
  console.log("Los dos números son iguales");
}

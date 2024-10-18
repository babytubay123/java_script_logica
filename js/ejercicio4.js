/*4. Condicionales: Crea un programa que verifique si un número es positivo,
negativo o cero, e imprima el resultado.*/
let num1 = parseInt(prompt("Ingrese un número: "));

if (num1 < 0) {
  console.log("Este número es negativo");
} else if (num1 > 0) {
  console.log("Este número es positivo");
} else {
  console.log("Este número es 0");
}

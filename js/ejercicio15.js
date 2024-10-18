/*15. Validación de entrada: Pide al usuario que ingrese un número y verifica si es
realmente un número. Si no lo es, muestra un mensaje de error.*/
let numero = parseInt(prompt("Escribe un número: "));
if (!isNaN(numero)) {
  alert("Es número");
} else {
  alert("El dato ingresado no es un número");
}

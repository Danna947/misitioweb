

/* Activando el modo Scrict*/
"use strict"

/*Ejercicio N.1 */
/*el siguiente codigo se ejecuta una vez cargue el documento html */
alert("Bienvenidos al mundo de Javascript :)");

/*Ejercicio N.2 use strict no permite utilizar variables que no halla sido declarada */
let nombreAprendiz = "Danna";
alert(nombreAprendiz);

/*Ejercicio N.3 */
/*crea 2 variables de tipo string (nombre y apellido) y las mostramos en consola*/
let nombresAprendiz = "Danna";
let apellidoAprendiz = "López";

console.log("Ejercico N.3");
console.log(nombresAprendiz + " " + apellidoAprendiz);

/*Ejercicio N.4 */
let num1Int = 5;
let num2Int = 3;
let num3Str = "4";
let num4Str = "8";

console.log();
console.log("Ejercicio N.4");
console.log("Entero + Entero (5 + 3)");
console.log(num1Int + num2Int);

console.log("String + String (\"4\" + \"8\")");
console.log(num3Str + num4Str);

console.log("Entero + String (5 +\"4\")");
console.log(num1Int + num3Str);
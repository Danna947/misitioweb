

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

/* Operadores aritmeticos*/
console.log("Operadores Aritmeticos");
let numArit1 = 9;
let numArit2 = 6;

console.log("Suma: ");
console.log("numArit1 (9) + numArit2 (6): " + (numArit1 + numArit2));

console.log("Resta: ");
console.log("numArit2 (6) - numArit1 (9): " + (numArit2 - numArit1));

console.log("Multiplicacion: ");
console.log("numArit2 (6) * numArit1 (9): " + (numArit2 * numArit1));

console.log("Divicion: ");
let resuldivi = numArit1 / numArit2;
console.log("numArit1 (9) / numArit2 (6): " + (numArit1 / numArit2));

console.log("Redondear numeros: ");
/*Para sacar el reciduo */
console.log("Residuo: " + (numArit1 % numArit2));

/*Redondea el resultado de la divion para que no me de tantos numeros despues del punto*/
console.log("Redondear promedio....");
console.log(Math.round(resuldivi));
/*Redondea el resultado de la vicion asia abajo */
console.log("Redondear hacia bajo....");
console.log(Math.floor(resuldivi));
/*Redondea el resultado de la vicion asia arriba*/
console.log("Redondear hacia arriba....");
console.log(Math.ceil(resuldivi));
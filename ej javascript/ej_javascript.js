//activando el modo scrict//
"use scrict"

/*Ejercicio N.1 */
/*el siguiente codigo se ejecuta una vez cargue el documento html */
alert("Bienvenido al mundo de javascript");

// *Ejercicio N.2 use strict no permite utilizar variables que no halla sido declarada */
let nombreaprendiz = "Danna López";
alert(nombreaprendiz);
/*Ejercicio N.3 */
/*crea 2 variables de tipo string (nombre y apellido) y las mostramos en consola*/
let nombresAprendiz = "Danna";
let apellidos = "Lopez";
console.log("Ejercicio 3");
console.log(nombreaprendiz + " " + apellidos)

//Ejercicio 4*//
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

//Ejecicico 5 conversión explicita//
//conversión de string a entero//

let num3int = parseInt(num3Str);
let resultado = num1Int + num2Int;
console.log("Conversión de sting a entero")
console.log(resultado);

// de entero a string//
console.log("Conversión explícita de entero a string");
let num2Str = num1int.toString();
let resultado2= num2Str + num1Int;
cosole.log(resultado2);

//Limitaciones de Variables //
//no iniciar variables con números
// no poner con espacio 
//los nombres de las variables
// no poner las variables dentro de las comillas ni caracteres especiales de tipo guión o guíon bjo//
// no podemos poner variables con nombres restringuidos como stwich//
//evitar declarar variables en mayúscula ya que son especialemente cuando se utiliza CONSTANTES//
// 






console.log("Zona Horaria");
console.log("obtener la fecha y hora del navegador");
//
let tiempGMT = new Date();
console.log(tiempGMT);
let tiempGMTStr = tiempGMT.toString();
console.log("Fecha y hora convertida en cadena de texto");
console.log(tiempGMTStr);
console.log("Obtener el día de la semana");
let tiempGMTDay = tiempGMT.getDay();
console.log(tiempGMTDay);
let diaSemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log(diaSemana[tiempGMTDay]);
let meses=["Enero","Febrero","Marzo",
            "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let tiempGMTMonth = tiempGMT.getMonth();
console.log("El mes es:"+ meses[tiempGMT]);
let curentTime = new Date();
console.log("Fecha y hora desfragmentada");
console.log("Dia de la semana:"+ curentTime.getDay());
console.log("Mes del año:"+ curentTime.getMonth());
console.log("Dia del mes:"+ curentTime.getDate());
console.log("Año:"+ curentTime.getFullYear());
console.log("Hora:"+ curentTime.getHours());
console.log("Minutos:"+ curentTime.getMinutes());
console.log("Segundos:"+ curentTime.getSeconds());
console.log("Milisegundos:"+ curentTime.getMilliseconds());


console.log("Milisegundos transcurridos desde el primero de Enero de el año 1970");
console.log(curentTime.getTime());
console.log("Estableciendo difrencia en fechas:")
let newyear2024 = new Date("January 1, 2024");
let fehaactual = new Date();
console.log(newyear2024);
let newyear2024ss = newyear2024.getTime();
let fechaactuales = fehaactual.getTime();
let millisegunods = newyear2024ss - fechaactuales;
let diasdiff = millisegunods  / (1000 * 60 * 60 * 24); 
console.log("Dias faltantes para el año nuevo:"+ diasdiff);
console.log(Math.floor(diasdiff));

console.log("Ingresar fecha y hora");
let fechahora = new Date("July 7, 2023 08:00:00");
let fechahrms = fechahora.getTime();
let fechadifvot = fechahora - fechaactuales;
console.log("Segundos faltantes:"+fechadifvot /1000);
console.log("Minutos faltantes:"+ fechadifvot / (1000 * 60));
console.log("Horas faltantes:"+ fechadifvot / (1000 * 60 * 60));
console.log("Dias faltantes:"+fechadifvot /(1000 * 60 * 60 * 24));
calculartiempovotaciones();
function calculartiempovotaciones(){{
    console.log("Ingresar fecha y hora");
    let fechahora = new Date("July 7, 2023 08:00:00");
    let fechahrms = fechahora.getTime();    
    let fechadifvot = fechahrms - fechaactuales;
    let diasrestantes = Math.floor(fechadifvot / (1000*60*60*24));
    let horasrestantes = Math.floor(fechadifvot / (1000*60*60));
    let horasrestantesSinDeim = Math.floor(horasrestantes % 24);
    let mininutosrestantes = fechadifvot /(1000 % 24);
    let mininutosrestantesSinDec = Math.floor(mininutosrestantes%60);
    console.log("El tiempo restante por las votaciones es:"+diasrestantes+ "dias, "+horasrestantes+"horas, "+mininutosrestantesSinDec+"minutos, ");
}};





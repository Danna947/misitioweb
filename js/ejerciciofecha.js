    
    // document.getElementById("form").addEventListener("submit", function(event) {
    // event.preventDefault(); 


    // var dia = parseInt(document.getElementById("dia").value);
    // var mes = parseInt(document.getElementById("mes").value);
    // var years = parseInt(document.getElementById("years").value);


    // var fechaActual = new Date();


    // var fechaIngresada = new Date(years, mes - 1, dia); 
    // if (fechaIngresada.getTime() > fechaActual.getTime()) {
 
    //     var tiempoFaltante = fechaIngresada.getTime() - fechaActual.getTime();
    //     var diasFaltantes = Math.ceil(tiempoFaltante / (1000 * 60 * 60 * 24));

    //     document.getElementById("resultado").textContent = "Faltan " + diasFaltantes + " días para esa fecha.";
    // } else if (fechaIngresada.getTime() < fechaActual.getTime()) {
   
    //     document.getElementById("resultado").textContent = "Ya pasó la fecha ingresada.";
    // } else {
     
    //     document.getElementById("resultado").textContent = "La fecha ingresada es hoy.";
    // }
// });
let form = document.getElementById("form");

let dia = document.getElementById("dia");
let mes = document.getElementById("mes");
let years = document.getElementById("years");
let fechaActual = new Date();
let fechaingresada = new Date(years, mes - 1,dia);
function validarlafecha({
    
});







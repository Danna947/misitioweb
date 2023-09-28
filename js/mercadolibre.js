class Automovil{
    constructor(marca,modelo){
        this.marca =marca;
        this.modelo = modelo;
    }
}

let auto1 = new Automovil("Toyota","TXL");
let marcaautomovil = auto1.marca;
let inputbusqueda = document.getElementById("inputBusqueda");

inputbusqueda.addEventListener("keydown",function(event){

    if(event.key == "Enter"){
        let mainContent = document.getElementById("mainContent");
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")
        // crear contenedor para la inofrmacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);

        let txtMarca = document.createElement("label");
        boxInfo.appendChild(txtMarca);
        boxInfo.setAttribute("class","box-info");
        txtMarca.innerText = auto1.marca;


        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerText = " "+auto1.modelo;
        3


    }


});
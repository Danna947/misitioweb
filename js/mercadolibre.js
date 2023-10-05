class Automovil{
    constructor(marca,modelo,precio){
        this.marca =marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

let auto1 = new Automovil("Toyota","TXL","190000000");
// let marcaautomovil = auto1.marca;
let inputbusqueda = document.getElementById("inputBusqueda");

// inputbusqueda.addEventListener("keydown",function(event){
    window.addEventListener("load",function(){
        
            // if(event.key == "Enter"){
                let mainContent = document.getElementById("mainContent");
                // creando contenedor para el vehiculo
                
                let boxAuto = document.createElement("div");
                mainContent.appendChild(boxAuto);
                boxAuto.setAttribute("class","box-auto")
   

        //   creando contenedor para la imagen
            let  boxImg = document.createElement("div");
            boxAuto.appendChild(boxImg);
            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            boxImg.setAttribute("class", "box-img");
            imgAuto.setAttribute("src", "imgdan/toyota-xtll-d.jpg");
            imgAuto.setAttribute("class","img-auto");


        //corazon imagen //
        let boxCorazon = document.createElement("i");
        // boxCorazon.appendChild("boxCorazon");
        boxCorazon.setAttribute("class","box-corazon");
        let corazon = this.document.createElement("div");
        boxCorazon.appendChild(corazon);
        corazon.setAttribute("class","corazon");

        // cargando icono corazon //
        let iconoHeart = document.createElement("i");
        corazon.appendChild(iconoHeart);
        iconoHeart.setAttribute("class","icono-style-hearth fa-regular fa-heart");
        // ·

        


            // crear contenedor para la informacion

            let boxInfo = document.createElement("div");
            boxAuto.appendChild(boxInfo);
            let infoMarca = document.createElement("div");
            boxInfo.appendChild(infoMarca);
            infoMarca.setAttribute("class","info-marca");
            let txtMarca = document.createElement("label");
            infoMarca.appendChild(txtMarca);
            boxInfo.setAttribute("class","box-info");
            txtMarca.innerText = auto1.marca;
            txtMarca.setAttribute("class","txt-marca");

            let txtModelo = document.createElement("label");
            infoMarca.appendChild(txtModelo),
            txtModelo.innerText = " "+auto1.modelo;
            txtModelo.setAttribute("class", "txt-modelo");
        
            // precio
            let precioFormat = new Intl.NumberFormat("de-DE").format (auto1.precio);
            let txtPrecio = document.createElement("label");
            boxInfo.appendChild(txtPrecio);
            txtPrecio.innerText = "$" + precioFormat;
            txtPrecio.setAttribute("class", "txt-precio");

            //kilometraje y procedencia//


            let boxprecedencia = this.document.createElement("div");
            boxInfo.appendChild(boxprecedencia);
            let txtkilometros = this.document.createElement("label")
       
    
    });
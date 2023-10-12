
function Automovil(marca, modelo, precio, anyo, ciudad, kilometros,imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.anyo = anyo;
    this.ciudad = ciudad;
    this.kilometros = kilometros;
    this.imagen = imagen;
};
// funcion con todos los atributos del objeto automóvil
//array con los atributos de los objetos//
let autos=[
    new Automovil("Toyota","TXL",190000000,2021,"Bogotá-Cundinamarca",35420,"imgdan/toyota-xtll-d.jpg"),
    new Automovil("Mercedes Benz","CLA-200",187000000,2023,"Medellin-Antioquia ",7000,"imgdan/mercedes.png"),
    new Automovil("Nissan ","Kicks 1.6 Advance",74900000,2018,"Bogotá-Cundinamarca",82600,"imgdan/nissan-naranja.png"),
    new Automovil("Mazda","Grand Tourling",78000000,2019,"Boston-Medellin-Antioquia",16000,"imgdan/mazda-azul.png"),
    new Automovil("Nissan","Pathfinder",83500000,2015,"Medellin-Antioquia",68000,"imgdan/nissa-path.png"),
]
let inputbusqueda = document.getElementById("inputBusqueda");

inputbusqueda.addEventListener("keydown",function(event){
        
    if(event.key == "Enter"){
        const inputValue = inputbusqueda.value.toLowerCase();//se convierte a minuscula//

        if(inputValue==="automoviles"){

        //Se llama al arreglo para que sea recorrido mediante un forEach luego la funcion el parametro auto
        // el cual se va a relacionar con todos los atributos de el objeto//
        autos.forEach(function (auto) {
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class", "box-auto");

        //    creando contenedor para la imagen
         let  boxImg = document.createElement("div");
         boxAuto.appendChild(boxImg);
         let imgAuto = document.createElement("img");
         boxImg.appendChild(imgAuto);
         boxImg.setAttribute("class", "box-img");
         imgAuto.setAttribute("src", auto.imagen);
         imgAuto.setAttribute("class","img-auto");

        //   corazon imagen ///

         let boxCorazon = document.createElement("div");
         boxImg.appendChild(boxCorazon);
         boxCorazon.setAttribute("class","box-corazon");
         let corazon = document.createElement("div");
         boxCorazon.appendChild(corazon);
         corazon.setAttribute("class","corazon");

         // cargando icono corazon //
         let iconoHearth = document.createElement("i");
         corazon.appendChild(iconoHearth);
         iconoHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

         // crear contenedor para la informacion

         let boxInfo = document.createElement("div");
         boxAuto.appendChild(boxInfo);
         let infoMarca = document.createElement("div");
         boxInfo.appendChild(infoMarca);
         infoMarca.setAttribute("class","info-marca");
         let txtMarca = document.createElement("label");
         infoMarca.appendChild(txtMarca);
         boxInfo.setAttribute("class","box-info");
         txtMarca.innerText = auto.marca;
         txtMarca.setAttribute("class","txt-marca");

         let txtModelo = document.createElement("label");
         infoMarca.appendChild(txtModelo),
         txtModelo.innerText = " "+auto.modelo;
         txtModelo.setAttribute("class", "txt-modelo");

        
        // precio
        let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
        let txtPrecio = document.createElement("label");
        boxAuto.appendChild(txtPrecio);
        txtPrecio.innerText = "$" + precioFormat;
        txtPrecio.setAttribute("class", "txt-precio");

        // kilómetros y procedencia
        let boxPrecedencia = document.createElement("div");
        boxAuto.appendChild(boxPrecedencia);
        boxPrecedencia.setAttribute("class", "box-procedencia");

        let txtAnyo = document.createElement("label");
        boxPrecedencia.appendChild(txtAnyo);
        txtAnyo.innerHTML = auto.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxPrecedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " · ";

        let txtCiudad = document.createElement("label");
        boxPrecedencia.appendChild(txtCiudad);
        txtCiudad.innerHTML = auto.ciudad;

        let boxlineaDiv = document.createElement("div");
        mainContent.appendChild(boxlineaDiv);
        boxlineaDiv.setAttribute("class", "box-linea-div");
    
        });
       }
    }
});


    
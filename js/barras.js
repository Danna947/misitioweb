let puntuacion5 = document.getElementById("puntuacion5");
let puntuacion4 = document.getElementById("puntuacion4");
let puntuacion3 = document.getElementById("puntuacion3");
let puntuacio2 = document.getElementById("puntuacio2");
let puntuacio1 = document.getElementById("puntuacio1");


let btnEnviar = document.getElementById("btnEnviar");




btnEnviar.addEventListener("click",()=>{    

    let valor = document.getElementById("valor").value;

    if(valor>=1600 && valor<=2000)
    puntuacion5.setAttribute("class","bar-1");

});

// btnEnviar.addEventListener("click", () =>{
//     let valor = document.getElementById("valor").value;
//     if(valor >= 0 && valor <=0.2){
//         star1.setAttribute("class", "fa-regular fa-star");
//         star2.setAttribute("class", "fa-regular fa-star");
//         star3.setAttribute("class", "fa-regular fa-star");
//         star4.setAttribute("class", "fa-regular fa-star");
//         star5.setAttribute("class", "fa-regular fa-star");
//     }





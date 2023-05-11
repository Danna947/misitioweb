 let arrow = document.getElementById("arrowLeft");
 let arrowR= document.getElementById("arrowRigth")
 let imgSea = document.getElementById("imgSea");
 let imgLeopard = document.getElementById("imgLeopard");
 let imgDolphi = document.getElementById("imgDolphi");

 arrow.addEventListener("click", function(){
    if (imgSea.classList.contains("img-sea")) {
      imgSea.classList.remove("img-sea");
      imgSea.classList.add("img-sea-hideen");
      imgLeopard.classList.remove("img-sea-hideen");
      imgLeopard.classList.add("img-leopard-hideen");
    }
});
arrowR.addEventListener("click",function(){
   if (imgSea.classList.contains("img-sea")) {
      imgSea.classList.remove("img-sea");
      imgSea.classList.add("img-sea-hideen-rigth");
      imgLeopard.classList.remove("img-sea-hideen");
      imgLeopard.classList.add("img-leopard-hideen");
    }

});



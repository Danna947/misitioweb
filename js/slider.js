 let arrow = document.getElementById("arrowleft");

 let img = document.getElementById("imghipo");
 let img2= document.getElementById("imgleopard");


 arrow.addEventListener("click", function(){
    img.classList.remove("hipo")
    img2.classList.add("leopard")
 })
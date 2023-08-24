
 let btnMenu = document.getElementById("btnMenu");
 let navMenu = document.getElementById("navMenu");
 let backMenu = document.getElementById("backmenu");

btnMenu.addEventListener("click",function(){
    navMenu.style.right = "0px";
    backMenu.style.display = "block";
});
backMenu.addEventListener("click",function(){
    navMenu.style.right = "-250px";
    backMenu.style.display = "none";
});


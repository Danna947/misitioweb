 let arrowLeft = document.getElementById("arrowLeft");
 let arrowRigth = document.getElementById("arrowRigth");
 let imgSea  = document.getElementById("imgSea");
 let imgLeopard = document.getElementById("imgLeopard");
 let imgNature = document.getElementById("imgNature");


 arrowLeft.addEventListener("click", function(){
   if (imgSea.classList.contains("img-sea")) {
      imgSea.classList.remove("img-sea");
      imgSea.classList.add("img-sea-hideen");
      imgLeopard.classList.add("img-nature");
      imgLeopard.classList.add("img-nature-hideen");
      
   }
    else if(imgLeopard.classList.contains("img-nature")){
          imgLeopard.classList.remove("img-nature");
        imgLeopard.classList.add("img-nature-hideen");
        imgNature.classList.add("img-leopard");
        imgNature.classList.remove("img-leopard-hideen-rigth")
   }
    else if(imgNature.classList.contains("img-nature")){
         imgNature.classList.remove("img-nature");
        imgNature.classList.add("img-nature-hideen");
   
    }
   });
arrowRigth.addEventListener("click", function(){
 if(imgSea.classList.contains("img-sea")){
    imgSea.classList.remove("img-sea");
    imgSea.classList.add("img-sea-hideen");
    imgLeopard.classList.add("img-leopard");
    imgLeopard.classList.remove("img-leopard-hideen-right");

 }
 else if(imgLeopard.classList.contains("img-leopard")){
   imgLeopard.classList.remove("img-leopard");
   imgLeopard.classList.add("img-leopard-hideen-left");
   imgNature.classList.add("img-nature");
   imgNature.classList.remove("img-nature-hideen-right");

 }
});
arrowLeft.addEventListener("click", function(){
 if(imgNature.classList.contains("img-nature")){;
   imgNature.classList.remove("img-nature");
   imgNature.classList.add("img-nature-hideen-right");
   imgLeopard.classList.add("img-leopard");
   imgLeopard.classList.remove("img-leopard-hideen-left")

 }
 else if(imgLeopard.classList.contains("img-leopard")){
   imgLeopard.classList.remove("img-leopard");
   imgLeopard.classList.add("img-leopard-hideen-left");
   imgNature.classList.add("img-nature");
   imgNature.classList.remove("img-nature-hideen-right");

 }

   imgLeopard.classList.add("img-leopard-hideen-right");
   imgSea.classList.add("img-sea");
   imgSea.classList.remove("img-sea-hideen");

 
});
arrowLeft.addEventListener("click", function(){
 if(imgNature.classList.contains("img-nature")){;
   imgNature.classList.remove("img-nature");
   imgNature.classList.add("img-nature-hideen-right");
   imgLeopard.classList.add("img-leopard");
   imgLeopard.classList.remove("img-leopard-hideen-left")

 }
 else if(imgLeopard.classList.contains("img-leopard")){
   imgLeopard.classList.remove("img-leopard");
   imgLeopard.classList.add("img-leopard-hideen-right");
   imgSea.classList.add("img-sea");
   imgSea.classList.remove("img-sea-hideen");

 }
});
arrowRigth.addEventListener("click", function(){
   if (imgNature.classList.contains("img-nature")) {
      imgNature.classList.remove("img-nature");
      imgNature.classList.add("img-nature-hideen-rigth");
      
   }
   
  else if(imgLeopard.classList.contains("img-leopard")){
      imgLeopard.classList.remove("img-leopard");
      imgLeopard.classList.add("img-leopard-hideen");
      imgSea.classList.add("img-sea");
      imgSea.classList.remove("img-sea-hideen-rigth");
   }
   else if(imgSea.classList.contains("img-sea")){
          imgSea.classList.remove("img-sea");
         imgSea.classList.add("img-sea-hideen-rigth");
  }
  
 });

























//  arrowRigth.addEventListener("click", function(){
//    if (imgSea.classList.contains("img-sea")) {
//       imgSea.classList.remove("img-sea");
//       imgSea.classList.add("img-sea-hideen");
//       imgLeopard.classList.add("img-nature");
//       imgLeopard.classList.add("img-nature-hideen");
      
//    }
   //  else if(imgLeopard.classList.contains("img-nature")){
   //        imgLeopard.classList.remove("img-nature");
   //      imgLeopard.classList.add("img-nature-hideen");
   //      imgNature.classList.add("img-leopard");
   //      imgNature.classList.remove("img-leopard-hideen-rigth")
   // }
//     else if(imgNature.classList.contains("img-nature")){
//          imgNature.classList.remove("img-nature");
//         imgNature.classList.add("img-nature-hideen");
   
//     }
// });
// arrowRigth.addEventListener("click", function(){
//    if (imgNature.classList.contains("img-nature")) {
//       imgNature.classList.remove("img-nature");
//       imgNature.classList.add("img-nature-hideen-rigth");
      
//    }
   
//   else if(imgLeopard.classList.contains("img-leopard")){
//       imgLeopard.classList.remove("img-leopard");
//       imgLeopard.classList.add("img-leopard-hideen");
//       imgSea.classList.add("img-sea");
//       imgSea.classList.remove("img-sea-hideen-rigth");
//    }
//    else if(imgSea.classList.contains("img-sea")){
//           imgSea.classList.remove("img-sea");
//          imgSea.classList.add("img-sea-hideen-rigth");
      

//   }
  
   

//  });

























//  arrowRigth.addEventListener("click", function(){
//    if (imgSea.classList.contains("img-sea")) {
//       imgSea.classList.remove("img-sea");
//       imgSea.classList.add("img-sea-hideen");
//       imgLeopard.classList.add("img-nature");
//       imgLeopard.classList.add("img-nature-hideen");
      
//    }
   //  else if(imgLeopard.classList.contains("img-nature")){
   //        imgLeopard.classList.remove("img-nature");
   //      imgLeopard.classList.add("img-nature-hideen");
   //      imgNature.classList.add("img-leopard");
   //      imgNature.classList.remove("img-leopard-hideen-rigth")
   // }
//     else if(imgNature.classList.contains("img-nature")){
//          imgNature.classList.remove("img-nature");
//         imgNature.classList.add("img-nature-hideen");
   
//     }
// });
// arrowRigth.addEventListener("click", function(){
//    if (imgNature.classList.contains("img-nature")) {
//       imgNature.classList.remove("img-nature");
//       imgNature.classList.add("img-nature-hideen-rigth");
      
//    }
   
//   else if(imgLeopard.classList.contains("img-leopard")){
//       imgLeopard.classList.remove("img-leopard");
//       imgLeopard.classList.add("img-leopard-hideen");
//       imgSea.classList.add("img-sea");
//       imgSea.classList.remove("img-sea-hideen-rigth");
//    }
//    else if(imgSea.classList.contains("img-sea")){
//           imgSea.classList.remove("img-sea");
//          imgSea.classList.add("img-sea-hideen-rigth");
      

//   }
  
   

//  });




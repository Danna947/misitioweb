let cont = document.getElementById("imgboxx");
let imgUno = document.getElementById("imgMini1");
let imgDos = document.getElementById("imgMini2");
let imgTres = document.getElementById("imgMini3");
let imgCuatro = document.getElementById("imgMini4");

let boxImgMini1 = document.getElementById("BoximgMini1")
let boxImgMini2 = document.getElementById("BoximgMini2")
let boxImgMini3 = document.getElementById("BoximgMini3")
let boxImgMini4 = document.getElementById("BoximgMini4")

imgUno.addEventListener("click", function () {
    cont.setAttribute("src", "imgdan/image-product-1.jpg")
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.add("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgDos.addEventListener("click", function () {
    cont.setAttribute("src","imgdan/image-product-2.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.add("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgTres.addEventListener("click", function () {
    cont.setAttribute("src", "imgdan/image-product-3.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.add("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgCuatro.addEventListener("click", function () {
    cont.setAttribute("src", "imgdan/image-product-4.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.add("img-mini-a")
})

let btnRestar = document.getElementById("btnRestar");
let cantBox = document.getElementById("cantBox");
let numeroElementos = document.getElementById("numeroElementos");
let btnCantidad = document.getElementById("btnCantidad");
let btnSumar = document.getElementById("btnSumar");

let valorUnitario = 199000;
let valorUniatrioTxt = valorUnitario.toString();
let valorTotal = document.getElementById("valorTotal");
let valorTotalInt = 0;
let precio = document.getElementById("precio");
let total = 0;

// // POO PROGRMACIÓN ORIENTADA A OBJETOS
let click = 0;
// let valorUnitarioPeso= new Intl.NumberFormat(). format(valorUnitario);
// alert("$" + valorUnitarioPeso)

btnSumar.addEventListener("click", function () {

    if (click == 10) {
        click = 10;
    } else {
        click = click + 1
        numeroElementos.innerHTML = click
        total = total + 125000;
        sep = new Intl.NumberFormat().format(total)
        precio.innerHTML = "$" + sep

    }
})
btnRestar.addEventListener("click", function () {
    if (click == 0) {
        click = 0;

    } else {
        click = click - 1
        numeroElementos.innerHTML = click
        total = total - 125000;
        sep = new Intl.NumberFormat().format(total)
        precio.innerHTML = "$" + sep
    }
});
// ligth-box
let box=document.getElementById('lightHidden')
cont.addEventListener('click', function () {
    box.classList.remove('light-hidden');
    box.classList.add('div-hidden');

});

let newimg = document.getElementById("imgbox");
let new1 = document.getElementById("imgNewMini1");
let new2 = document.getElementById("imgNewMini2");
let new3 = document.getElementById("imgNewMini3");
let new4 = document.getElementById("imgNewMini4");

let img1 = document.getElementById("BoxNew1");
let img2 = document.getElementById("BoxNew2");
let img3 = document.getElementById("BoxNew3");
let img4 = document.getElementById("BoxNew4");

img1.addEventListener ("click", function () {
    newimg.setAttribute("src", "imgdan/image-product-1.jpg")
    img1.classList.add("box-img-mini");
    img2.classList.remove("box-img-mini");
    img3.classList.remove("box-img-mini");
    img4.classList.remove("box-img-mini");
    new2.classList.remove("img-mini-a")
    new1.classList.add("img-mini-a")
    new3.classList.remove("img-mini-a")
    new4.classList.remove("img-mini-a")

});
img2.addEventListener ("click", function() {
    newimg.setAttribute("src", "imgdan/image-product-2.jpg")
    img2.classList.add("box-img-mini");
    img1.classList.remove("box-img-mini");
    img3.classList.remove("box-img-mini");
    img4.classList.remove("box-img-mini");
});
img3.addEventListener ("click", function() {
    newimg.setAttribute("src", "imgdan/image-product-3.jpg")
    img3.classList.add("box-img-mini");
    img1.classList.remove("box-img-mini");
    img2.classList.remove("box-img-mini");
    img4.classList.remove("box-img-mini");
});
img4.addEventListener ("click", function() {
    newimg.setAttribute("src", "imgdan/image-product-4.jpg")
    img4.classList.add("box-img-mini");
    img2.classList.remove("box-img-mini");
    img3.classList.remove("box-img-mini");
    img1.classList.remove("box-img-mini");
});
let tras = document.getElementById("tras");
tras.addEventListener("click",function(){
    box.classList.add("light-hidden")
    box.classList.remove("div-hidden")

});

let btnlcambiar = document.getElementById("btnRestar");    






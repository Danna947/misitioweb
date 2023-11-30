function llenarBarras() {
    let puntuacion5 = document.getElementById("puntuacion5").value;
    let puntuacion4 = document.getElementById("puntuacion4").value;
    let puntuacion3 = document.getElementById("puntuacion3").value;
    let puntuacion2 = document.getElementById("puntuacion2").value;
    let puntuacion1 = document.getElementById("puntuacion1").value;

    let barras = document.querySelectorAll("#starBars progress");

    barras[0].value = puntuacion5;
    barras[1].value = puntuacion4;
    barras[2].value = puntuacion3;
    barras[3].value = puntuacion2;
    barras[4].value = puntuacion1;
  }






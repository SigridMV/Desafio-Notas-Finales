//notas HTML
var nota1Html = document.getElementById("nota1Html");
var nota2Html = document.getElementById("nota2Html");
var nota3Html = document.getElementById("nota3Html");

//notas CSS
var nota1Css = document.getElementById("nota1Css");
var nota2Css = document.getElementById("nota2Css");
var nota3Css = document.getElementById("nota3Css");

//notas JavaScript
var nota1JavaScript = document.getElementById("nota1JavaScript");
var nota2JavaScript = document.getElementById("nota2JavaScript");
var nota3JavaScript = document.getElementById("nota3JavaScript");

//ingreso notas HTML
nota1Html.innerHTML = prompt("Ingrese nota 1 [HTML]");
nota2Html.innerHTML = prompt("Ingrese nota 2 [HTML]");
nota3Html.innerHTML = prompt("Ingrese nota 3 [HTML]");

//ingreso notas CSS
nota1Css.innerHTML = prompt("Ingrese nota 1 [CSS]");
nota2Css.innerHTML = prompt("Ingrese nota 2 [CSS]");
nota3Css.innerHTML = prompt("Ingrese nota 3 [CSS]");

//ingreso notas JavaScript
nota1JavaScript.innerHTML = prompt("Ingrese nota 1 [JavaScript]");
nota2JavaScript.innerHTML = prompt("Ingrese nota 2 [JavaScript]");
nota3JavaScript.innerHTML = prompt("Ingrese nota 3 [JavaScript]");

// calculos de los promedios
var promedioHtml = (parseFloat(nota1Html.innerHTML) + parseFloat(nota2Html.innerHTML) + parseFloat(nota3Html.innerHTML)) / 3;
var promedioCss = (parseFloat(nota1Css.innerHTML) + parseFloat(nota2Css.innerHTML) + parseFloat(nota3Css.innerHTML)) / 3;
var promedioJavaScript = (parseFloat(nota1JavaScript.innerHTML) + parseFloat(nota2JavaScript.innerHTML) + parseFloat(nota3JavaScript.innerHTML)) / 3;

//promedio con 2 decimales
document.getElementById("promedioHtml").innerHTML = promedioHtml.toFixed(2);
document.getElementById("promedioCss").innerHTML = promedioCss.toFixed(2);
document.getElementById("promedioJavaScript").innerHTML = promedioJavaScript.toFixed(2);
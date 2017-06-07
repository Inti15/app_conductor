console.log("splash");
function cargarInicio() {
  setTimeout(function () {
    location.href = "views/inicio.html";
  }, 2000);
}

$(document).ready(cargarInicio);

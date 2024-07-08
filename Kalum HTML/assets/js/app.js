$(document).ready(function () {
    $(".carousel").carousel({
        interval: 1500
    });
    $(".btn-tool").tooltip();
    $(".btn-top").popover();

    var contador = 0;
    setInterval(function () {

        contador = contador + 1;
        if (contador <= 100) {

            var barra = document.querySelector("#barra-progreso");
            barra.style.width = contador + '%';
            barra.innerHTML = contador + '%';
        }

    }, 50);
});
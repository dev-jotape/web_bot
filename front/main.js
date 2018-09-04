var contAnt = 0;
var parAnt = 0;

function Animate() {
    document.getElementById('footer').className += ' animated fadeInUp';
    var x = document.getElementsByClassName("wc-console");
    x[0].className += ' animated fadeInUp';
}
window.onload = Animate;

var recursiva = function () {
    var paragrafos = document.getElementsByTagName('p');
    var cont = 0;
    if (paragrafos.length > parAnt) {
        for (let i = 0; i < paragrafos.length; i++) {
            var contemTexto = paragrafos[i].textContent.indexOf("Digite") > -1 ? true : false;
            if (contemTexto) cont++;
        }
        if (contAnt < cont) {
            // document.getElementById('footer').style.display = "block";
            // var x = document.getElementsByClassName("wc-console");
            // x[0].style.display = 'block';

            var x = document.getElementsByClassName("wc-console");
            x[0].classList.remove('fadeOutDown');
            x[0].className += ' fadeInUp';

            var y = document.getElementById('footer');
            y.classList.remove("fadeOutDown");
            y.className += ' fadeInUp';

        } else {
            // document.getElementById('footer').style.display = "none";
            // var x = document.getElementsByClassName("wc-console");
            // x[0].style.display = "none";
            var x = document.getElementsByClassName("wc-console");
            x[0].classList.remove('fadeInUp');
            x[0].className += ' animated fadeOutDown';

            var y = document.getElementById('footer');
            y.classList.remove("fadeInUp");
            y.className += ' animated fadeOutDown';
        }
        contAnt = cont;
        parAnt = paragrafos.length;
    }

    setTimeout(recursiva,1000);
}
recursiva();
var elems = document.getElementsByClassName("progressbar");

for (let i = 0; i < elems.length; i++) {
    var elem = elems[i].firstChild;
    var percentage = elem.innerHTML;
    var bar = elems[i].lastChild;

    bar.style.width = percentage + '%';
}

var prueba = document.getElementsByClassName("nombre")[0];
prueba.innerHTML = "Funciona";
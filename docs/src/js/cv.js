const elems = document.getElementsByClassName("progressbar");

for (let i = 0; i < 6; i++) {
    var elem = elems[i].firstChild;
    console.log(elem);
    var percentage = elem.innerHTML;
    console.log(percentage);
    var bar = elems[i].lastChild;
    console.log(bar);

    bar.style.width = percentage + "%";
}

var prueba = document.getElementsByClassName("nombre")[0];
const elems = document.getElementsByClassName("progressbar");

for (let i = 0; i < elems.length; i++) {
    var elem = elems[i].getElementsByClassName("value")[0];
    var percentage = elem.firstChild;
    var bar = elems[i].getElementsByClassName("bar")[0];
    bar.style.width = percentage.nodeValue + "%";
}
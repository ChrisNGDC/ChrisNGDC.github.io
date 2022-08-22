const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); showcase.classList.toggle('active'); })

const elems = document.getElementsByClassName("progress-line");

for (let i = 0; i < elems.length; i++) {
    var elem = elems[i].getElementsByClassName("value")[0];
    var percentage = elem.firstChild;
    var bar = elems[i].getElementsByTagName("span")[0];
    bar.style.width = percentage.nodeValue + "%";
}
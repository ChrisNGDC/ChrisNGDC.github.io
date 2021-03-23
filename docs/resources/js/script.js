const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => { menuToggle.classList.toggle('active'); showcase.classList.toggle('active'); })

function submitMessaje() {
    var name = document.getElementsByName("Nombre").value;
    var mail = document.getElementsByName("Mail").value;
    var asunto = document.getElementsByName("Asunto").value;
    var mensaje = document.getElementsByName("Mensaje").value;

    var file = generateTxtFile(name)
    file.style.display = 'inline-block';
}
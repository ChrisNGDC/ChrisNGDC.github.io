// Generacion de lista de habilidades

const abilitiesNamesPercentage = [["HTML",90], ["CSS",85], ["JavaScript",95], ["NodeJS",70], ["MySQL",75], ["C#",67], ["C++",82], ["PHP",78], ["Python",93], ["Testing",69]];
const skills = document.getElementsByClassName("skills")[0];
const filas = Math.floor(abilitiesNamesPercentage.length / 5);
var habilidades = "";
var cant = 0;
for (let i = 0; i < filas; i++) {
    habilidades += '<div class="skill-bars">';
    for (let j = 0; j < 5; j++) {
        habilidades += '<div class="bar"><div class="info"><span>' + abilitiesNamesPercentage[cant][0] + '</span></div><div class="progress-line"><span></span><div class="value">' + abilitiesNamesPercentage[cant][1] + '</div></div></div>';
        cant++;
    }
    habilidades += '</div>';
}

skills.innerHTML = habilidades;

// Llenado de barras de habilidades

const elems = document.getElementsByClassName("progress-line");

for (let i = 0; i < elems.length; i++) {
    var bar = elems[i].getElementsByTagName("span")[0];
    
    //Forma con numeros por HTML
    //  var elem = elems[i].getElementsByClassName("value")[0];
    //  var percentage = elem.firstChild;
    //  bar.style.width = percentage.nodeValue + "%";
    
    //Forma aleatoria
        bar.style.width = Math.round(Math.random() * 100) + "%";
}
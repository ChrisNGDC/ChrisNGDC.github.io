// Generacion de lista de habilidades

const abilitiesNamesPercentage = [
                                ["HTML",'<i class="fa-brands fa-html5" title="HTML5"></i>',90],
                                ["CSS",'<i class="fa-brands fa-css3-alt" title="CSS3"></i>',85],
                                ["JavaScript",'<i class="fa-brands fa-js" title="JavaScript"></i>',95],
                                ["NodeJS",'<i class="fa-brands fa-node-js" title="NodeJS"></i>',70],
                                ["MySQL",'<i class="fa-solid fa-database" title="MySQL"></i>',75],
                                ["C#",'<i class="fa-brands fa-c" title="C#"></i><i class="fa-solid fa-hashtag" title="C#"></i>',67],
                                ["C++",'<i class="fa-brands fa-c" title="C++"></i><i class="fa-solid fa-plus" title="C++"></i><i class="fa-solid fa-plus" title="C++"></i>',82],
                                ["PHP",'<i class="fa-brands fa-php" title="PHP"></i>',78],
                                ["Python",'<i class="fa-brands fa-python" title="Python"></i>',93],
                                ["Testing",'<i class="fa-solid fa-code" title="Testing"></i>',69]];
const skills = document.getElementsByClassName("skills")[0];
const filas = Math.floor(abilitiesNamesPercentage.length / 5);
var habilidades = "";
var cant = 0;
for (let i = 0; i < filas; i++) {
    habilidades += '<div class="skill-bars">';
    for (let j = 0; j < 5; j++) {
        habilidades += '<div class="bar"><div class="info">' + abilitiesNamesPercentage[cant][1] + '</div><div class="progress-line"><span></span><div class="value">' + abilitiesNamesPercentage[cant][2] + '</div></div></div>';
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
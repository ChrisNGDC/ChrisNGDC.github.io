<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Temas</title>
  </head>
  <body>
    <h2>Temas:</h2>

    <ul>
      <li>PHP FullSTack Comisión #2163</li>
      <li>Cambios de horarios, cursos y problemas de asistencia al Tutor/a Camila Regidor camila.regidor@bue.edu.ar</li>
      <li>Validar la documentación requerida (título secundario o universitario y dni): Formulario Google</li>
      <li> Clases:
        <ul>
          <li>Virtuales sincrónicas los martes y viernes de 10 a 11.30 horas</li>
          <li>Inicio de clases veremos las dudas: prácticas, teóricas</li>
          <li>Contenidos de la clase serán grabadas el video y el chat, luego les envío el link para acceder junto a los archivos trabajados: Google Drive</li>
        </ul>
      </li>
      <li> Discord:
        <ul>
          <li>Link: https://discord.gg/aaWDE8xwGB</li>
          <li>Para registrarse: nombre y apellido y una foto suya</li>
        </ul>
      </li>
      <li> Curso:
        <ul>
          <li>Nombre: PHP FullStack</li>
          <li>Meta final: Hacer un sitio CRUD desde front-end al back-end</li>
          <li>Objetivos: Obtener conocimientos y habilidades para desarrollar un aplicación web</li>
        </ul>
      </li>
      <li> Metodología de trabajo:
        <ul>
          <li>Horario puntual: 10 hs</li>
          <li>Reuniones sincrónicas virtuales</li>
          <li>Dudas en clase</li>
          <li>Los profes No revisamos código</li>
          <li>Asistencia del 65%:
            <ul>
              <li>presentes al finalizar clases</li>
              <li>nombre y apellido, no pseudonimo</li>
              <li>foto</li>
            </ul>
          </li>
          <li>Asistencia del 65%:
            <ul>
              <li>presentes al finalizar clases</li>
              <li>nombre y apellido, no pseudonimo</li>
              <li>foto</li>
            </ul>
          </li>
          <li>Aula Virtual:
            <ul>
              <li>Link: https://aulasvirtuales.bue.edu.ar/</li>
              <li>Bienvenida</li>
              <li>Tour del AV: menú izquierda, centro</li>
              <li>Estructura de cada Tema: teórico, multimedia, actividades</li>
              <li>Actividades obligatorias y ejercicios muliple choice
                <ul>
                  <li>Actividades obligatorias (Práctica): se sugiere hacerla al finalizar la unidad, fecha límite es de 3 semanas, sigue abierta hasta finalizar el curso</li>
                  <li>Ejercicios obligatorios (Multiple Choice): 5 preguntas, fecha límite de 3 semanas, luego se cierra</li>
                  <li>Entregas de Actividades en http://cursophp.foxit.com.ar/comision2163/Marilen_Montero/Html-unidad1/primerPrograma.html (Ejemplo)</li>
                </ul>
              </li>
              <li>Temas en AV: html, css, boostrap, etc.</li>
              <li>Trabajo integrador final (Práctica) y exámen final (Multiple Choice)</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <a href="http://localhost/PHP-CodoACodo/temas.php?color=black"><button>Night Mode</button></a>
    <a href="http://localhost/PHP-CodoACodo/temas.php?color=white"><button>Light Mode</button></a>

  </body>
</html>

<?php

$color = "white";

if (isset($_GET["color"])) {
  $color = $_GET["color"];
}

if ($color == "black") {
 echo '<body style="background-color:black; color:white">';
} else {
 echo '<body style="background-color:white; color:black">';
}

?>

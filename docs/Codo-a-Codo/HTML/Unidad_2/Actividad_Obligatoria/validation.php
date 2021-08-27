<?php

    $numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    $usuario = $_POST['usuario'];
    $dni = $_POST['dni'];
    $clave = $_POST['clave'];

    // DNI => [Usuario, Clave]
    $usuarios = [
        '39321754' => ['ChrisG', 'clave123'],
        '45712393' => ['Nicolas', '123clave'],
    ];

    // Validate
    function validateDNI() {
        global $dni, $numbers, $usuarios;
        if (isset($usuarios[$dni])) {
            for ($i=0; $i < strlen($dni); $i++) { 
                if (!in_array($dni[$i], $numbers)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function validateClave() {
        global $dni, $clave, $usuarios;
        return $usuarios[$dni][1] === $clave;
    }

    function validateUsuario() {
        global $dni, $usuario, $usuarios;
        return $usuarios[$dni][0] === $usuario;
    }

    // Data
    if (!validateDNI()) {
        echo 'DNI incorrecto'.'</br>';
    } else if (!validateUsuario()) {
        echo 'Usuario incorrecto'.'</br>';
    } else if (!validateClave()) {
        echo 'Clave incorrecta'.'</br>';
    } else {
        echo 'Bienvenido '.$usuario.'</br>';
        echo 'Tu DNI es: '.$dni.'</br>';
        echo 'Tu clave es: '.$clave.'</br>';
    }
?>
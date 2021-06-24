var input = document.getElementById("msj");
var output = "";
var output_cod = document.getElementById("codificado");
var output_error = document.getElementById("error");
var output_bit = document.getElementById("bit");
var output_cod_og = document.getElementById("codificado-og");
var output_dcod_og = document.getElementById("decodificado-og");
var final = false;
var esperandoParidad = '5';
let click = false;


var botons =
{
    option : [
    boton1 = document.getElementById("btn-1"),
    boton0 = document.getElementById("btn-0"),
    ],

    prepareButtons()
    {
        let i;
        for(i = 0; i < this.option.length; i++)
            botons.option[i] = document.addEventListener("click", inputNumber)
    }
}

var operators =
{
    option: [
        botonCod = document.getElementById("btn-c"),
        botonDCod = document.getElementById("btn-dc"),
        ],

    prepareOperators()
    {
        let i;
        for(i = 0; i < this.option.length; i++)
            operators.option[i] = document.addEventListener("click", operator)
    }
}

var clsBtn = document.getElementById("btn-cls");
var delBtn = document.getElementById("btn-del");

botons.prepareButtons();
operators.prepareOperators();
input.innerText = 0;

function reverseString(string) {
    return string.split("").reverse().join("");
}

function inputNumber(event)
{
   if(final)
   {
       clear_screen();
       final = false;
   }
    if(parseInt(event.target.defaultValue) >= 0 || parseInt(event.target.defaultValue) <= 1)
    {
        output += parseInt(event.target.defaultValue);
        input.innerText = output;
    }
}

function clear_screen() {
    output = "";
    input.innerText = 0;
    output_cod.innerText = '';
    output_error.innerText = '';
    output_bit.innerText = '';
    output_cod_og.innerText = '';
    output_dcod_og.innerText = '';
}

function operator(event)
{
    if(event.target.defaultValue == "Codificar")
    {
        output_cod.innerText = codificar(crearEspacioParaCodificar(output));
        final= true;
    }
    else if(event.target.defaultValue == "De-Codificar")
    {
        output_bit.innerText = errorEnBit(output);
        output_error.innerText = (parseInt(output_bit.innerText) > 0) ? "Yes": "No";
        output_cod_og.innerText = codificadoCorrecto(output, parseInt(output_bit.innerText));
        output_dcod_og.innerText = deCodificadoCorrecto(output_cod_og.innerText);
        final= true;
    }
    else if(event.target.defaultValue == "C")
    {
        clear_screen();
    }
    else if(event.target.defaultValue == "D")
    {
        if(output.length == 1)
        {
            input.innerText = 0;
            output = 0;
        } else
        {
            output = output.slice(0, output.length - 1);
            input.innerText = output;
        }
    }
}

var pos_p = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

function crearEspacioParaCodificar(output)
{
    var cant_p = 0;
    var res = "";
    var pos = 1;
    var i = 0;
    while(2 ** cant_p < output.length)
    {
        cant_p++
    }
    while(i < output.length)
    {
        if(pos_p.includes(pos))
        {
            res += esperandoParidad;
            pos++;
        }
        else
        {
            res += output[i];
            i++;
            pos++;
        }
    }
    return res;
}

function calcularParidad(codigo, inicio)
{
    valor = 0;
    let k = inicio;
    while(k < codigo.length)
    {
        let z = k;
        let j = inicio + 1;
        while(j > 0 && z < codigo.length)
        {
            if(codigo[z] == '1' || codigo[z] == '0')
            {
                valor += parseInt(codigo[z]);
            }
            j--;
            z++;
        }
        k += 2 * (inicio + 1);
    }
    return valor % 2;
}

function codificar(codigo)
{
    var res = "";
    for (let i = 0; i < codigo.length; i++) 
    {
        if(codigo[i] == esperandoParidad)
        {
            res += calcularParidad(codigo, i);
        }
        else
        {
            res += codigo[i];
        }
    }
    return res;
}

function binarioADecimal(binario)
{
    var res = 0;
    for (let i = 0; i < binario.length; i++) {
        res += binario[i] * (2 ** i);
    }
    return res;
}

function errorEnBit(codigo)
{
    var res = "";
    var i = 0;
    var k = 0;
    while(i < codigo.length)
    {
        res += calcularParidad(codigo, i);
        i += (2 ** k);
        k++;
    }
    return binarioADecimal(res);
}

function cambiar(caracter, opciones)
{
    var res;
    switch(caracter)
    {
        case opciones[0]:
            res = opciones[1];
            break;
        case opciones[1]:
            res = opciones[0];
            break;
        default:
            break;
    }
    return res;
}

function cambiarDigito(codigo, bit_error, opciones)
{
    var replace = cambiar(codigo[bit_error], opciones);
    return codigo.slice(0, bit_error) + replace + codigo.slice(bit_error + 1)
}

function codificadoCorrecto(codigo, bit_error)
{
    var res;
    if(bit_error == 0)
    {
        res = codigo;
    }
    else 
    {
        res = cambiarDigito(codigo, bit_error - 1, ['0', '1']);
    }
    return res;
}

function deCodificadoCorrecto(codigo)
{
    var res = "";
    var i = 0;
    while(i < codigo.length)
    {
        if(!pos_p.includes(i + 1))
        {
            res += codigo[i];
        }
        i++
    }
    return res;
}
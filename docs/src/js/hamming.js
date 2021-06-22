var input = document.getElementById("msj");
var output = "";
var output_cod = document.getElementById("codificado");
var output_error = document.getElementById("error");
var output_bit = document.getElementById("bit");
var output_cod_og = document.getElementById("codificado-og");
var output_dcod_og = document.getElementById("decodificado-og");
var final = false;
let click = false


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
        output_cod.innerText = codificar(output);
        final= true;
    }
    else if(event.target.defaultValue == "De-Codificar")
    {
        output_bit.innerText = errorEnBit(output);
        output_error.innerText = (output_bit > 0) ? "Yes": "No";
        output_cod_og.innerText = codificadoCorrecto(output, output_bit);
        output_dcod_og.innerText = deCodificadoCorrecto(output_cod_og);
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

function codificar(output)
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
            res += '5';
            pos++;
        }
        else
        {
            res += output[i];
            i++;
            pos++;
        }
    }
    return codificarP(res);
}

function codificarP(codigo)
{
    var valor;
    var res = "";
    for (let i = 0; i < codigo.length; i++) 
    {
        if(codigo[i] == 5)
        {
            valor = -5;
            let k = i;
            while(k < codigo.length)
            {
                let z = k;
                let j = i + 1;
                while(j > 0 && z < codigo.length)
                {
                    console.log(codigo[z]);
                    valor += parseInt(codigo[z]);
                    console.log(valor);
                    j--;
                    z++;
                }
                k += 2 * (i + 1);
            }
            console.log(valor);
            res += valor % 2;
        }
        else
        {
            res += codigo[i];
        }
    }
    return res;
}

function errorEnBit(output)
{

}

function codificadoCorrecto(output, output_bit)
{

}

function deCodificadoCorrecto(output_cod_og)
{

}
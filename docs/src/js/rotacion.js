var input = document.getElementById("msj");
var output = "";

var output_shr = document.getElementById("shr");
var output_shl = document.getElementById("shl");
var output_sar = document.getElementById("sar");
var output_sal = document.getElementById("sal");

var output_ror = document.getElementById("ror");
var output_rol = document.getElementById("rol");
var output_rcr = document.getElementById("rcr");
var output_rcl = document.getElementById("rcl");

var final = false;
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
        botonRot = document.getElementById("btn-r"),
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
   if(final && (parseInt(event.target.defaultValue) >= 0 || parseInt(event.target.defaultValue) <= 1))
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
    output_shr.innerText = "";
    output_shl.innerText = "";
    output_sar.innerText = "";
    output_sal.innerText = "";

    output_ror.innerText = "";
    output_rol.innerText = "";
    output_rcr.innerText = "";
    output_rcl.innerText = "";
}

function operator(event)
{
    if(event.target.defaultValue == "Rotaciones")
    {
        output_shr.innerText = "SHR: " + shr(output);
        output_shl.innerText = "SHL: " + shl(output);
        output_sal.innerText = "SAL: " + shl(output);
        output_sar.innerText = "SAR: " + sar(output);
        

        output_ror.innerText = "ROR: " + ror(output);
        output_rol.innerText = "ROL: " + rol(output);
        output_rcr.innerText = "RCR: " + rcr(output);
        output_rcl.innerText = "RCL: " + rcl(output);
        final= true;
    }
    else if(event.target.defaultValue == "C")
    {
        clear_screen();
    }
    else if(event.target.defaultValue == "D")
    {
        if(output.length <= 1)
        {
            input.innerText = 0;
            output = '';
        } else
        {
            output = output.slice(0, output.length - 1);
            input.innerText = output;
        }
    }
}

function rol(numero)
{
    var res = "";
    let i = 1;
    while (i < numero.length)
    {
        res += numero[i];
        i += 1;
    }
    res += numero[1];
    return res;
}
    


function ultimo(numero)
{
    return numero[numero.length - 1];
}


function ror(numero){
    var res = "";
    let i = 1;
    res += ultimo(numero);
    res += ultimo(numero);
    while (i < numero.length - 1)
    {
        res += numero[i];
        i += 1;
    }
    return res;
}
    


function rcl(numero){
    var res = "";
    let i = 1;
    while (i < numero.length)
    {
        res += numero[i];
        i += 1;
    }
    res += numero[0];
    return res;
}
    


function rcr(numero){
    var res = "";
    let i = 0;
    res += ultimo(numero);
    while (i < numero.length - 1)
    {
        res += numero[i];
        i += 1;
    }
    return res;
}



function shr(numero)
{
    var res = "";
    let i = 0;
    res += "0";
    while (i < numero.length - 1)
    {
        res += numero[i];
        i += 1;
    }
    return res;
}

function shl(numero)
{
    var res = "";
    let i = 1;
    while (i < numero.length)
    {
        res += numero[i];
        i += 1;
    }
    res += "0";
    return res;
}

function sar(numero)
{
    var res = "";
    let i = 1;
    res += ultimo(numero);
    res += numero[1]
    while (i < numero.length - 1)
    {
        res += numero[i];
        i += 1;
    }
    return res;
}
var input = document.getElementById("text");
var output = "";
var output_res = document.getElementById("text-res");
let click = false

/* operation */
var equal = false;


var botons =
{
    option : [
    boton1 = document.getElementById("btn-1"),
    boton2 = document.getElementById("btn-2"),
    boton3 = document.getElementById("btn-3"),
    boton4 = document.getElementById("btn-4"),
    boton5 = document.getElementById("btn-5"),
    boton6 = document.getElementById("btn-6"),
    boton7 = document.getElementById("btn-7"),
    boton8 = document.getElementById("btn-8"),
    boton9 = document.getElementById("btn-9"),
    boton0 = document.getElementById("btn-0")
    ],

    prepareButtons()
    {
        let i;
        for(i = 0; i < 10; i++)
            botons.option[i] = document.addEventListener("click", inputNumber)
    }
}

var operators =
{
    option: [
        botonEqual = document.getElementById("btn-="),
        botonAbrirParentesis = document.getElementById("btn-OP"),
        botonCerrarParentesis = document.getElementById("btn-CP"),
        botonMenos = document.getElementById("btn--"),
        botonMas = document.getElementById("btn-+"),
        botonPor = document.getElementById("btn-x"),
        botonDiv = document.getElementById("btn-/")
        ],

    prepareOperators()
    {
        let i;
        for(i = 0; i < 5; i++)
            operators.option[i] = document.addEventListener("click", operator)
    }
}

var clsBtn = document.getElementById("btn-cls")

botons.prepareButtons();
operators.prepareOperators();
input.innerText = 0;


function inputNumber(event)
{
   if(equal)
   {
       clear_screen();
       equal = false;
   }
   if(parseInt(event.target.defaultValue) >= 0 || parseInt(event.target.defaultValue) <= 9)
    {
        output += parseInt(event.target.defaultValue);
        input.innerText = output;
    }
}

function clear_screen() {
    output = "";
    input.innerText = 0;
    output_res.innerText = '';
}

var operadores = ['+', '-', '*', '/', '(', ')']

function operator(event)
{
    if(operadores.includes(event.target.defaultValue))
    {
        op = true;
        input.innerText = output + event.target.defaultValue;
        output += event.target.defaultValue;
    }
    else if(event.target.defaultValue == "=")
    {
        output_res.innerText = calculate(output);
        equal = true;
    }
    else if(event.target.defaultValue == "C")
    {
        clear_screen();
    }
}

function operar(numero1, numero2, operacion)
{
    let res = 0;
    switch(operacion)
    {
        case '+':
            res = numero1 + numero2;
            break;
        case '-':
            res = numero1 - numero2;
            break;
        case '*':
            res = numero1 * numero2;
            break;
        case '/':
            res = numero1 / numero2;
            break;
        default:
            res = numero1;
            break;
    }
    return res;
}

function calculate(ecuacion)
{
    var numero = "0";
    var i = 0;
    var op;
    var long = ecuacion.length;
    if(i < long)
    {
        while(i < long && !operadores.includes(ecuacion[i]))
        {
            numero += ecuacion[i];
            i++;
        }
        if(i < long)
        {
            op = ecuacion[i];
            if(op == '(')
            {
                i = ecuacion.indexOf(')');
                numero += calculate(ecuacion.slice(1, i));
                if(long == i + 1)
                {
                    op = "nada";
                }
                else
                {
                    op = ecuacion[i + 1];
                    i++;
                }
            }
            return operar(parseFloat(numero), calculate(ecuacion.slice(i + 1)), op);
        }
    }
    return parseFloat(numero);
}

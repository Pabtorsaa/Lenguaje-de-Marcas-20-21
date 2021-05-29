function calculadora(operacion, numero1, numero2) {
    //alert(operacion);

    //var numero1 = document.getElementById("num1").value;
    //var numero2 = document.getElementById("num2").value;

    var res = 0;

    if (operacion == 'suma') {
        res = eval(numero1) + eval(numero2);
    } else if (operacion == 'resta') {
        res = eval(numero1) - eval(numero2);
    } else if (operacion == 'mult') {
        res = eval(numero1) * eval(numero2);
    } else {
        res = eval(numero1) / eval(numero2);
    }

    document.getElementById("resultado").value = res;
}

var n1 = "";
var op = "";
var n2 = "";

function mostrarN1(numero1) {
    document.getElementById("pantalla").innerHTML = numero1.value;
    n1 = numero1.value;
}

function escribir(operacion) {
    document.getElementById("pantalla").innerHTML = n1 + operacion;
    op = operacion;
    document.getElementById("num22").focus();
}

function mostrarN2(numero2) {
    document.getElementById("pantalla").innerHTML = n1 + op + numero2.value;    
    n2 = numero2.value;    
}

function calcular() {
    document.getElementById("pantalla").innerHTML = eval(n1 + op + n2);
    document.getElementById("num11").value = "";
    document.getElementById("num22").value = "";
    document.getElementById("num11").focus();
}
function mostrarTablas(numero) {
    var resultado = document.getElementById("resultadoTabla");
    var texto = "<h4>Tabla del " + numero + "</h4>";
    for (let i = 1; i <= 10; i++){        
        texto = texto + numero + " x " + i + " = " + (numero*i) + "<br/>";           
    }
    for (let i = 1; i <= 10; i++) {
        texto = texto + "<h4>Tabla del " + i + "</h4>";
        for (let j = 1; j <= 10; j++) {
            texto = texto + i + " x " + j + " = " + (i*j) + "<br/>";                                   
        }        
    }

    resultado.innerHTML = texto;
}


function comprobarPrimo() {
    var numP = document.getElementById("numP").value;

    var resultado = document.getElementById("resultadoPrimo");
    if (esPrimo(numP)) {
        resultado.innerHTML = "<p>" + numP + " es Primo</p>";
    } else {
        resultado.innerHTML = "<p>" + numP + " no es Primo</p>";
    }
}

function esPrimo(numP) {
    for (let i = 2; i < numP; i++) {
        if (numP%i == 0) {
            return false;
        }
    }
    return true;
}

function init() {
    var nombre = prompt("Usuario:");

    var contenedor = document.getElementById("container");

    if (nombre == "yo") {
        contenedor.className = "usuario";
    } else if (nombre == "tu") {
        contenedor.className = "parner";
    } else {
        contenedor.className = "negro";
    }
}

//window.addEventListener("load", init, false);

function cambiarFondo() {
    var rojo = document.getElementById("rojo").value;
    var verde = document.getElementById("verde").value;
    var azul = document.getElementById("azul").value;

    document.getElementById("container").style = "background-color:" + "#" + rojo + verde + azul;
} 
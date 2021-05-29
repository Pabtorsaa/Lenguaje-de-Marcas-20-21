function init() {
    //alert(document.getElementById("Usuario").value);
    //var usu = prompt("Introduzca Usuario");
    //document.getElementById("Usuario").value = usu;

    /*var lista = document.getElementsByName("Valores");
    for (let i = 0; i < lista.length; i++) {
        alert(lista[i].value);
        
    }*/

    document.getElementsByTagName('p')[0].innerHTML = "Primer Párrafo";
    //document.getElementsByTagName('p')[0].onclick = mostrarAlerta;

    document.getElementsByClassName("clase")[0].style = "color: red";
    document.querySelector("#principal p:first-child").onclick = mostrarAlerta;

    var coleccion = document.querySelectorAll("#principal p");
    var coleccion = document.getElementById("principal").querySelectorAll('p');  
    for (let i = 0; i < coleccion.length; i++) {
        coleccion[i].innerHTML = "Párrafo " + i;
        
    }

}

function ocultarCapa() {
    document.getElementById("principal").style = "display: none";
}

function mostrarCapa() {
    document.getElementById("principal").style = "display: visibility";      
}

function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "<b>Texto</b>";
    document.getElementById("texto").style = "color: blue";
    document.getElementById("texto").className = "borde";
}


function mostrarAlerta() {
    alert('Aviso');
}

window.addEventListener("load",init, false);
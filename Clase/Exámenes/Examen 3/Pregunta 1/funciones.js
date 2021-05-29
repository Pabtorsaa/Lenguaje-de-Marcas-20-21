function validarFormulario() {
    var cadenaError = "";

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || !nombre.value.length >= 5 &&  !nombre.value.length <= 30) {
        cadenaError = "<li>Error Nombre: campo vacío</li>";
    }
    
    var email = document.getElementById("email"); 
    if (email.value == null || email.value.length == 0) {
        cadenaError = cadenaError + "<li>Error email: campo vacío</li>";
    } else if (!email.value.endsWith("@iestriana.com")) {
        cadenaError = cadenaError + "<li>No tiene la terminación correcta</li>";
    }

    var edad = document.getElementById("edad");
    if (edad.value == null || !edad.value >= 100 && !edad.value <= 18) {
        cadenaError = cadenaError + "<li>No está en el rango adecuado</li>";
    }

    var web = document.getElementById("web");
    if (web.value == null || !web.value.startsWith("https://")) {
        cadenaError = cadenaError + "<li>No es un dominio seguro</li>"
    }

    if (cadenaError.length == 0) {
        return true;
    } else {
        mostrarError(cadenaError);
        return false;
    }
}

function mostrarError(cadenaError) {
    document.getElementById("errores").innerHTML = cadenaError;
    document.getElementById("capaerrores").style.visibility = "visible";
}
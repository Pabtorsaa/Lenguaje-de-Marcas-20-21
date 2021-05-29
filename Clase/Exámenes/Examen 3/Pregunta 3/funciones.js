function calcularTotal() {
    var viaje = document.getElementById("viaje").value;
    var distancia = document.getElementById("distancia").value;
    var gasolina = document.getElementById("gasolina").value;
    var precio = distancia * gasolina;
    document.getElementById("resultado").innerHTML = "El viaje de" + viaje + 
            "de" + distancia + "kilómetros a 0.15 el precio del kilñometro hace un gasto total de" + resultado
}
// Evento de carga de la página
window.addEventListener('load', iniciar, false);

// Variables
let numPrimitiva;
let reintegro;
let numEuromillon;
let estrella1;
let estrella2;

// iniciar()
function iniciar() {
    let botonPrimitiva = document.getElementById("primitiva");
    // Al pulsar el botón llama a la función generaPrimitiva()
    botonPrimitiva.addEventListener('click', generaPrimitiva, false);

    let botonEuromillon = document.getElementById('euromillon');
    // Al pulsar el botón llama a la función generaEuromillon()
    botonEuromillon.addEventListener('click', generaEuromillon, false);
}



// PRIMITIVA -------------------------------------------------------------
// generaPrimitiva()
function generaPrimitiva(e) {
    // Math.random() * (max - min) + min;
    // Genera un número aleatorio entre min (incluido) y max (excluido).
    // Se usa Math.floor para un redondeo con una distribución uniforme.

    // Detiene el evento por defecto (submit del input).
    e.preventDefault();

    // Vacía la variable y el div para que no se concatenen los mensajes.
    numPrimitiva = "";
    $("#resultado-primitiva").empty();
    let arrayPrimitiva = [];

    // Array de 7 números del 1 al 49 que no se repitan.
    for (let i = 0; i <= 6; i++) {
        let aleatorio = Math.floor(Math.random() * (50 - 1) + 1);
        // Si el numero aleatorio ya esta en el array (está repetido), se genera otro aleatorio.
        while (arrayPrimitiva.includes(aleatorio)) {
            aleatorio = Math.floor(Math.random() * (50 - 1) + 1);
        }
        arrayPrimitiva[i] = aleatorio;
    }

    // Reintegro: 1 número del 0 al 9
    reintegro = Math.floor(Math.random() * 10);

    // Pinta el resultado en el html.
    $("#resultado-primitiva").append("<h2></h2>");
    for (let i = 0; i < arrayPrimitiva.length; i++) {
        if (i == arrayPrimitiva.length - 1) {
            $("#resultado-primitiva h2").append(" <br>Complementario: " + arrayPrimitiva[i]);
        } else {
            $("#resultado-primitiva h2").append(arrayPrimitiva[i] + "  ");
        }
    }
    $("#resultado-primitiva h2").append("<br>Reintegro: " + reintegro);
} // fin generaPrimitiva



// EUROMILLON -------------------------------------------------------------
// generaEuromillon()
function generaEuromillon(e) {

    // Detiene el evento por defecto (submit del input)
    e.preventDefault();

    // Vacía la variable y el div para que no se concatenen los mensajes.
    numEuromillon = "";
    $("#resultado-euromillon").empty();
    let arrayEuromillon = [];
    let arrayEstrellas = [];

    // Array de 5 números del 1 al 50 que no se repitan.
    for (let i = 0; i < 5; i++) {
        let aleatorio = Math.floor(Math.random() * (51 - 1) + 1);
        // Si el numero aleatorio ya esta en el array (está repetido), se genera otro aleatorio.
        while (arrayEuromillon.includes(aleatorio)) {
            aleatorio = Math.floor(Math.random() * (51 - 1) + 1);
        }
        arrayEuromillon[i] = aleatorio;
    }

    // Array de 2 números del 1 al 12 que no se repitan (las estrellas del euromillon)
    for (let i = 0; i < 2; i++) {
        let estrellaAleatoria = Math.floor(Math.random() * (13 - 1) + 1);
        // Si el numero estrellaAleatoria ya esta en el array (está repetido), se genera otra estrellaAleatoria.
        while (arrayEstrellas.includes(estrellaAleatoria)) {
            estrellaAleatoria = Math.floor(Math.random() * (13 - 1) + 1);
        }
        arrayEstrellas[i] = estrellaAleatoria;
    }


    // Pinta el resultado en el html:
    // Los numeros
    $("#resultado-euromillon").append("<h2></h2>");
    for (let i = 0; i < arrayEuromillon.length; i++) {
        $("#resultado-euromillon h2:first").append(arrayEuromillon[i] + "  ");
    }
    // Las estrellas
    $("#resultado-euromillon").append("<h2>Estrellas: </h2>");
    for (let i = 0; i < arrayEstrellas.length; i++) {
        $("#resultado-euromillon h2:last").append(arrayEstrellas[i] + "  ");
    }

} // fin generaEuromillon
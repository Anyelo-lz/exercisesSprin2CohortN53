const cuadrado = document.getElementById("miCuadrado")
const botonCambiarColor = document.getElementById("cambiarColor")
const colores = ["bg-blue-500", "bg-red-500"]
let indiceColor = 0

// Agregar evento 
botonCambiarColor.addEventListener("click", function () {
    // Cambiar al siguiente color 
    indiceColor = (indiceColor + 1) % colores.length
    cuadrado.className = "w-32 h-32 " + colores[indiceColor] + " text-white ml-5 flex items-center justify-center"
    cuadrado.innerText = obtenerNombreColor(colores[indiceColor])
});
function obtenerNombreColor(color) {
    switch (color) {
        case "bg-blue-500":
            return "Azul Claro"
        case "bg-red-500":
            return "Rojo"
        default:
            return ""
    }
}
//---------------------------------------------------------------
const cuadradoInput = document.getElementById("miCuadrado2")
const inputTexto = document.getElementById("inputTexto")
const botonBorrarContenido = document.getElementById("borrarContenido")
// Evento de entrada en el input
inputTexto.addEventListener("input", function () {
    cuadradoInput.innerText = inputTexto.value
})
// Evento del botón de borrar contenido dejando de cero para poder ingresar devuelta el contendio
botonBorrarContenido.addEventListener("click", function () {
    inputTexto.value = "" // Limpia todo y deja de cero
    cuadradoInput.innerText = "se borro teclea otra cosa"  // Restaurar el texto del cuadrado
})
//---------------------------------------------------------------------
document.getElementById("calcularTodo").addEventListener('click', function () {
    const peso = Number(document.getElementById('peso').value)
    const altura = Number(document.getElementById('altura').value)
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").value = "Por favor, ingresa valores válidos."
        return
    }
    const corporal = altura * altura / peso
    const resultado = `Tu peso corporal es: ${corporal.toFixed(2)}`
    document.getElementById("resultado").value = resultado
})
//----------------------------------------
const tipoCambio = 500
document.getElementById("convertirDolares").addEventListener('click', function () {
    convertir("dolares")
})
document.getElementById("convertirMonedaLocal").addEventListener('click', function () {
    convertir("monedaLocal")
})
document.getElementById('borrarEntradas').addEventListener('click', function () {
    borrarEntradas()
})
function convertir(destino) {
    const monedaLocal = Number(document.getElementById('monedaLocal').value)
    if (isNaN(monedaLocal) || monedaLocal <= 0) {
        document.getElementById("resultadoConvercion").value = "Ingresa una cantidad válida"
        return
    }
    const resultadoTotal = (destino === "dolares") ? monedaLocal / tipoCambio : monedaLocal * tipoCambio
    document.getElementById('resultadoConvercion').value = (destino === 'resultadoConvercion') ? `$${resultadoTotal.toFixed(2)}` : resultadoTotal.toFixed(2)
}
function borrarEntradas() {
    document.getElementById('monedaLocal') 
    document.getElementById('resultadoConvercion') 
}














































/*document.addEventListener('DOMContentLoaded', function () {
    const square = document.getElementById('square');
    const inputText = document.getElementById('inputText');
    const clearButton = document.getElementById('clearButton');

    inputText.addEventListener('input', function () {
        square.textContent = inputText.value;
    });

    clearButton.addEventListener('click', function () {
        inputText.value = '';
        square.textContent = '';
    });
});*/


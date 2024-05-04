const output = document.getElementById("output");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");
const btnMultiplicar = document.getElementById("btn-multiplicar");
const btnDividir = document.getElementById("btn-dividir");
const btnReset = document.getElementById("btn-reset");
const error = document.getElementById("error");
let resultado;

// Calculos
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

// Reiniciar Valores
function resetValue() {
    output.value = "0";
    input1.value = "";
    input2.value = "";
}

// Error
function errorNum(str) {
    error.innerText = str;
    error.style.opacity = "1";
    setTimeout(() => {
        error.style.opacity = "0";
    }, 3000);
}

// Checkear Numero
function esNumero(value) {
    return /^-?\d*\.?\d+$/.test(value);
}

// Operacion
function operacion(operacion) {
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);

    if (!esNumero(value1) || !esNumero(value2)) {
        errorNum("El valor ingresado no es un número!");
        resetValue();
        return;
    }

    switch (operacion) {
        case "+":
            resultado = sumar(value1, value2);
            break;
        case "-":
            resultado = restar(value1, value2);
            break;
        case "*":
            resultado = multiplicar(value1, value2);
            break;
        case "/":
            if(value2 !== 0) {
                resultado = dividir(value1, value2);
            } else {
                resetValue();
                errorNum("No es posible dividir por 0!");
                return;
            }
            break;
    }
    output.value = resultado.toFixed(2);
}

// EventListeners
btnSumar.addEventListener("click", function () {
    operacion("+");
})
btnRestar.addEventListener("click", function () {
    operacion("-");
})
btnMultiplicar.addEventListener("click", function () {
    operacion("*");
})
btnDividir.addEventListener("click", function () {
    operacion("/");
})
btnReset.addEventListener("click", function () {
    resetValue();
})
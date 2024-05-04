let ejercicio = document.querySelector("title");
console.log(ejercicio.innerHTML);

let data = document.querySelectorAll("dd");
let nombreCompletoA = "";
let nombreCompletoB = "";
let color = "";

for (let i = 0; i < 4; i++) {
    if (data[i].outerHTML == "<dd></dd>") {
        continue;
    }
    switch (data[i]) {
        case data[2]:
        case data[3]:
            nombreCompletoA += data[i].outerText.toUpperCase() + " ";
            break;
        default:
            nombreCompletoA += data[i].outerText + " ";
            break;
    }
}

for (let i = 4; i < 8; i++) {
    if (data[i].outerHTML == "<dd></dd>") {
        continue;
    }
    switch (data[i]) {
        case data[6]:
        case data[7]:
            nombreCompletoB += data[i].outerText.toUpperCase() + " ";
            break;
        default:
            nombreCompletoB += data[i].outerText + " ";
            break;
    }
}

console.log("-----" + "\n" + "Integrante 1: " + nombreCompletoA + "\n" + "Integrante 2: " + nombreCompletoB + "\n" + "-----");


function nombreIgual() {
    console.log("Hubo coincidencia de Nombres.");
    alert("Hubo coincidencia de Nombres.");
    color = prompt("Hubo coincidencia de Nombres, Por favor ingrese un color, sin comiilas.");
}

function apellidoIgual() {
    console.log("Hubo coincidencia de Apellidos.");
    alert("Hubo coincidencia de Apellidos.");
    color = prompt("Hubo coincidencia de Apellidos, Por favor ingrese un color, sin comiilas.");
}

if (data[0].outerHTML == data[4].outerHTML && data[0].outerHTML != "<dd></dd>") {
    nombreIgual();
    data[0].style.color = data[4].style.color = color;
} else if (data[0].outerHTML == data[5].outerHTML && data[0].outerHTML != "<dd></dd>") {
    nombreIgual();
    data[0].style.color = data[5].style.color = color;
} else if (data[1].outerHTML == data[4].outerHTML && data[1].outerHTML != "<dd></dd>") {
    nombreIgual();
    data[1].style.color = data[4].style.color = color;
} else if (data[1].outerHTML == data[5].outerHTML && data[1].outerHTML != "<dd></dd>") {
    nombreIgual();
    data[1].style.color = data[5].style.color = color;
} else {
    console.log("No hubo coincidencias en los Nombres.");
    alert("No hubo coincidencias en los Nombres.");
}

let revisarApellidos = confirm("Quieres revisar si los apellidos coinciden?");

if (revisarApellidos == true) {
    if (data[2].outerHTML == data[6].outerHTML && data[2].outerHTML != "<dd></dd>") {
        apellidoIgual();
        data[2].style.color = data[6].style.color = color;
    } else if (data[2].outerHTML == data[7].outerHTML && data[2].outerHTML != "<dd></dd>") {
        apellidoIgual();
        data[2].style.color = data[7].style.color = color;
    } else if (data[3].outerHTML == data[6].outerHTML && data[3].outerHTML != "<dd></dd>") {
        apellidoIgual();
        data[3].style.color = data[6].style.color = color;
    } else if (data[3].outerHTML == data[7].outerHTML && data[3].outerHTML != "<dd></dd>") {
        apellidoIgual();
        data[3].style.color = data[7].style.color = color;
    } else {
        console.log("No hubo coincidencias en los Apellidos.");
        alert("No hubo coincidencias en los Apellidos.");
    }
} else {
    alert("Ok, No se revisara si coinciden los apellidos.")
}
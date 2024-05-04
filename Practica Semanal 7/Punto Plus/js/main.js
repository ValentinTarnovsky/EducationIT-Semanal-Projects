let ejercicio = document.querySelector("title");
console.log(ejercicio.innerHTML);

function getVal() {
    const nombre1 = document.querySelector("#nombre1");
    const nombre2 = document.querySelector("#nombre2");
    const nombre3 = document.querySelector("#nombre3");
    const nombre4 = document.querySelector("#nombre4");
    const apellido1 = document.querySelector("#apellido1");
    const apellido2 = document.querySelector("#apellido2");
    const apellido3 = document.querySelector("#apellido3");
    const apellido4 = document.querySelector("#apellido4");
    let arrayPP = [nombre1.value, nombre2.value, apellido1.value, apellido2.value];
    let arraySP = [nombre3.value, nombre4.value, apellido3.value, apellido4.value];
    let nombreParticipanteUno = "";
    let nombreParticipanteDos = "";
    let color = "";

    function nombreIgual() {
        console.log("Hubo coincidencia de Nombres.");
        alert("Hubo coincidencia de Nombres.");
        color = prompt("Hubo coincidencia de Nombres, por favor ingrese un color, sin comiilas.");
    }

    function apellidoIgual() {
        console.log("Hubo coincidencia de Apellidos.");
        alert("Hubo coincidencia de Apellidos.");
        color = prompt("Hubo coincidencia de Apellidos, por favor ingrese un color, sin comiilas.");
    }

    for (let i = 0; i < arrayPP.length; i++) {
        if (arrayPP[i] === '') {
            continue;
        }
        switch (arrayPP[i]) {
            case arrayPP[2]:
            case arrayPP[3]:
                nombreParticipanteUno += arrayPP[i].toUpperCase() + " ";
                break;
            default:
                nombreParticipanteUno += arrayPP[i] + " ";
                break;
        }
    }
    for (let i = 0; i < arraySP.length; i++) {
        if (arraySP[i] === '') {
            continue;
        }
        switch (arraySP[i]) {
            case arraySP[2]:
            case arraySP[3]:
                nombreParticipanteDos += arraySP[i].toUpperCase() + " ";
                break;
            default:
                nombreParticipanteDos += arraySP[i] + " ";
                break;
        }
    }
    console.log("-----\n" + "Integrante 1: " + nombreParticipanteUno + "\n" + "Integrante 2: " + nombreParticipanteDos + "\n-----");

    if (nombre1.value.toLowerCase() == nombre3.value.toLowerCase() && nombre1.value != '') {
        nombreIgual();
        nombre1.style.backgroundColor = nombre3.style.backgroundColor = color;
    } else if (nombre1.value.toLowerCase() == nombre4.value.toLowerCase() && nombre1.value != '') {
        nombreIgual();
        nombre1.style.backgroundColor = nombre4.style.backgroundColor = color;
    } else if (nombre2.value.toLowerCase() == nombre3.value.toLowerCase() && nombre2.value != '') {
        nombreIgual();
        nombre2.style.backgroundColor = nombre3.style.backgroundColor = color;
    } else if (nombre2.value.toLowerCase() == nombre4.value.toLowerCase() && nombre2.value != '') {
        nombreIgual();
        nombre2.style.backgroundColor = nombre4.style.backgroundColor = color;
    } else {
        console.log("No hubo coincidencias en los Nombres.");
        alert("No hubo coincidencias en los Nombres.");
    }

    let revisarApellidos = confirm("Quieres revisar si los apellidos coinciden?");

    if (revisarApellidos == true) {
        if (apellido1.value.toLowerCase() == apellido3.value.toLowerCase() && apellido1.value != '') {
            apellidoIgual();
            apellido1.style.backgroundColor = apellido3.style.backgroundColor = color;
        } else if (apellido1.value.toLowerCase() == apellido4.value.toLowerCase() && apellido1.value != '') {
            apellidoIgual();
            apellido1.style.backgroundColor = apellido4.style.backgroundColor = color;
        } else if (apellido2.value.toLowerCase() == apellido3.value.toLowerCase() && apellido2.value != '') {
            apellidoIgual();
            apellido2.style.backgroundColor = apellido3.style.backgroundColor = color;
        } else if (apellido2.value.toLowerCase() == apellido4.value.toLowerCase() && apellido2.value != '') {
            apellidoIgual();
            apellido2.style.backgroundColor = apellido4.style.backgroundColor = color;
        } else {
            console.log("No hubo coincidencias en los Apellidos.");
            alert("No hubo coincidencias en los Apellidos.");
        }
    } else {
        alert("Ok, No se revisara si coinciden los apellidos.")
    }

}


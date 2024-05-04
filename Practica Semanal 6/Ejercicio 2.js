// Ejercicio 2
let cantidadDeGatos = 10;
let cantidadDePasos = 1;
let contador = 0;
let pasosEmoji = "";
for (let i = 1; i <= cantidadDePasos; i++) {
    pasosEmoji += "🐾";
}

while (contador < cantidadDeGatos) {
    contador++;
    document.write("<p>Gato #" + contador + "🐈" + pasosEmoji);
}



// <>
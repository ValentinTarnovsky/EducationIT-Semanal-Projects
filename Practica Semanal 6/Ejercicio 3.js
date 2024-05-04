// Ejercicio 3
let cantidadDeGatos = 10;
let cantidadDePasos = 2;
let contador = 0;
let pasosEmoji = "";
for (let i = 1; i <= cantidadDePasos; i++) {
    pasosEmoji += "🐾";
}

while (contador < cantidadDeGatos) {
    contador++;
    if(contador % 2 === 0) {
        document.write("<p>Gato #" + contador + "🐈‍⬛" + pasosEmoji);
        continue;
    }
    document.write("<p>Gato #" + contador + "🐈" + pasosEmoji);
}



// <>
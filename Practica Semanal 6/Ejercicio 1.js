// Ejercicio 1
let cantidadDeGatos = 10;
let contador = 0;

while (contador < cantidadDeGatos) {
    contador++;

    if(contador === 3 || contador === 6 || contador === 9) {
        document.write("<p>Gato #" + contador + "😹");
        continue;
    } else if (contador === 2 || contador === 5 || contador === 8) {
        document.write("<p>Gato #" + contador + "😸");
        continue;
    }

    document.write("<p>Gato #" + contador + "😺");
}

// <>
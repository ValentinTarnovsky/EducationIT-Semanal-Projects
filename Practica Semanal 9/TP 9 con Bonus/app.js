const spanElement = document.querySelector('h1 span');
const buttonElement = document.querySelector('.button');

const characterNames = {
    "mario": "Mario",
    "luigi": "Luigi",
    "bowser": "Bowser Morton Koopa",
    "peach": "Princesa Peach Toadstool",
    "yoshi": "T. Yoshisaur Munchakoopas",
    "toad": "Toad",
    "toadette": "Toadette",
    "daisy": "Princesa Daisy",
};

buttonElement.addEventListener('click', () => {
    const character = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLowerCase();
    console.log(character);

    if (characterNames[character]) {
        spanElement.textContent = characterNames[character];

        const characterElement = document.getElementById(character);
        if (characterElement) {
            characterElement.title = "Presentado";
        }

        buttonElement.style.display = 'none';
    } else {
        spanElement.textContent = "(desconocido)";
    }
});

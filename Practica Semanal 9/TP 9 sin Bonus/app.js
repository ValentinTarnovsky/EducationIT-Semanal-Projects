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

let selectedCharacter = null;
buttonElement.addEventListener('click', () => {
    const character = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLowerCase();
    console.log(character);
    if (characterNames[character]) {
        spanElement.textContent = characterNames[character];
        if (selectedCharacter) {
            const previousCharacterElement = document.getElementById(selectedCharacter);
            if (previousCharacterElement) {
                previousCharacterElement.removeAttribute("title");
            }
        }
        const characterElement = document.getElementById(character);
        if (characterElement) {
            characterElement.title = "Presentado";
        }
        selectedCharacter = character;
    } else {
        spanElement.textContent = "(desconocido)";
    }
});

const characterElements = document.querySelectorAll('#cajas > div');
characterElements.forEach((element) => {
    element.addEventListener('click', () => {
        const characterId = element.id;
        if (element.title === "Presentado") {
            element.removeAttribute("title");
        } else {
            element.title = "Presentado";
        }
    });
});

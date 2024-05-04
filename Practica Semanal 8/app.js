function applyRandomStyle() {
    const styles = ["style-default", "style-retro", "style-futuro"];
    const randomStyleId = styles[Math.floor(Math.random() * styles.length)];

    styles.forEach((styleId) => {
        const style = document.getElementById(styleId);
        style.disabled = styleId !== randomStyleId;
    });
}

const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", applyRandomStyle);


//////////////////

const styleSelect = document.getElementById("style");

styleSelect.addEventListener("change", function () {
    const selectedStyle = styleSelect.value;

    if (selectedStyle === "01") {
        // Estilo 1: estilos.css
        document.getElementById("style-default").disabled = false;
        document.getElementById("style-retro").disabled = true;
        document.getElementById("style-futuro").disabled = true;
    } else if (selectedStyle === "02") {
        // Estilo 2: estilos-retro.css
        document.getElementById("style-default").disabled = true;
        document.getElementById("style-retro").disabled = false;
        document.getElementById("style-futuro").disabled = true;
    } else if (selectedStyle === "03") {
        // Estilo 3: estilos-futuro.css
        document.getElementById("style-default").disabled = true;
        document.getElementById("style-retro").disabled = true;
        document.getElementById("style-futuro").disabled = false;
    } else if (selectedStyle === "04") {
        // Sin estilos
        document.getElementById("style-default").disabled = true;
        document.getElementById("style-retro").disabled = true;
        document.getElementById("style-futuro").disabled = true;
    }
});


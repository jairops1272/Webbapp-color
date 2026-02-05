// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Inputs numéricos
const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

// Color Picker
const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

// Función para actualizar color
function updateColor() {
    const r = parseInt(red.value);
    const g = parseInt(green.value);
    const b = parseInt(blue.value);

    // Sincronizar sliders y inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    // Actualizar color picker
    colorPicker.value = "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    // Actualizar recuadro y valores
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = colorPicker.value.toUpperCase();

    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;
    hexValue.textContent = hex;
}

// Eventos para sliders
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

// Eventos para inputs numéricos
redNum.addEventListener("input", () => {
    red.value = Math.min(Math.max(redNum.value, 0), 255);
    updateColor();
});
greenNum.addEventListener("input", () => {
    green.value = Math.min(Math.max(greenNum.value, 0), 255);
    updateColor();
});
blueNum.addEventListener("input", () => {
    blue.value = Math.min(Math.max(blueNum.value, 0), 255);
    updateColor();
});

// Evento para color picker
colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;

    // Convertir HEX a RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    // Actualizar sliders e inputs
    red.value = r;
    green.value = g;
    blue.value = b;

    updateColor();
});

// Inicializar color
updateColor();

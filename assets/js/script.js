// ======================
// Sliders
// ======================
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// ======================
// Inputs numéricos
// ======================
const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

// ======================
// Color Picker
// ======================
const colorPicker = document.getElementById("colorPicker");

// ======================
// Elementos de salida
// ======================
const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

// ======================
// Valores iniciales (IMPORTANTE)
// ======================
red.value = 0;
green.value = 0;
blue.value = 0;

redNum.value = 0;
greenNum.value = 0;
blueNum.value = 0;

// ======================
// Función para actualizar color
// ======================
function updateColor() {
    const r = parseInt(red.value) || 0;
    const g = parseInt(green.value) || 0;
    const b = parseInt(blue.value) || 0;

    // Sincronizar sliders y inputs numéricos
    redNum.value = r;
    greenNum.value = g;
    blueNum.value = b;

    // Convertir a HEX
    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    // Actualizar color picker
    colorPicker.value = hex;

    // Actualizar recuadro y textos
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbValue.textContent = rgb;
    hexValue.textContent = hex.toUpperCase();
}

// ======================
// Eventos para sliders
// ======================
red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);

// ======================
// Eventos para inputs numéricos
// ======================
redNum.addEventListener("input", () => {
    red.value = Math.min(255, Math.max(0, redNum.value));
    updateColor();
});

greenNum.addEventListener("input", () => {
    green.value = Math.min(255, Math.max(0, greenNum.value));
    updateColor();
});

blueNum.addEventListener("input", () => {
    blue.value = Math.min(255, Math.max(0, blueNum.value));
    updateColor();
});

// ======================
// Evento para color picker
// ======================
colorPicker.addEventListener("input", () => {
    const hex = colorPicker.value;

    // Convertir HEX a RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    // Actualizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    updateColor();
});

// ======================
// Inicializar aplicación
// ======================
updateColor();

function appendToScreen(value) {
    document.getElementById("screen").value += value;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculateResult() {
    const screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}

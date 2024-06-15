const display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function back() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function factorial(n) {
    if (n < 0) return 'Error';
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

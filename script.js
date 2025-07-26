const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
function calculatePercentage() {
    try {
        if (display.value !== '') {
            display.value = eval(display.value) / 100;
        }
    } catch {
        display.value = 'Error';
    }
}
function square() {
    try {
        if (display.value !== '') {
            display.value = Math.pow(eval(display.value), 2);
        }
    } catch {
        display.value = 'Error';
    }
}


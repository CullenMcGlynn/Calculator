 // Fixed the function name from cleardisplay to clearDisplay to match the HTML
 function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function backspace() {
    const display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function percentage() {
    const display = document.getElementById('display');
    try {
        // Convert the current value to a percentage (divide by 100)
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = 'Error';
    }
}

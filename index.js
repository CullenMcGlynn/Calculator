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
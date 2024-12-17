// Calculator program//

const display = document.getElementById('display');

function appendValue(value) {
    if (value === '=') {
        calculateResult();
    } else {
        displayValue += value;
        display.value = displayValue;
    }
}

function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
}

function deleteChar() {
    displayValue = displayValue.slice(0, -1);
    display.value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        display.value = displayValue;
    } catch (error) {
        displayValue = 'Error';
        display.value = displayValue;
    }
}
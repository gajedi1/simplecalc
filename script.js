let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendopp(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calc();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calc() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    currentOperator = '';
}

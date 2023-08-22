const currentDisplay = document.getElementById('current-display');
const previousDisplay = document.getElementById('previous-display');
const numberButtons = document.getElementsByClassName('number-button');
const operationButtons = document.getElementsByClassName('operation-button');
const clearButton = document.getElementById('all-clear');
const deleteButton = document.getElementById('delete');
const exponentiateButton = document.getElementById('exponentiate');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const resultButton = document.getElementById('equals');
const signChangeButton = document.getElementById('sign-change');

let currentNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';


function updateCurrentDisplay() {
    currentDisplay.textContent = getDisplayNumber(currentNumber);
}

function updatePreviousDisplay() {
    previousDisplay.textContent = getDisplayNumber(firstNumber) + ` ${operator}`;
}


function getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
        })
    }

    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
    
}


for (const numberButton of numberButtons) {
    numberButton.addEventListener('click', () => {
        const value = numberButton.textContent;
        currentNumber = currentNumber.toString();
        if (value === '.' && currentNumber.includes('.')) {
            return currentNumber;
        }
            currentNumber += value;
            updateCurrentDisplay();
    });
}
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
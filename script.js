let currentInput = '0';

// Функция для очистки экрана
function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

// Функция для добавления символов
function appendCharacter(character) {
    if (currentInput === '0' && character !== '.') {
        currentInput = character;
    } else {
        currentInput += character;
    }
    updateDisplay();
}

// Функция для обновления дисплея калькулятора
function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

// Функция для вычислений
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (e) {
        currentInput = 'Ошибка';
        updateDisplay();
    }
}

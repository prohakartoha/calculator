function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === '0' && !['+', '-', '*', '/', '.'].includes(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
    resizeDisplay();
}

function clearDisplay() {
    document.getElementById('display').value = '0';
    resizeDisplay();
}

function calculate() {
    try {
        const display = document.getElementById('display');
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Ошибка';
    }
    resizeDisplay();
}

function resizeDisplay() {
    const display = document.getElementById('display');
    const maxFontSize = 100;
    const minFontSize = 20;
    
    let fontSize = maxFontSize;
    display.style.fontSize = fontSize + 'px';
    
    while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
        fontSize--;
        display.style.fontSize = fontSize + 'px';
    }
}

window.onload = function() {
    resizeDisplay();
};

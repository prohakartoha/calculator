 function appendToDisplay(value) {
            const display = document.getElementById('display');
            if (display.value === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '.') {
                display.value = value; 
            } else {
                display.value += value; 
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = '0';
        }

        function calculate() {
            try {
                const display = document.getElementById('display');
                const result = eval(display.value);
                display.value = result;
            } catch (error) {
                display.value = 'Ошибка';
            }
        }
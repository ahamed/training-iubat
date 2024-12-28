window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const displayInput = document.querySelector('.display-input');
    const displayOutput = document.querySelector('.display-output');

    const input = [];
    let isParenthesesOpen = false;

    function clearInput() {
        input.length = 0;
        displayInput.textContent = '';
    }

    function clearOutput() {
        displayOutput.textContent = '';
    }

    function clear() {
        clearInput();
        clearOutput();
    }

    function deleteLast() {
        input.pop();
        updateDisplayInput();
    }

    function calculate() {
        const result = eval(input.join(''));
        displayOutput.textContent = `= ${result}`;
    }

    function updateDisplayInput() {
        displayInput.textContent = input.join('');
    }

    function updateInput(value) {
        const map = new Map();
        map.set('divide', '/');
        map.set('multiply', '*');
        map.set('subtract', '-');
        map.set('add', '+');
        map.set('dot', '.');
        
        if (map.has(value)) {
            input.push(map.get(value));
        } else {
            input.push(value);
        }
        updateDisplayInput();
    }

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;
            switch (value) {
                case 'clear':
                    clear();
                    break;
                case 'delete':
                    deleteLast();
                    clearOutput();
                    break;
                case 'equal':
                    calculate();
                    break;
                case 'parentheses':
                    if (isParenthesesOpen) {
                        input.push(')');
                        isParenthesesOpen = false;
                        updateDisplayInput();
                    } else {
                        input.push('(');
                        isParenthesesOpen = true;
                        updateDisplayInput();
                    }
                    break;
                default:
                    updateInput(value);
                    break;
            }
        });
    });
});



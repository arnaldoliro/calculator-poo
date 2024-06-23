class Calculator{
    constructor() {
        this.currentInput = ''
        this.operator = null
        this.previousInput = ''
    }
    appendNumber(number) {
        this.currentInput += number.toString();
    }
    setOperator(operator) {
        if(this.currentInput === '') {
            return;
        }
        if (this.previousInput !== '') {
            this.calculate();
        }
        else {
            this.previousInput = parseFloat(this.currentInput);
        }

        this.operator = operator;
        this.currentInput = ''
    }
    calculate() {
        let result
        const previous = parseFloat(this.previousInput)
        const current = parseFloat(this.currentInput)

        if(isNaN(previous) || isNaN(current)) {
            return;
        }

        switch (this.operator) {
            case '+': result = previous + current;
                break;
            case '-': result = previous - current;
                break;
            case '*': result = previous * current;
                break;
            case '/': result = previous / current;
                break;
            default: return;
        }

        this.currentInput = result.toString()
        this.operator = null
        this.previousInput = '';
    }
}

// Teste de Calculadora

const calculadora = new Calculator();

calculadora.appendNumber(1);
calculadora.appendNumber(5)
calculadora.setOperator('/')
calculadora.appendNumber(5);
calculadora.calculate();
console.log(`Resultado: ${calculadora.currentInput}`);
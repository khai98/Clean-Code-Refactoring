function calculate(firstOperand , secondOperand , operator ) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            if (secondOperand != operator)
                return firstOperand / secondOperand;
            else
                throw "Can not divide by 0";
        default:
            throw "Unsupported operation";
    }
}


module.exports = calculate;
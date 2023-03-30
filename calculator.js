function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Cannot divide by zero');
    }
    return num1 / num2;
}
function calculator() {
    var num1 = Number(prompt('Enter the first number:'));
    var num2 = Number(prompt('Enter the second number:'));
    var operation = prompt('Enter the operation you want to perform (add, subtract, multiply, divide):');
    var result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
        default:
            throw new Error('Invalid operation');
    }
    console.log("The result of ".concat(operation, "ing ").concat(num1, " and ").concat(num2, " is ").concat(result, "."));
}
// Example usage:
calculator();

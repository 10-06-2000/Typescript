function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  
  function divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Cannot divide by zero');
    }
  
    return num1 / num2;
  }
  
  function calculator(): void {
    const num1 = Number(prompt('Enter the first number:'));
    const num2 = Number(prompt('Enter the second number:'));
  
    const operation = prompt(
      'Enter the operation you want to perform (add, subtract, multiply, divide):'
    );
  
    let result: number;
  
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
  
    console.log(`The result of ${operation}ing ${num1} and ${num2} is ${result}.`);
  }
  
  // Example usage:
  calculator();
  
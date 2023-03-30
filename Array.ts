function findMax(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  // Example usage
  const numbers = [3, 7, 2, 8, 5];
  const maxNumber = findMax(numbers);
  console.log(`The maximum number in [${numbers}] is ${maxNumber}.`); // The maximum number in [3,7,2,8,5] is 8.

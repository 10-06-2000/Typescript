function findMax(numbers) {
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
// Example usage
var numbers = [3, 7, 2, 8, 5];
var maxNumber = findMax(numbers);
console.log("The maximum number in [".concat(numbers, "] is ").concat(maxNumber, ".")); // The maximum number in [3,7,2,8,5] is 8.

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(arr) {
    return arr.reduce((a, b) => a * b);
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(add(2, 4));
console.log(subtract(6, 7));
console.log(multiply([2,2,2]));
console.log(divide(4, 2));
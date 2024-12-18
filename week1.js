// Declare two numbers
const num1 = 10;
const num2 = 5;

// Perform addition
const sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Perform subtraction
const difference = num1 - num2;
console.log("The subtraction of " + num1 + " and " + num2 + " is: " + difference);

// Perform multiplication
const product = num1 * num2;
console.log("The multiplication of " + num1 + " and " + num2 + " is: " + product);

// Perform division
if (num2 !== 0) {
    const quotient = num1 / num2;
    console.log("The quotient of " + num1 + " divided by " + num2 + " is: " + quotient);
} else {
    console.log("Division by zero is not allowed.");
}
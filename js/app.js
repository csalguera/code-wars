//! Multiply
// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b
  // Code did not return anything, hence undefined
}

console.log('Exercise 1:', multiply(4, 5));

//! Even or Odd
// Create a function that takes an integer as an argument and returs "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num) {
  // Use ternary operator to conditionally display "Even" or "Odd"
  // If the number is evenly divisible by 2 (no remainder), return "Even"
  // If there is no remainder (0 is falsy) use Bang operator (!) to convert value into truthy
  return !(num % 2) ? 'Even' : 'Odd'
}

console.log(evenOrOdd(8));
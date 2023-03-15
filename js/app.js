//! Multiply
// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b
  // Code did not return anything, hence undefined
}

console.log('Exercise 1: 4 * 5 is', multiply(4, 5));

//! Even or Odd
// Create a function that takes an integer as an argument and returs "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num) {
  // Use ternary operator to conditionally display "Even" or "Odd"
  // If the number is evenly divisible by 2 (no remainder), return "Even"
  // If there is no remainder (0 is falsy) use Bang operator (!) to convert value into truthy
  return !(num % 2) ? 'Even' : 'Odd'
}

console.log('Exercise 2: 8 is', evenOrOdd(8));

//! Multiples of 3 or 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sume of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0.

// Note, if the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  
}
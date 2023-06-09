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

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0.

// Note, if the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let sum = 0
  for (let i = 0; i < number; i++) {
    if (!(i % 3) && !(i % 5)) {
      // adds to sum if i is divisible by 3 and 5
      sum += i
    } else if (!(i % 3)) {
      // adds to sum if i is divisible by 3
      sum += i
    } else if (!(i % 5)) {
      // adds to sum if i is divisible by 5
      sum += i
    }
  }
  return sum
}

console.log('Exercise 3: The sum of numbers less than 15, with these conditions, is ', solution(15));

//! Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const strArr = str.split('')
  let count = 0
  strArr.forEach(char => {
    'aeiou'.includes(char.toLowerCase()) ? count += 1 : ''
  })
  return count
}

console.log(`Exercise 4: Apple has ${getCount('Apple')} vowels`);

//! Disemvowel Trolls
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  strArr = str.split('')
  const vowels = (char => 'aeiou'.includes(char.toLowerCase()))
  return strArr.filter(char => !vowels(char)).join('')
}

console.log(`Exercise 5: ${disemvowel('This string is missing vowels.')}`);

//! Reversed Strings
// Complete the solution so that it reverses the string passed into it.

function reverseString(str){
  return str.split('').reverse().join('')
}

console.log(`Exercise 6: ${reverseString('world')}`);

//! Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  // An integer needs to be converted to a string with toString method
  // The new string can be split with the split string method
  // The array of strings can be reversed
  const strArr = n.toString().split('').reverse()
  // map through array of strings and convert each back to a number with parseInt method
  const numsArr = strArr.map(char => parseInt(char))
  // return new array of numbers
  return numsArr
}

console.log(`Exercise 7: ${digitize(1234)}`)

//! Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  let value = 0
  // Reverse array so lowest value is at beginning
  const binArr = arr.reverse()
  // Iterate through each number in array
  for (let i = 0; i < binArr.length; i++) {
    // Use .length for arrays of varying legnths
    // The value should increase exponentially when interating to the next index
    // Use ternary operator to set the base to 2 if there is a truthy value (1) at each index
    // If the value at index 0 is falsy, return 0
    value += binArr[i] ? Math.pow(2, i) : 0
  }
  // Return the sum of each value
  return value
}

console.log(`Exercise 8: ${binaryArrayToNumber([1, 1, 0, 0, 0, 1])}`);
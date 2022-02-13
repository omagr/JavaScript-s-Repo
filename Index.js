// Generate Random Fractions with JavaScript
/* JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.*/
function randomFraction() {
  return Math.random();
}



// Generate Random Whole Numbers with JavaScript
/* Math.floor() to round the number down to its nearest whole number.*/
function randomWholeNum() {
  return Math.floor(Math.random() * 10);;
}



// Generate Random Whole Numbers within a Range
/* Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.*/
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}



// Use the parseInt Function
/* The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.*/
const a = parseInt("007");



// Use the parseInt Function with a Radix
/* The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36. DEFAULT BASE IS 10*/
function convertToInteger(str) {
  return parseInt(str, 2)
}
convertToInteger("10011");



// Use the Conditional (Ternary) Operator
/* The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.*/
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}



// Use Multiple Conditional (Ternary) Operators
/* It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:*/
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal"
    : (a > b) ? "a is greater"
      : "b is greater";
}



// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
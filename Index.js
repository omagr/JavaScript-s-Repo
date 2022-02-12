// Iterate with JavaScript While Loops
/* The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.*/
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);



// Iterate with JavaScript For Loops
/* for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression. */
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}





// Iterate Odd/Even Numbers With a For Loop
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);




// Count Backwards With a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);



// Iterate Through an Array with a For Loop
/* Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. Then i increases to 5, and the loop terminates because i < arr.length is false */
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
let total = 0;
for(let i = 0; i < arr.length; i++){
  total = total + arr[i];
}
console.log(total);




// Nesting For Loops
/* If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example: */
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++){
    for (let j =0; j < arr[i].length; j++){
      product = product * arr[i][j]
  }
}
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// Iterate with JavaScript Do...While Loops
/* The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true. */
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
console.log(i, myArray);



// Replace Loops using Recursion
/* Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this: */
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
/* The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer. Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.*/
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
// Write Reusable JavaScript with Functions
function reusableFunction () {
console.log("Hi World");
}
reusableFunction();


// Passing Values to Functions with Arguments
    /* Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.*/
function functionWithArgs(a,b) {
console.log(a + b);
}
functionWithArgs(6,9);


// Return a Value from a Function with Return
    /* We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.*/
function plusThree(num) {
return num + 3;
}   
const answer = plusThree(5);


// Global Scope and Functions
    /* In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code. */
const myGlobal  = 10;
function fun1() {
 oopsGlobal = 10;
}
function fun2() {
var output = "";
if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
}
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
}
console.log(output);
}


// Local Scope and Functions
function myLocalScope() {
const myVar  = 10;
console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);



// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
const outerWear = "sweater";
outerWear = "sweater"; // throw error
  return console.log(outerWear);
}
myOutfit();



// Understanding Undefined Value returned from a Function
    /* A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined. */
let sum = 0;
function addSum(num) {
sum = sum + num;
}
addSum(3);



// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7)



// Understanding Boolean Values
  /* Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.*/
function welcomeToBooleans() {
return true; // Change this line 
}
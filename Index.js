// ES6 - ECMAScript 6



// Use Arrow Functions to Write Concise Anonymous Functions
/* In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.*/
/* arrow function syntax: */
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
/* When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements: */
const myFunc = () => "value";



// Write Arrow Functions with Parameters
/* ust like a regular function, you can pass arguments into an arrow function. */
const doubler = (item) => item * 2;
doubler(4); // 8
/* If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted. */
const doubler = item => item * 2;
doubler(4); // 8
/* It is possible to pass more than one argument into an arrow function. */
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // 8



// Set Default Parameters for Your Functions
/* The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want. */
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());



// Use the Rest Parameter with Function Parameters
/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.. The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array. */
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

const sum = (...args ) => {
  let total = 0;
  for( let i = 0; i < args.length; i++){
    total = total + args[i]
  }
  
}
console.log(sum(2,46,5 ,5,6,6,6,7,78,6,5467,7,77)); //5718



// Use the Spread Operator to Evaluate Arrays In-Place
/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. */
const arr = [6, 89, 3, 45];
/* ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work: */
const spreaded = ...arr;

var maximus = Math.max.apply(null, arr);
/* We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain. */
const maximus = Math.max(...arr); //89

const arr1 = ['MAR', 'APR', 'MAY'];
const arr2 = ['JUNE', 'JULY', 'AUGUEST'];
let arr3;
arr3 = ['JAN', 'FEB',...arr1,["JUNE",'JULY',...arr2], arr1];  // Change this line
console.log(arr3);

const OBJ1 = { name:"om", age:20, nationality:"indian"};
const OBJ2 = { lastName:"agarwal", height:6, aukaat:"high"};
let OBJ3;
OBJ3 = { ...OBJ1, qualification:"bits", degree:20, ...OBJ2, OBJ2}; // Change this line
console.log(OBJ3);

// ES6 - ECMAScript 6
// ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable. Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year. ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.

// -----------------------------------------------------------------------------------------------------------------



// Compare Scopes of the var and let Keywords
/* When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function. The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.*/
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
/* Here the console will display the values [0, 1, 2] and 3. With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:*/
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
/* Here the console will display the values [0, 1, 2] and 3. This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the i variable. This is because the stored function will always refer to the value of the updated global i variable. */
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
/* Here the console will display the value 3. As you can see, printNumTwo() prints 3 and not 2. This is because the value assigned to i was updated and the printNumTwo() returns the global i and not the value i had when the function was created in the for loop. The let keyword does not follow this behavior: */
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
/* Here the console will display the value 2, and an error that i is not defined. i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement. */






// Mutate an Array Declared with const
/* However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier. */
const s = [5, 6, 7]; 
s = [1, 2, 3]; // will result in an error.
s[2] = 45;
console.log(s);  // [5, 6, 45]
/* s = [1, 2, 3] will result in an error. The console.log will display the value [5, 6, 45]. As you can see, you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator. */




//Prevent Object Mutation
/* As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation. */
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 




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

// --------------------------------------------------- main shit ----------------------- 


// Use the Rest Parameter with Function Parameters
/* In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function. The console would display the strings You have passed 3 arguments. and You have passed 4 arguments.. The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array. */
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

const sum = (...args ) => {
  return args .reduce((a, b) => a + b, 0);
}
console.log(sum(2, 4, 6)); //12




// Use the Spread Operator to Evaluate Arrays In-Place
/* ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. */
const arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
/* We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain. */
const maximus = Math.max(...arr); //89
/* maximus would have a value of 89. ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work: */
const spreaded = ...arr;

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);




// Use Destructuring Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 }; 
const { name, age } = user; // name = 'John Doe', age: 34
/* Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.*/






// Use Destructuring Assignment to Assign Variables from Objects
/* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value. */
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
/* You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34. */






// Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
const { johnDoe: { age, email }} = user;
/* And here's how you can assign an object properties' values to variables with different names: */
const { johnDoe: { age: userAge, email: userEmail }} = user;




// Use Destructuring Assignment to Assign Variables from Arrays

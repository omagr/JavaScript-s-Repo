// ES6 - ECMAScript 6
// destruturing arrays and objects

// Use Destructuring Assignment to Extract Values from Objects
const OBJ1 = { name:"om", age:20, nationality:"indian"};
const { name, age, nationality} = OBJ1; 
console.log(`HAY! YO ${name}, ${age}, ${nationality}`)
/* Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.*/



// Use Destructuring Assignment to Assign Variables from Objects
/* Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value. */
const OBJ1 = { name:"om", age:20, nationality:"indian"};
const { name:myname, age:myagre, nationality:mynationality} = OBJ1; 
console.log(`HAY! YO ${myname}, ${agmyagree}, ${mynationality}`)
/* You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34. */



// Use Destructuring Assignment to Assign Variables from Nested Objects
const user = {
  name:"om", 
  age:20, 
  nationality:"indian",
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
const { name, age, nationality, johnDoe} = user;
console.log(`HAY! YO ${name}, ${age}, ${nationality}, ${johnDoe.age}`)
/* And here's how you can assign an object properties' values to variables with different names: */
const { johnDoe: { age: userAge, email: userEmail }} = user;
/* example */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
console.log(lowToday)



// Use Destructuring Assignment to Assign Variables from Arrays
/* One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. */
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); 
/* The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index: */
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
/* Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a. */
let a = 8, b = 6;
[b , a] = [a, b]



// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
/* In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array. */
const source = [1,2,3,4,5,6,7,8,9,10];
let [ a, b,,,c, ...rest ] = source
console.log(c)
/* Variables a and b take the first and second values from the array. After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array. */
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b,...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);


// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const profileUpdate = ({ name, age, nationality, location }) => { }
/* This effectively destructures the object sent into the function. This can also be done in-place: */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;
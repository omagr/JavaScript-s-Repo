// ES6 - ECMAScript 6
// 

// Create Strings using Template Literals
/* A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier. Template literals allow you to create multi-line strings and to use string interpolation features to create strings. */
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting); // Hello, my name is Zodiac Hasbro! 
                      //  and I am 56 years old..
/* A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings. */





// Write Concise Object Literal Declarations Using Object Property Shorthand
/* ES6 adds some nice support for easily defining object literals. */
const getMousePosition = (x, y) => ({ x, y });
/* getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax: */





// Write Concise Declarative Functions with ES6
/* With ES6, you can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax: */
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear); 






// Use class Syntax to Define a Constructor Function
/* ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc. In ES5, we usually define a constructor function and use the new keyword to instantiate an object.*/
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
/* The class syntax simply replaces the constructor function creation:*/
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
/* The class syntax simply replaces the constructor function creation */
/* It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object. Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above. The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification. */
// Only change code below this line
class Vegetable  {
  constructor(veg) {
    this.name = veg;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);






// Use getters and setters to Control Access to an Object
/* You can obtain values from an object and set the value of a property within an object. These are classically called getters and setters. Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable. Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely. */
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
/* The console would display the strings anonymous and newAuthor. Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private. */

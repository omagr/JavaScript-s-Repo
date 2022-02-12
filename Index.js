// Build JavaScript Objects
/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.*/
const Object = {
  PROPERTIES: VALUES,
  "name": "Whiskers",
  "legs": 4.78,
  "tails": 1,
  "enemies": ["Water", "Dogs"],
  make: "Ford",
  5: "five",
  "model": "focus"
};


// Accessing Object Properties with Dot Notation
var testObj = {
  "hat": "ballcap",
  "s hirt": "jersey",
  "soes": "cleats"
};
var hatValue = testObj.hat;      // ballcap
var shirtValue = testObj["s hirt"];    // jersey



// Accessing Object Properties with Variables
/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table. */
const someObj = {
  propName: "John"
};
function propPrefix(str) {
  const s = "prop";
  return s + str;
}
const someProp = propPrefix("Name");
console.log(someObj[someProp]);


// Updating Object Properties
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
myDog["legs"] = "Happy Coder";


// Add New Properties to a JavaScript Object
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog['bark'] = "woof!"
myDog.dark = "ooof!"


// Delete Properties from a JavaScript Object
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
delete ourDog.bark;


// Using Objects for Lookups
/* Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range. */
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    delta: "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("foxtrot"));
console.log(phoneticLookup("delta"));




// Testing Objects for Properties
/* Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not. */
const myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");







// Manipulating Complex Objects
/* Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects. */
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "YouTube video"
    ]
  }
];



// Accessing Nested Objects
/* The sub-properties of objects can be accessed by chaining together the dot or bracket notation. */
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;


// Accessing Nested Arrays
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];
// Only change code below this line
var secondTree = myPlants[1].list[1]; // Change this line
console.log(secondTree)


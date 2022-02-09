// Store Multiple Values in one Variable using JavaScript Arrays
    /* With JavaScript array variables, we can store several pieces of data in one place. */
const myArray = ["peanut butter", "jelly", "bread", 1, 2, 3, 0.0, 0.1, 0.2, true, undefined];
const myArray = new Array("jelly", "bread", 1, 2, 3, 0.0, 0.1);



// Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];
    /* This is also called a multi-dimensional array. */



// Access Array Data with Indexes
const array = [50, 60, 70];
array[0];
const data = array[1];



// Modify Array Data With Indexes
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].



// Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
arr[3]; --> [[10, 11, 12], 13, 14]
arr[3][0]; --> [10, 11, 12]
arr[3][0][1]; --> 11



// ----------------------------------- operations --------------------------------------- 

// Manipulate Arrays With push() = Adding an element to the end of an array
const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);



// Manipulate Arrays With unshift() = Adding an element to the beginning of an array
const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy");
console.log(ourArray); --> ["Happy", "Stimpson", "J", "cat"]



// Manipulate Arrays With pop() =  Removing an element from the end of an array
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); --> 6
console.log(threeArr); --> [1,4]



// Manipulate Arrays With shift() = Removing an element from the beginning of an array
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray); --> ["J", ["cat"]]
console.log(removedFromOurArray); --> "Stimpson"



// Manipulate Arrays With  indexOf() = Finding an index of an element in the array
let ourArray = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas.indexOf('North Sea');
console.log(index); // 2



// Manipulate Arrays With Array.isArray()
let ourArray = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(Array.isArray(seas)); // true



// Manipulate Arrays With at() = takes an integer value and returns the item at that index
const ourArray = [5, 12, 8, 130, 44];
let index = -2;
console.log(ourArray.at(index)); // 130



// Manipulate Arrays With _concat(_) = method is used to merge two or more arrays.
const ourArray = ['a', 'b', 'c'];
const ourArray_1 = ['d', 'e', 'f'];
const ourArray_2 = ourArray.concat(ourArray_1); 
console.log(ourArray_2); // ["a", "b", "c", "d", "e", "f"]



// Manipulate Arrays With _copyWithin(_) = method shallow copies part of an array to another location in the same array and returns it without modifying its length.
const ourArray = ['a', 'b', 'c', 'd', 'e'];
console.log(ourArray.copyWithin(0, 3, 4)); // ["d", "b", "c", "d", "e"]
console.log(ourArray.copyWithin(1, 3)); // ["d", "d", "e", "d", "e"]



// Manipulate Arrays With entries() = method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value); // [0, "a"]



// Manipulate Arrays With every() = method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true



// Manipulate Arrays With fill() = method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
const array1 = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 4)); // expected output: [1, 2, 0, 0]
console.log(array1.fill(5, 1)); // expected output: [1, 5, 5, 5]



// Manipulate Arrays With filter() = method creates a new array with all elements that pass the test implemented by the provided function.
function isBigEnough(value) { return value >= 10}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) // filtered is [12, 130, 44]
  


// Manipulate Arrays With find() = method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found); // expected output: 12



// Manipulate Arrays With findIndex() = method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // expected output: 3



// Manipulate Arrays With flat() = method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: [0, 1, 2, 3, 4]



// Manipulate Arrays With forEach() = method executes a provided function once for each array element.
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element)); // expected output: "a" // expected output: "b" // expected output: "c"



// Manipulate Arrays With Array.from() = static method creates a new, shallow-copied Array instance from an array-like or iterable object
console.log(Array.from('foo')); // expected output: Array ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x)); // expected output: Array [2, 4, 6]



// Manipulate Arrays With includes() = method determines whether an array includes a certain value among its entries, returning true or false as appropriate
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // expected output: true



// Manipulate Arrays With indexOf() = method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // expected output: 1
console.log(beasts.indexOf('bison', 2)); // expected output: 4
console.log(beasts.indexOf('giraffe')); // expected output: -1



// Manipulate Arrays With isArray() = method determines whether the passed value is an Array.
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // fals



// Manipulate Arrays With join() = method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join('')); // expected output: "FireAirWater"
console.log(elements.join('-')); // expected output: "Fire-Air-Water"



// Manipulate Arrays With keys() = method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
for (const key of iterator) {
  console.log(key); // expected output: 0 // expected output: 1 // expected output: 2
}




// Manipulate Arrays With lastIndexOf() = method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3



// Manipulate Arrays With map() = method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]



// Manipulate Arrays With of() = method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments. The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).
Array.of(7); // [7]
Array(7); // array of 7 empty slots
Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3);    // [1, 2, 3]



// Manipulate Arrays With reduce() = method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue; // 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // expected output: 10
console.log(array1.reduce(reducer, 5)); // expected output: 15



// Manipulate Arrays With reduceRight() = method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(array1); // expected output: Array [4, 5, 2, 3, 0, 1]
  


// Manipulate Arrays With reverse() = method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // expected output: "array1:" Array ["one", "two", "three"]
const reversed = array1.reverse();
console.log('reversed:', reversed); // expected output: "reversed:" Array ["three", "two", "one"]
console.log('array1:', array1); // expected output: "array1:" Array ["three", "two", "one"]



// Manipulate Arrays With slice() = method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); // expected output: Array ["camel", "duck"]
console.log(animals.slice()); // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



//  Manipulate Arrays With some() = method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even)); // expected output: true



// Manipulate Arrays With sort() = method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings,
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]



const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]



// Manipulate Arrays With splice() = method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "May"]



// Manipulate Arrays With toString() = method returns a string representing the specified array and its elements.
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); // expected output: "1,2,a,1a"



// Manipulate Arrays With values() = method returns a new array iterator object that contains the values for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value); // expected output: "a" // expected output: "b" // expected output: "c"
}
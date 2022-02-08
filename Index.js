// Escaping Literal Quotes in Strings
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

// Quoting Strings with Single Quotes
const conversation = 'Finn exclaims to Jake, "Algebraic! Let\'s go!"';

// Escape Sequences in Strings
  /*\'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

// Concatenating Strings with concatenation Operator
const ourStr = "I come first. " + "I come second.";

// Concatenating Strings with the Plus Equals Operator
let ourStr = "I come first. ";
ourStr += "I come second.";

// Constructing Strings with Variables
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";

// Appending Variables to Strings
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Find the Length of a String
console.log("Alan Peter".length);
const firstName = "Ada"
console.log(firstName.length);

// Use Bracket Notation to Find the First Character in a String
    /* JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.*/
const firstName = "Charles";
const firstLetter = firstName[0];

// Understand String Immutability
let myStr = "Bob";
myStr[0] = "J";
    /* cannot change the value of myStr to Job, because the contents of myStr cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change myStr would be to assign it with a new string, like this:*/
let myStr = "Bob";
myStr = "Job";

// Use Bracket Notation to Find the Last Character in a String
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

// Use Bracket Notation to Find the Nth-to-Last Character in a String
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
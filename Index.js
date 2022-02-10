// Use Conditional Logic with If Statements
    /* if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.*/
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
test(false);


// Comparison with the Equality Operator (==)
    /* There are many comparison operators in JavaScript. All of these operators return a boolean true or false value. The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.*/
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
1   ==  1
1   ==  2
1   == '1'
"3" ==  3

/* If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other. */

// Comparison with the Strict Equality Operator (===)
    /* Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion. If the values being compared have different types, they are considered unequal, and the strict equality operator will return false. */
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);
3 ===  3  //true
3 === '3' // false

 

// Comparison with the Inequality Operator
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);
1 !=  2  //true
1 != "1" //false
1 != '1' //false
1 != true  //false
0 != false //false


// Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);
3 !==  3  //false
3 !== '3' //true
4 !==  3  //true



// Comparison with the Greater Than Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);
5   >  3  //true
7   > '3' //true
2   >  3  //false
'1' >  9  //false



// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);
6   >=  6  //true
7   >= '3' //true
2   >=  3  //false
'7' >=  9  //fasle


// Comparison with the Less Than Operator
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
2   < 5  //true
'3' < 7  //true
5   < 5  //false
3   < 2  //false
'8' < 4  //false


// Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
testLessOrEqual(10);
4   <= 5  //true
'7' <= 7  //true
5   <= 5  //true
3   <= 2  //false
'8' <= 4  //fasle


// Comparisons with the Logical And Operator
function testLogicalAnd(val) {
if (val <= 50 && val >= 25) {
      return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

 
// Comparisons with the Logical Or Operator
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
      return "Outside";
    }
    return "Inside";
  }
testLogicalOr(15);


// Introducing Else Statements
    /* When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed. */
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);



// Introducing Else If Statements
/* If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements. */
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}



// Logical Order in If Else Statements
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}


// Selecting from Many Options with Switch Statements
    /* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered. case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed. */
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;  
}
console.log(caseInSwitch(3)) //alpha


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
    return answer;  
  }
console.log(switchOfStuff("c")); // stuff


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;  
}
console.log(sequentialSizes(8));


// Returning Boolean Values from Functions
function isLess(a, b) {
  return (a < b)
}
isLess(10, 15);



// Return Early Pattern for Functions
    /* When a return statement is reached, the execution of the current function stops and control returns to the calling location. The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.*/
function myFun() {
console.log("Hello");
return "World";
console.log("byebye");
}
myFun();
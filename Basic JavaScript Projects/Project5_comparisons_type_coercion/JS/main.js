
/*
var student = "Sammy Jones"; // Declared variable 'student', assigned value 'Sammy Jones'

var book = { // Declared object 'book' with dictionary
    title: "Where the Red Fern Grows", // Assigned KVP
    genre: "Drama",                     // Assigned KVP
    pages: 105,                         // Assigned KVP
};

// Typeof Operator

document.write(typeof book); // Displayed in webpage data type of variable 'book'
document.write(typeof "Elder Scrolls"); // Displayed in webpage data type of string "Elder Scrolls"
document.write(typeof student); // Displayed in webpage data type of variable 'student'


// Type Coercion Example

document.write ("LOTR" + 9); // Engaged type coercion by having compute expression with 2 different data types.

// Not a Number (NaN) / isNan() Examples

document.write(0/0); //Displays value 'not-a-number'
document.write( isNaN("banana") ); // Checks whether value is 'not-a-number', if yes, returns 'True', If no returns 'False'
document.write( isNaN("52") ); // Checks whether value is 'not-a-number', in this case 'false'

// Infinite Value Example

function infinite() {
    document.getElementById("infinite").innerHTML = (45E309); // Displays floating point number greater than JavaScript limit, so shows 'Infinity' value
}

// Negative Infinite Value Example

function negInfinite() {
    document.getElementById("neginfinite").innerHTML = (-4.5E308); // Displays a negative floating point greater then JavaScript limit, so shows '-Infinity' value.
}

// Greater than < / Lesser then > Operators

function comp1() {
    document.getElementById("bool1").innerHTML = (100 > 99); // Inserts a result of Greater Than Operator comparison into selected element
}

function comp2() {
    document.getElementById("bool2").innerHTML = (99 < 97); // Inserts a result of Lesser Than Operator comparison into selected element
}


// Console.log Examples

console.log("Here lies a secret message,"); //Displays in Console of Browser
console.log("Bill I am away on holiday, report to Jenny"); //Displays in Console of Browser
console.log("The passcode to the front door is: ") //Displays in Console of Browser
console.log (7 + 13); //Displays a result from expression in Console of Browser
console.log(10 < 9); //Displays a False result from Boolean Comparison in Console of Browser
console.log("The password is 12994"); //Displays in Console of Browser


//Double Equal Sign Examples

document.write( (23+52) == 75); // Checks for equality on both sides of '==' sign
document.write( 44 == 47 - 2 ); // Checks for equality on both sides of '==' sign

*/

// Triple Equal Sign Examples

// Same Data Type & Value

var a = "apple"; //Data Type string
var b = "apple"; // Data Type string
document.write(a === b ); // Both variables compared for Data Type and Value, result 'true'

// Diff Data Type, Diff Value

var c = "cookie"; // data type string
var d = 15; //data type number

document.write( c === d ); // Compares variables checking for equal Data Type and Value, result 'false'

// Diff Data Type, Same Value

var e = "8"; //Data type string
var f = 8; // Data type number

document.write( e === f ); // Returns 'false' since data types different

//Same Data Type, Diff Value

var g = "green"; // Data Type string
var h = "holywhite"; // Date Type string

document.write( g === h ); // Returns 'false' since Values different



//Logical Operators

//AND Operator

document.write(18 < 21 && 180 > 100); // Compares both expressions, both true, so output is true
document.write( 1131 > 1311 && 99 > 89); // Compares both expressions, 1 is false, so output is false
document.write( 13 * 3 > 37 && 18 == 18 && 75 + 5 == 80); //Compares 3 expressions, all are true, output is true

// OR Operator

document.write( 120 > 12 || 100 < 99); //Compares both expressions, since only 1 must be true, output is true
document.write( 1010 < 1001 || 55 > 65 || 2200 - 1000 > 1300 ); // Comapares 3 expressions, none are true so output is false.

// Not Operator

function notFunct () {
    document.getElementById("not").innerHTML = !(10 > 5); // Checks whether expression is true, if it is true, output is 'false'
}

function notFunct2() {
    document.getElementById("not2").innerHTML = !(500 > 600); // Checks if expression is true, output is 'true' because expression is not true.
}
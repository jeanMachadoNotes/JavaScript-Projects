// Math Operations in JS Code
// Function u.sing a Addition Operatio

function additionFunct() { // Adds to value together
  var result = 30915 + 55573; // Declares a variable and assigns sum of two numbers
  document.getElementById("add").innerHTML = 
  "After summing the sold units of the month, we sold " + result + " beanie babies.";  //Inserts str concatenated with value of variable in paragraph with 'math' id.
}

// Function using a Subtraction Operation

function subtractionFunct() {
    var result = 10000 - 1200 - 560 - 130 - 470 - 2000; // Sets result of subtraction to variable 'result'
    document.getElementById("sub").innerHTML = 
    "The months Income - Expenses results in: " + result + " dollars left."; // Concatenates text with 'result' variable and places it inside targeted element.
}

// Function using a Multiplication Operation

function multFunct() {
    var result = 16 * 8; // Sets product to 'result' variable
    document.getElementById("mult").innerHTML = 
    "The movie tickets cost $16, so for 8 people we are looking at: $" + result + 
    " dollars plus tax"; // Sets concatenated string and variable to innerHTML of element with id = 'Math'
}

//Function using a Division Operation

function splitBill() {
    var costPerPerson = 320 / 5; // Sets result of division to variable
    document.getElementById("divide").innerHTML = //Targets innerHTML of the element with id 'Math'
    "After eating at Fogo De Ciao Steakhouse, they split the $320 bill 5 ways resulting in $"
     + costPerPerson + " for each person."; //Concatenates text with value of variable and sets it in target element.
}

//Function using multiple operations

function addmultFunct() {
    var result = (13 + 24) * 5; // Adds and multiplies then sets product to variable 'result'
    document.getElementById("multop").innerHTML =
    " The total bill for a coke ($13) and sandwich ($24) for 5 people is: $" + result + " dollars." // Concatenates text and variable and places in element with id 'Math'
}

// Function using the Modulus Operation

function modFunct() {
    var remainder = 5000 % 255;
    document.getElementById("mod").innerHTML = "The remainder of 5000 divided by 255 is: " + remainder;
}

// Function using the Negation 'Unary' Operator

function profitLoss() {
    var profitGoal = 7000; //declared variable and set value
    var profit = 5672; //declared variable and set value
    var result = profitGoal - profit; //declared variable and set value from subtraction
    document.getElementById("profL").innerHTML = 
    "We have lost profit of: $ " + -result + " this week by not meeting our goal." //set variable and string concat in element on webpage
}

function ageFunct() {
    var age = 18; //Declared variable 'Age' with value 18.
    var drinkAge = 21; // Declared the variable 'drinkAge' as legal age of drinking
    var result = age - drinkAge; // Determined how far away from being legal age of drinking, set difference to 'result' variable
    document.getElementById("age").innerHTML = "She is " + -result + " years away from being able to drink legally."; //displayed with concat string in target element the value of 'result', added negation operator to turn negative to positive and make sense in reading. 
}

// Increment Operator

function incrNum() {
    var b = 25; // Declared variable 'b' and assigned value '25'
    b++; // Incremented 'b' and assigns to variable
    document.getElementById("incrNum").innerHTML = b; //Displayed variable 'b', now value '26'
    b++; // Incremented 'b' and assigns to variable new value
    document.getElementById("incrNum").innerHTML = b; //Displayed variable 'b', now value '27'
    b++; // Incremented 'b' and assigns to variable new value
    document.getElementById("incrNum").innerHTML = "This number started at ' 25 ' but has been incremented 3 times and now is: " + b; //Displayed variable 'b', now value '28'
}

// Decrement Operator
function decrNum() {
    var g = 1000; //Declared variable 'g', assigned value '1000'
    g--; //Decremented value of variable 'g'
    document.getElementById("decrNum").innerHTML = g; //Display value of variable 'g', now '999'
    g--; //Decremented value of variable 'g'
    document.getElementById("decrNum").innerHTML = g; //Display value of variable 'g', now '998'
    g--; //Decremented value of variable 'g'
    g--; //Decremented value of variable 'g'
    g--; //Decremented value of variable 'g'
    document.getElementById("decrNum").innerHTML = "This number started as ' 1000 ' but has now but decremented 5 times to: " + g; //Display value of variable 'g', now '995'
}


// Math.random() function
/*
window.alert('Hello World!'); //Displays alert box with text
window.alert( Math.random() ); //Displays alert box with random number
window.alert( Math.random() * 401); //Displays alert box with random numnber between 0-400
*/
//Using Math Object and Methods

//Math Round Function
/*
var randNum = Math.random(); //Declared a variable, assigned it a random number with 'Math.random() method
document.write("Here is a random number: " + randNum + ". "); // Displayed random number wiht concat string
document.write("Here it is rounded : " + Math.round(randNum) + ". "); // Rounded random number to nearest integer with Math.round() method
document.write("Here it is rounded with higher range (up to 20): " + Math.round(randNum * 21) + ". "); //Increased random number range up to 20 and rounding
document.write("Here it is rounded down (range now: 0 to 20): " + Math.floor(randNum * 21) + ". "); //Rounding down to nearest whole integer
document.write("Here it is rounded up (range now: 0 to 20): " + Math.ceil(randNum * 21) + ". "); // Rounding up to nearest integer
*/

// Math Random Function

function randNum() {
    document.getElementById("randNum").innerHTML = Math.random(); //Places into targetted element, result of Math objects ' random ' method. 
                                                                    // Using the function as a variable and directly putting into element, rather than creating and assigning funct result to variables prior.
}
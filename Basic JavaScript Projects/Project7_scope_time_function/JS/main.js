
// Global Variable
var student = "Jane Smith"; //Declared a global variable

function addName() { //Declared a function
    var grade = "Freshman"; //Created local variable
    student += ", "; //Using Addition Assignment Operator, added string to variable
    student += grade; //Added and assigned value of 'grade' variable to 'student' variable
    document.write(student); //Display 'student' variable's value to html.
}

function notifyLunch() { //Declared a function
    document.write ("All " + grade + " must report to cafeteria at 11:00am for lunch, including " + student); //Display on webpage, since refering to local variable wont show up.
    console.log("All " + grade + " must report to cafeteria at 11:00am for lunch, including " + student); //Debugging by using console.log() method.
}

addName(); //Invokes function
notifyLunch(); //Invokes function


// Get Date Function

function nowDate() { //Declaring a function
    if (new Date().getHours() < 12) { //Condition to be checked
       document.getElementById("p1").innerHTML = "good morning"; //Branch to execute once true
    } 
}

// If statement Exercise

var new_driver = { //Declared an object
    fname: "Jane", // Declared many Name-Value pairs, i.e dictionary
    lname: "Smith",
    age: 19,
    hair: "brown",
    eyes: "green"
}

if (new_driver.age < 25) { // Set up a condition to be checked
    document.write("Sorry, " + new_driver.fname + " you are too young to rent a car"); // Code will execute it condition is true
}


// Shertz Function

function ageVerify() {
    driver_age = document.getElementById("user_input").value; // '.value' specifies that the value inputted is saved to variable 'driver_age'
    if (driver_age >= 25) { // Coditional Statement
        var rent = "You can rent a car, let's begin"; //Variable declared
    }
    else { //Branching Instuction
        var rent = "You need someone 25+ to rent a car"; //Variable declared
    }
    document.getElementById("response").innerHTML = rent; //Return to element value of 'rent' variable
}

//Else If

function Time_function() { //Declares a function
    var Time = new Date().getHours(); //Sets current hours of day into variable
    var Reply; //Declares variable, does not assign
    if (Time < 12 == Time > 0) { //Branching Instruction with conditional statement to check
        Reply = "Good morning! How about some coffee?"; //Executes if conition is true.
    }
    else if (Time >= 18 == Time < 18) { // Only executed if above 'if' statement is false.
        Reply = "Good afternoon! Lunch time!";
    }
    else { //Executes if condition to be checked is false
        Reply = "Good evening! Ready for dinner?"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//Example 2

function batCheck() { //Declared a function
    var user_bat = document.getElementById("bat_input").value; //Declared variable, assigned input of user from HTML Input element
    var battery_stat; //Declared variable, assign values later on

    if (user_bat >= 80) { //Branching instruction with condition statement
        battery_stat = "You are good to go!"; //If true, runs assignment
    }
    else if (user_bat >= 65) { //Branching instruction with condition statement
        battery_stat = "You should charge a little, if not you'll be ok"; //If first instruction is false, runs assignment
    }
    else {  //Branching instruction with condition statement
        battery_stat = "You should charge now"; //If all conditions false, runs assigment
    }
    document.getElementById("battery_status").innerHTML = battery_stat; //Sets into target element, variable value
}
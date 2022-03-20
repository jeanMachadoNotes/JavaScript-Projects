//Project 10 Drills//


// While Loop - Repeat while this condition is true, basically a repeating 'If' statement, more condition focused. 'While' this is true, do this [code]

function countTen() { //Declaring a function
    var number = ""; //Declared a variable with empty value
    var z = 60; //Declared variable
    var counter = 1; //Declared 'counter' variable to count iterations of loop

    while (z > 0) { //Loop statement with condition

        number += "<br>" + "Iteration: " + counter + " = " + z; //Assign to empty valued variable a concat
        z--; //Decrement variable
        counter = counter + 1; //Add 1 to counter at end of time through.

    }
    document.getElementById("Loop").innerHTML = number; //Inserts value of 'number' variable resulting from While Loops. Reason this phrase can output is because 'number' is local to entire function, so can access.
}

///////// Example 2 ////////

function while_Function() {
    let battery = 15;
    while (battery < 80) { //Runs code 'while' battery less than 80%
        document.getElementById("message").innerHTML += "Battery at: " + battery +"% keep charging <br>";
        battery+= 15; //Increment by 15
    }
    document.getElementById("message").innerHTML += "Battery at " + battery + "%, You are good to unplug" //Displays when battery greater than 80%
}

// String.Length

function nameFunct() {
    var name = document.getElementById("name").value;
    var nameLength = name.length;
    document.getElementById("fullName").innerHTML = "Your name: " + "'" + name + "'" + " is " + nameLength + " characters long!" + "<br> *spaces also count as character";
}

// For Loop - Repeat for known quantity of times, iteration focused. 'For' this long, do this [code]

function for_Loop() { //Declared a function
    var instr_list = ["Guitar", "Piano", "Violin", "Organ", "Saxaphone", "Harmonica", "Synthesizer", "Ukulele"]; //Declared an array of items
    var instrument = ""; //Declared an empty variable to store array items in.
    var counter; //Declared counter variable.
    
    for (counter = 0; counter < instr_list.length; counter++) { //Declared a loop, Assigned counter start value, conditional statement, and after iteration action (increment counter)
        instrument = instrument + instr_list[counter] + ", <br>"; //Assigning value of element at index position to empty variable, concatenating on each iteration.
    }

    document.getElementById("List_of_Instruments").innerHTML = instrument; //Displaying to element, result of loop, assigning
}

// Array  - A collection of related objects, organized in sequence, in rows and columns.

function array_Function() { //Declared a function
    var client_1 = []; //Created an array object, empty value
    client_1[0] = "John"; //Assigned Index 0 string value
    client_1[1] = "Peters"; //Assigned Index 1 string value
    client_1[2] = "male"; //Assigned Index 2 string value
    client_1[3] = "j.peters@yahoo.com"; //Assigned Index 3 string value
    client_1[4] = "888-555-1313"; //Assigned Index 4 string value
    //Output desired concat to element.
    document.getElementById("Array").innerHTML = "Meeting with " + client_1[0] + " " + client_1[1] + " at 3:00pm." +
     "<br> He can be reached at " + client_1[4] + ".";
}

///////// Example 2 ////////

const fav_film = []; //Declared an array object
fav_film[0] = "The Godfather "; //Object index and value
fav_film[1] = "The Pianist ";
fav_film[2] = "Some Kind of Wonderful ";
fav_film[3] = "Argo ";
fav_film[4] = "Meet Joe Black ";

function array_Function2() { 
    document.getElementById("item").innerHTML = fav_film[4]; //Input into HTML referenced value of element

}

// Const Keyword - A reserved word which specifies a spot in memory where the value there does not change over time.

function constant_function() {
    const person = { //Declared an object, with dictionary below (collection of Key-Value Pairs)
        fname: "Jessica",
        lname: "Wax",
        age: 22,
        hair: "brown",
        eyes: "hazel"
    }
    person.eyes = "green"; //Changed property value
    person.build = "slim"; //Added new property with value
    
    document.getElementById("Constant").innerHTML = "The prettiest " + person.eyes + //Insert concat str into element of target ID.
    " eyes, <br> a woman so bright. <br>" + person.fname + 
    " was her name, <br> a youthful " + person.build + " light."; 
}

// Example 2 //

function constant_function2() {//Declared a function.
    const guard = { //Declared an object const with KVP's
        first_name: "John ",
        last_name: "Snow ",
        post: "Steward ",
        senior: "Lord Commander Mormont ",
        location: "The Wall "
    }
    guard.weapon = "Dragon Glass Blade "; //Guard now has a weapon
    guard.senior = "Master Aemon "; //Reassigned guard to new master

    document.getElementById("Constant2").innerHTML = "The guard known as " + guard.first_name + guard.last_name + "is a " + guard.post + "for " + guard.senior + "who was awarded a " + guard.weapon; //Concat str to put into HTML element.
}




// Let Keyword 

function let_Funct() { //Declared a function
    var x = 0; //Declares a variable, start value for while loop
    var b = " "; //Declared variable with empty value

    while (x < 25) { //Loop instruction with conditional statement
        let a = ","; //Variable with block scope, using 'let' keyword, means only accessible within this code block of 'while' loop
        var t = "this variable has no block-scope"; //Variable without blockscope, can be access outside of while loop.
        b += x + a + " "; //Assing to 'b' value of 'x' and 'a' with str.
        x++; //Increment 'x' by 1.
        
    }
    document.getElementById("output").innerHTML = b; //Display to html element, value of 'b'
    alert(t); //Showcasing how can access variable 't', created with 'var' keyword.
    alert(a); //Testing blockscope by trying to get value with alert() method, brings up error in console.
    
}


///////// Example 2 ////////

var z = 10; //Declared Global Variable
function let_Funct2() {
    var age = 5; //Declared local variable, function scope'd
    let name = "Jane "; //Declared local variable, function scope'd
    while (age < z) {
        let ride = "Space Mountain " //Declared local variable with block scope.
        document.getElementById("letkw").innerHTML += name + "at " + age + " you are not old enough to ride " + ride + "<br>";
        age++ //Increments
    }
    /*document.getElementById("letkw").innerHTML = name + "you can ride " + ride;*/ //Wont display, bcz utilizing var 'ride' which has block scope.
    document.getElementById("letkw").innerHTML += name + "you can ride Space Mountain"; //Fix 

}

// Return Statement

function testReturn() { //Declared a function

    document.getElementById("response").innerHTML = vidGame(); //Assign result of function to element in HTML

    function vidGame() { //Declared function
        user_game = document.getElementById("vidgame").value; //Variable assigned value of user input from HTML
        return "Nice one! " + user_game + " is a great title for sure."; //Return concat str to where function called, also stops function from running further.

    }
}

// Example 2 //
function return_function() {
    document.getElementById('return').innerHTML = return_fullname("Tyrion ", "Lannister "); //Calls function, provided arguments, inserts result into HTML

    function return_fullname(fname, lname) { //Function definition
        return fname + lname; //Give this value back to where it was called
    }
}


// Object Assignment



let phone = { //Declared an object, a data structure  used to store different types of data.
    //Object Properties
    model: "S22 Ultra ",
    brand: "Samsung ",
    display: "120Hz OLED ",
    resolution: "4k ",
    cpu: "SnapDragon 8 Gen 1 ",
    storage: 250,
    price: 1099.99,
    release: "02/01/2022 ",
    //Object Methods
    info: function() { 
        return "The " + this.brand + " " + this.model + " will release on " + this.release + " for " + this.price + ".";  
    },
    specs: function() {
        return "With a " + this.resolution + " " + this.display + " display, " + this.cpu + " chip, " + this.storage + "GB of storage. This is a powerhouse!";
    }
};

function productInfo() { //Declared function
    document.getElementById("info").innerHTML = phone.info(); //Invokes object method, returned a value, inserts value at desired element
}

function productInfo2() {
    document.getElementById("info").innerHTML = phone.specs(); //Invokes object method, returned a value, inserts value at desired element
}

let home = { //Declared an object
    //Object properties
    type: "house ",
    levels: 2,
    design: "traditional ",
    year_built: 2005,
    //Object Method
    sell: function() {
        return "A " + this.levels + " story " + this.design + this.type + "from " + this.year_built + " is now on the market!";
    }
    
}

document.getElementById("sale").innerHTML = home.sell(); //Invoke object methods, insert result into HTML element


///////// Example 2 ////////

//Declared a function
function function_Object() {
    let student = { //Declared an object, data structure to store different data types
        name: "Bobby ", //string data type
        age: 18, //number data type
        gpa: 4.0, //number data type
        graduating: true, //boolean data type
        graduate: function () { //function data type
            return this.name + "has obtained a " + this.gpa + " grade point average. So it is " + this.graduating + " that he will be graduating";
            
        }
    } 
    document.getElementById("obj2").innerHTML = student.graduate();
}





//Break Statement

function loopFunct() { //Declared function
    var text = ""; //Declared empty variable, stores text from loop.

    for ( let a = 0; a < 15; a++ ) { //Loop counter, condition, & incrementor
        if ( a > 5 ) {  //If statement, with condition
            text += "'If' condition true, reached break point, value: " + a; //Add and assign concat string.
            break //Breaks loop from continuing. 
        }
        text += "Time through loop, value: " + a + "<br>"; //Add and assign concat string.   
    }
    document.getElementById("loop").innerHTML = text; //Inserts variable's value into target HTML
}

///////// Example 2 ////////

function break_function() { 
    for (time = 8; time < 18; time++) { // Continued below code for specified amount of time.
        if (time === 12) { break } //Breaks loop at 12 "lunch time"
        document.getElementById("work").innerHTML += "It is " + time + " so keep working <br>"; //Output message each iteration
    }
}


//Continue Statement
function loop2Funct() { //Declared variable
    let b = 0; //Declared counter variable with value
    for (b = 0; 10 > b; b++) { //Loop counter, conditional statement, and incrementor
        if ( b === 5) { //If statement to be checked.
            document.getElementById("loop2").innerHTML += "'If' is TRUE so Skipped " + b + "<br>"; //Let's know, if statment TRUE by displaying on webpage
            continue //Skips over current iteration, starts loop at top. Almost say, 'start again'
        }
        document.getElementById("loop2").innerHTML += " You rock: " + b + "<br>"; //Inserts concat string into HTML target element.
    }
}

///////// Example 2 ////////

function continue_Function() {
    for (time = 8; time < 18; time++) {
        if ( time == 12 ) { continue } //Break iteration at 12 "lunch"
        if ( time == 15 ) { continue } //Breaks iteration at 3 "snack"
        document.getElementById("work2").innerHTML += "It is " + time + " so keep working <br>"; //Output message each iteration
    }
}


// Project 10 Assignment Submission //

// While Loop //

function foodTemp() { //Declare a function
    let water_temp = 68; //Declared and assign variable
    let boil = 212; //Declared and assign variable
    let state = ""; //Declared empty value variable.

    while (water_temp < boil) { //Loop instruction with conditional statement
        state += "Current temp: " + water_temp + ", keep increasing. <br>"; //Add and Assigns string to variable
        water_temp += 25 //Increments value by 25
    } 
    state += "<br> Water boiling: " + water_temp + ", do step 2. <br> <br> 2. Add ramen noodles" //Runs when while loop FALSE
    document.getElementById("reply").innerHTML = state; //Print to webpage, value of 'state' variable each time.

}

// Array

const eurocity = [ //Declared an Array Object
    "London", //Element Index 0
    "Paris", //Element Index 1
    "Rome", //Element Index 2
    "Istanbul", //Element Index 3
    "Berlin", //Element Index 4
    "Moscow", //Element Index 5
    "Barcelona", //Element Index 6
    "Milan" //Element Index 7
]; 

// For Loop + Array
function travelFunct() {
    var city = "";
    //To display each element of the array in webpage.
    for (counter = 0; counter < eurocity.length; counter++) {
        city += eurocity[counter] + ", <br>"; //Assigns to variable city name at index position.
    }
    document.getElementById("citylist").innerHTML = city;
}

// Let Keyword

let backpack = { //Declaring an object with 'let' keyword, able to have block-scope
    material: "canvas",
    pockets: 4,
    zipper: "YKK3",
    type: "travel",
    size: 31
}

function bpSpecs() { //Declared function which inputs concat of object values into HTML element.
    document.getElementById("bplist").innerHTML = "The backpack is made of " + backpack.material + " with " + backpack.pockets + " pockets. It is " + backpack.size
+ " litters, perfect for " + backpack.type + "."}
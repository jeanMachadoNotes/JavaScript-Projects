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

// Return Statement

function testReturn() { //Declared a function

    document.getElementById("response").innerHTML = vidGame(); //Assign result of function to element in HTML

    function vidGame() { //Declared function
        user_game = document.getElementById("vidgame").value; //Variable assigned value of user input from HTML
        return "Nice one! " + user_game + " is a great title for sure."; //Return concat str to where function called, also stops function from running further.

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
        city += eurocity[counter] + ", <br>"; 
    }
    document.getElementById("citylist").innerHTML = city;
}

// Let Keyword

let backpack = {
    material: "canvas",
    pockets: 4,
    zipper: "YKK3",
    type: "travel",
    size: 31
}

function bpSpecs() {
    document.getElementById("bplist").innerHTML = "The backpack is made of " + backpack.material + " with " + backpack.pockets + " pockets. It is " + backpack.size
+ " litters, perfect for " + backpack.type + "."}
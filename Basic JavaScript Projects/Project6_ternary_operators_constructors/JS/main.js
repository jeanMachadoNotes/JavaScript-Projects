function Ride_Function() {
    var Height, Can_ride; // Declaring 2 variables in one line
    Height = document.getElementById("Height").value; //This variable will be set to whatever user inputs into input element
    Can_ride = (Height < 52)? "You are too short":"You are tall enough"; // Variable "Can_ride's" value based on Conditional operator, 2 options listed after.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride"; //Can_ride's value is concat with str and inserted into target element.
}



// Vote Age Function

function voteAge_Function () { //Declared a function named 'voteAge_Function'
    var Age; // Declared a variable
    var Yes_vote; // Declared a variable
    Age = document.getElementById("Age").value; // Assigned value of user input number to variable
    Yes_vote = (Age >= 18)? "Great, you are old enough":"Sorry, you are too young"; // Assigned value of either str1 or str2 based on conditional operator.
    document.getElementById("Vote").innerHTML = Yes_vote + " to vote." //Insert value of variable concatenated with str to select element.
}

// Constructor Exercise

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a " + Jack.Vehicle_Color + "-colored "
        + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
}

// New Keyword Example


function Student(Fname, Lname, Age, Grade) {
    this.Student_FirstName = Fname;
    this.Student_LastName = Lname;
    this.Student_Age = Age;
    this.Student_Grade = Grade;
}

var John = new Student("John", "Smith", 15, 10);
var Suzy = new Student("Suzy", "Tricks", 16, 11);
var Jen = new Student("Jennifer", "Wilmington", 14, 9);
var Ralph = new Student("Ralphen", "Lorenzo", 17, 12);

function classFunct() {
    document.getElementById("New_and_This").innerHTML = "Johns info is: First Name: " + John.Student_FirstName + 
    " Last Name: " + John.Student_LastName + " Age: " + John.Student_Age + " Grade: " + John.Student_Grade;   
    
}
/*
// Reserved Keyword Test 
var void = "334";
document.write(void);
*/


// Object Excercise

var person = { //Created an object
    firstName: "Steven",
    lastName: "Striker",
    age: 17,
    height: 5.5
}

document.write(person.firstName + " " + person.lastName); //Displayed object properties

var car = {brand: "ford", model:"challenger", color: "red", name:"Red Lightning"} //Created an object on single line

document.write("<br>" + "They call my car: " + car.name); //Displayed str with select object property



// Object Constructor Function Example
// Allows for creation of an 'object type' that can be used to make 'many' objects, instead of 1 like before.

function Car(brand, model, color, name) /*Function name and its parameters*/ {
    this.carBrand = brand; //Declaring new variable with 'this' before it (placeholder for future object name), that points to each earlier parameter.
    this.carModel = model;
    this.carColor = color;
    this.carName = name;
}

//Create object, Call Constructor with 'new' keyword

var myCar = new Car("Chevorlet", "Spark", "blue", "LilBMW");

//Display object

document.write("<br> I can my " + myCar.carColor + " " + myCar.carBrand + " " + myCar.carModel + " my " + myCar.carName);

//Created another instance of 'object type'

var momCar = new Car("Honda", "Civic", "black"); //Left last field out on purpose

//Display object properties

document.write("<br> My moms car is a " + momCar.carBrand + " " + momCar.carModel + " in " + momCar.carColor + " which she calls " + momCar.carName);

//Add in missing field to single object & re-display

momCar.carName = "ol Broky";

document.write("<br> She calls it '" +momCar.carName + "'");

//created another instance of object

var dadCar = new Car("Mercedes","C-Class", "black", "Dark Knight");

//display object

document.write("<br> My Dad drives a " + dadCar.carModel + " " + dadCar.carBrand + " in " + dadCar.carColor);


// Nested Function Exercise

function myText() { // Declared a function
    document.getElementById("Nested_Function").innerHTML = text(); //Targeted element, will receive result of "text()" function
    function text() { //Declare function
        var txt1 = "Today"; //Declare and assign string to variable
        var txt2 = "I learned";
        var txt3 = "about";
        var txt4 = "nested functions";
        var my_phrase = txt1 + " " + txt2 + " " + txt3 + " " + txt4; //Declared variable and assigned Concat of prev variables 
        function appendText() { //Declare Nested function
            var txt5 = ", I did it!"; //Declared variable
            my_phrase += txt5; //Added new string to concatenated string of 'my_phrase' variable
        } 
        appendText(); //Invoke Nested function
        return my_phrase; //Return newly modified variable to parent function 'text()'
    }

}

    //Nested Function #2

function myBasic_Function() {

    document.getElementById("Nested_Function2").innerHTML = innerFunct(); //Inserts in to target element, result of functions below.

    function innerFunct() {
        var tv = { //Creates object "tv"
            brand: "LG",
            resolution: '4K',
            display: "OLED",
            size: 65,
            cost: 699
        }
        var text1;
        function nestFunct() { //Nested Function Concatenates object properties with strings.
            text1 = "Today I bought an " + tv.brand + " " + tv.resolution + " display"
        }
        nestFunct(); // Invoke the nested function
        return text1; // Return variable created in NF to "innerFunct"
    }
}

// Project 6 Challenge

//// Ternary Operator

function chargeCheck() { //Declared a function
    var myDevice = document.getElementById("Device").value; //Variable captures user input
    var Charge = document.getElementById("Charge").value; //Variable captures user input
    var chargeVer = (Charge >= 80)? "is charged enough ": "should be charged now" //Variable stores result of conditional statement
    function returnMess() { //Declared nested function
        document.getElementById("charge_status").innerHTML = "Your " + myDevice + " " + chargeVer; //Outputs concat of string and variable values to select element.
    }
    returnMess(); //Invokes nested function
}

//// Constructor

function Backpack(Brand, Size, Type, Material) {
    this.Backpack_brand = Brand;
    this.Backpack_size = Size;
    this.Backpack_type = Type;
    this.Backpack_material - Material;
}

// New Keyword, instance of object

var JanSport = new Backpack("JanSportEDC21", 21, "everyday", "canvas");

var Carhartt = new Backpack("Carhartt", 20, "travel", "canvas");

var Rains = new Backpack("Rains", 17, "office", "leather");

// Function to Display new variables

function shopBP() {
    document.getElementById("disBP").innerHTML = "This " + JanSport.Backpack_brand + " backpack is great. The "
     + JanSport.Backpack_size + " litter capcity is plenty for " + JanSport.Backpack_type + " work!";
}

// Nested Function

function phoneChoice() {
   var choiceApple = document.getElementById("Apple").value; //Receives Input Value "iphone"

   function styleChoice() { //Declare a function
        var stylinText; //Create a variable, no assigned value

        function concatText() { //Declare Nested Function
            stylinText = choiceApple + " is a great device"; // Variable declared earlier assigned str concat value
            return stylinText; // Returns newely assigned value of variable to outer function
            }
        concatText(); // Invokes nested function

    document.getElementById("result").innerHTML = "An " + stylinText; //Inserts value into webpage
   }
   styleChoice(); //Invokes Inner function
}
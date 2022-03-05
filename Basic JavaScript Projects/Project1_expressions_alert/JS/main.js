window.alert("Welcome to my Basic JavaScript Projects Submission Assignment")

document.write('Here is some info about my new store. '); //displays some text

var business = "Annie's Soap's", // naming variable and assigning str
    owner = "Annie Smith",      // naming variable and assigning str
    staff1 = "Jane Pop",        // naming variable and assigning str
    staff2 = "Fred Reach",      // naming variable and assigning str
    product = "soap";          // naming variable and assigning str

document.write('The business name is: '); //display some text
document.write(business); //displays value of 'business' variable
document.write(".") //places a period at end of sentence.
document.write(" The staff here are, " + staff1 + " and " + staff2 + " who go by, " + "\"Freddy\" " + "and " + "\"JPop.\" ") //display a combined str of variables with str values

var productSold = 400.52; //Named a variable and assigned a number value
var serviceSold = 232.75; //Named a variable and assigned a number value
var result = productSold + serviceSold; //Expression that added the 2 variables and assigned value to 'result'

// Can also be written
// document.write(400.52 + 232.75);


document.write ("Profits this Week: " + "$" + result + ". "); // Displayed text concatenated with value of 'Result' variable.


// fontcolor() method seems to be no longer in use. SO found this workaround to color output text.

var greenText = "<span style='color:#016712 '>super duper good</span>"; // Names a variable and assigns it value of a string in green font.
document.write("So business has been going " + greenText + "!"); // Displays string added with variable.

function translateES() {
    document.getElementById('spanish').innerHTML=('Hola, ahora estoy diferente.')
};

// Change font color of Variable //

var bookTitle = "The Wonderous Adventures of Manny the Mouse";



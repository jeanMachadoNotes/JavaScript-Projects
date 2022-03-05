function function_A() { // Will insert a concatenated phrase into element with id
    var word = "I AM THE TRUE TITLE!"; //Naming and giving str value to Variable
    var word2 = ", okay I'll stop yelling now."; //Naming and giving str value to Variable
    document.getElementById("wonder").innerHTML =  word + word2 ; //concatenates the 2 variables and inserts in to element with id 'wonder'
}


function changeMe() { //Changes color of text in element with id 'target' to purple.
    document.getElementById('target').style.color = "purple";
}
 //Some examples of expressions (practice)
var age = 12;
var name = "Jannette Smith";
var job = "accountant";

function conCat() { 
    var toplvl = "Lionel Messi, "; // Declares a variable 'toplvl' and assigns vstring value.
        toplvl += "Cristiano Ronaldo, "; // Adds another string value to variable.
        toplvl += "Marcelo, "; // Adds another string value to variable.
    document.getElementById("martian").innerHTML = toplvl; // Inserts value of 'toplvl' in element with id='martian'

}
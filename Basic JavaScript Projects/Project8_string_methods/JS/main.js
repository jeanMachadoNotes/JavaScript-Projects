//Concat Method

function concatSent() {
    var preview_text = "Hi Tom, as you know this Saturday is Elizabeths 3rd birthday, can you ";
    var hidden_text = "bring some cupcakes with plastic forks and plates?  It would be a big help! ";
    var signature_text = "Sincerely, Elizabeths Mom";
    var full_message;
    function concatVar() {
        full_message = preview_text.concat(hidden_text, signature_text);
        return full_message;
    }
    concatVar();
    document.getElementById("full_string").innerHTML = full_message;
}

//Slice Method

function sliceFunct() {
    var new_phone = "Samsung S22 Ultra"; //Declared variable
    var phone_brand = new_phone.slice(0,7); //Declared variable from slice of 'new_phone'
    var phone_model = new_phone.slice(7, 17); //Declared variable from slice of 'new_phone'
    var pb_result; //Declared variable, no value assigned
    var pm_result;  //Declared variable, no value assigned

    function concatMess() { //Declared function
        var text1 = "Your Brand: "; //Declared variable
        var text2 = "Your Model: "; //Declared variable

        function concatMethod() { //Declared nested function for parent 'concatMess()'
            pb_result = text1.concat(phone_brand); //Utilizing concat method, declared new variable assigned with concatenated string
            pm_result = text2.concat(phone_model); //Utilizing concat method, declared new variable assigned with concatenated string
        }

        concatMethod(); //Invokes nested function
    }   
    concatMess(); //Invokes inner function
    document.getElementById("slice1").innerHTML = pb_result; //Input resulting slice and concat into HTML target element.
    document.getElementById("slice2").innerHTML = pm_result; //Input resulting slice and concat into HTML target element.
}

//toUpperCase Method

function caps() {
    var user_input = document.getElementById("user_word").value; //Capturing user input and assigning to variable
    var upper_text = user_input.toUpperCase (); //Takes value and converts to all caps using 'toUpperCase' method
    document.getElementById("result").innerHTML = upper_text + "!";  //Returns user input with concatenate str to target element 
}

//Search Method

function findMe() { //Declared a function
    var list = document.getElementById("guests").innerHTML; //Take all values in from targeted element.
    var guest; //Declared variable
    function searchMethod() { //Declared inner function
        guest = list.search(/waldo/i); //Utilize search method with regular expression as argument, with case-insensitive modifire 'i'
        return guest; //Returned value of index position for earlier search
    }
    searchMethod(); //Invoked innner function
    document.getElementById("search_result").innerHTML = "Yes, at position: " + guest; //Returns starting index position of text seaching for to html element
}

//toString Method

function convertText() {
    var street_add = 1201; //Declared a number variable
    var zip_add = 65012; //Declared a number variable
    var conv_street_add; //Declared variable
    var conv_zip_add; //Declared variable
    function toString_Function() { //Declared a function
        conv_street_add = street_add.toString(); //Assigned value converted to string to variable
        conv_zip_add = zip_add.toString(); //Assigned value converted to string to variable
        return conv_street_add ,conv_zip_add; //return values to variables outside.
    }
    toString_Function();  //Invoke inner function
    document.getElementById("error").innerHTML = "Error Fixed"; //Insert string into target element
    document.getElementById("input").innerHTML = "\" Address provided: " + conv_street_add + " N West Street, Kentucky " + conv_zip_add + "\""; //Insert string into target element
    document.getElementById("message").innerHTML = "You are ready to print"; //Insert string into target element
}

//toPrecision Method

var pi  = 3.14159265359; //Declared starting number variable

function startNumber() { //Declared function, runs on page load, sets 'pi' variable in element
    document.getElementById("dec_num").innerHTML = pi;
}

function shortFunct() { //Declared a function
    document.getElementById("dec_num").innerHTML = pi.toPrecision(3); //Inserts shortned 'pi' value into html element.
}


//toFixed() Method

function roundtoText() { //Declared function
    var sales = 2347.87 //Declared variable with number value
    document.getElementById("start_num").innerHTML = "$" + sales; //Display variable in html element
    function convertNum() { //Declared function
        var str_sales = sales.toFixed(); //Declared variable with rounded number converted to string
        document.getElementById("end_num").innerHTML = "Company Sales this week were "+ str_sales; //Display variable in html element
    }
    convertNum(); //Invoke a function
}

//ValueOf Method

function decipherFunct() { //Declared function
    var OpOrigami = "(1971) Operation Origami: The aim is to surround N Viet rebels in town and fold the borders in, until captures or dead" //Variable declared and assigned
    document.getElementById("decipher_res").innerHTML = OpOrigami.valueOf(); //Original value of string placed in target html.
} 
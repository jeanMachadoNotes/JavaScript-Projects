function countdown() { //Declared a function
    var seconds = document.getElementById("seconds").value; //Captures user input, assigns to variable

    function tick() { //Declared inner function
        seconds = seconds - 1; //Decrements variable by 1
        timer.innerHTML = seconds; //Inserts value into HTML element with id 'timer'. Different syntax of writing equal to 'document.getElementById("timer").innerHTML = seconds '
        var time = setTimeout(tick, 1000); //Invokes function with delay of 1 sec
        if (seconds == -1) { //Condition Check, if true run code
            alert("Time's up!"); //Creates alert window with message
            clearTimeout(time); //function clears time set with 'setTimeout()' 
            timer.innerHTML = ""; //Inserts blank into HTML element.
        }
    }
    tick(); //Invokes tick(); function
}   

// Slideshow JS

var slideIndex = 1; //Declare variable with value
showSlides(slideIndex); //Invokes function with value, should load 1st photo on webpage.



//Next/previous controls
function plusSlides(n) { //Declared function with parameter
    showSlides(slideIndex += n); //Adds and sets argument value to variable
}

// Thumbnail image controls
function currentSlide(n) { //Declared function, with a parameter
    showSlides(slideIndex = n); //Assigns current argument value to variable 
}


function showSlides(n) { //Declared a function with parameter
    var i; //Declared a variable
    var slides = document.getElementsByClassName("mySlides"); //Declared variable containing all elements with class name, so 3
    var dots = document.getElementsByClassName("dot"); //Declared variable containing all elements with class name, so 3
    if (n > slides.length) {slideIndex = 1} //Checks if current position greater than total, if so, sets to beginning position
    if (n < 1) {slideIndex = slides.length} //Checks if current position is less than total, if so, sets to end position
    for (i = 0; i < slides.length; i++) { //Loops through and hides all images
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //Loops through and removes class name 'active' from 'dots', making them lighter colored
    }
    slides[slideIndex-1].style.display = "block"; //Sets current slide to block level apprearance, basically makes visible
    dots[slideIndex-1].className += " active"; //Sets current dot to 'active' class, will have darker grey background.
}   
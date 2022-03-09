
function myGame() { //Function which creates 'Game' object with dictionary, and sets value in targeted element.
    var game = { //Creating object with name 'game'
        name: "Elder Scrolls", //Beginning of Dictionary, a collection of key-value pairs.
        type: "adventure",  
        version: "offline",
        system: "xbox",
        player: 2,
        company: "Bethesda",
    };
    delete game.player; // Deletes the key-value pair with key 'player'
    document.getElementById('Dictionary').innerHTML = game.player; //Sets specified value of key 'system' to location with id 'Dictionary'
}

// Practice 2

function myPhone() { //Creates function 'myPhone' which creates 'phone' object and dictionary
    var phone = { // Declares variable 'phone' with value of dictionary
        brand: "Apple", // KVP in Dictionary
        model: "iPhone 12 Pro Max", // KVP in Dictionary
        cpu: "A13", // KVP in Dictionary
        ram: 8, // KVP in Dictionary
        storage: 128, // KVP in Dictionary
        os: 15.1  // KVP in Dictionary
    };
    delete phone.brand; // Deletes KVP with Key 'brand'
    document.getElementById("Dictionary").innerHTML = "Brand: " + phone.brand + " Model: " + phone.model; //Inserts in to target element a concat of str and values from named keys
}


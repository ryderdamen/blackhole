// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

compile();

function compile() {
    var elem = document.getElementById('main-input');
    elem.addEventListener('keypress', function(e){
      if (e.keyCode == 13) {
        deleteEverything()
      }
    });
}

function funDelete() {
    // Set up randomization
    var randcharacters = '@#$%^&*{}~ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*!{}[]~'
    randcharacters = randcharacters.split();

    // Grab the current sentence
    var sentence = document.getElementById('main-input').value

    // Loop through the sentence characters
    for (var i = 0; i < sentence.split().length; i++) {
        // Pick a random number
        randomNumber = Math.floor(Math.random() * randcharacters.length)  

        // Replace the first 
        randcharacters[randomNumber]
        
    }


}

function deleteEverything() {
    document.getElementById('main-input').value = '';
}

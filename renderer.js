// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

compile();

function compile() {
    var elem = document.getElementById('main-input');
    elem.addEventListener('keypress', function(e){
      if (e.keyCode == 13 && !event.shiftKey) {
        e.preventDefault() // Prevents addition of extra line break
        deleteEverything()
      }
    });
}

// Recursively randomizes characters in a string
function recursivelyRandomizeCharacters(string, positionInString, originalLength) {

    // TODO: Preserve spaces

    var randcharacters = '@#$%^&*{}~AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz@#$%^&*!{}[]~@#$%^&*!{}[]~'.split("")
    let randomNumber = Math.floor(Math.random() * randcharacters.length) 
    var splitSentence = string.split("")

    // Assign a random character, and set the view and the string, unless it's a space
    if (splitSentence[positionInString] !== " ") {
        splitSentence[positionInString] = randcharacters[randomNumber]
    }
    let newSentence = splitSentence.join("")
    document.getElementById('main-input').value = newSentence
    string = newSentence

    // Break recursion
    if (positionInString == 0) {
        recursivelyRandomizeCharactersCallback()
        return
    }

    // Else, call the next string in the set
    setTimeout(()=>{
        recursivelyRandomizeCharacters(string, positionInString - 1, originalLength)
    }, parseInt( 400 / originalLength));

}

// Callback for recursivelyRandomizeCharacters
function recursivelyRandomizeCharactersCallback() {
    document.getElementById('main-input').value = ""
}

// Deletes with a randomization process
function funDelete() {
    // Grab the current sentence and split it
    var sentence = document.getElementById('main-input').value
    var sentenceLength = sentence.split("").length - 1
    recursivelyRandomizeCharacters(sentence, sentenceLength, sentenceLength)
}

function deleteEverything() {
    funDelete()
    // document.getElementById('main-input').value = ""
}


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'inc/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
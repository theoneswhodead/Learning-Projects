

const lettersPattern = /[a-z]/;
let currentGuessCount = 1;
let currentGuess = document.querySelector('#guess' + currentGuessCount);
// let currentLetters = currentGuess.dataset.letters;

document.addEventListener('keydown', (e) => {
    console.log('keypress ' + e.key);
    console.log (currentGuess);
 let keypress = e.key;
 if(keypress.length == 1 && lettersPattern.test(e.key)) {

    console.log('is letter ');
    updateLetter(keypress);
 }
});

const updateLetter = (letter) => {
    let oldletters = currentGuess.dataset.letters;
   // let tileNumber = 
    let newLetters = oldletters + letter;
    let currentTile = newLetters.length;
    currentGuess.dataset.letters = newLetters;
    updateTiles(currentTile, letter);
};

const updateTiles = (tileNumber, letter) => {
    let currentTile = document.querySelector('#guessTile' + tileNumber);

    currentTile.innerHTML = letter;
    
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
//

const game = new Game();
const startButton = document.getElementById('btn__reset');
const keyboardButtons = document.getElementById('qwerty');

startButton.addEventListener('click', (event) => {
  game.startGame();
});


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/

keyboardButtons.addEventListener('click', (e) => {
  if (e.target.className === 'key'){
    console.log(e.target);
  }
});


// Step 11 - check for win

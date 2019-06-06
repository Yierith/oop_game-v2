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

startButton.addEventListener('click', (event) => {
  game.startGame();
});


// Step 10 - check for win

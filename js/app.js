/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameButton = document.getElementById('btn__reset');
const game = new Game();

startGameButton.addEventListener('click', (event) => {
  game.startGame();
});




// Step 8

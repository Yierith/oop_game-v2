/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const startButton = document.getElementById('btn__reset');
const keyboardButtons = document.getElementById('qwerty');
const allowedKeys = 'abcdefghijklmnopqrstuvwxyz'

startButton.addEventListener('click', (event) => {
  game = new Game();
  game.startGame();
});


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
keyboardButtons.addEventListener('click', (e) => {
  if (e.target.className === 'key'){
    const button = e.target;
    const buttonText = e.target.textContent;
    const letterCheck = game.activePhrase.checkLetter(buttonText);
    if (letterCheck){
      button.className = 'chosen';
      game.activePhrase.showMatchedLetter(buttonText);
    }else{
      button.className = 'wrong';
      game.removeLife();
    }
    if(game.checkForWin()){
      game.gameOver(true);
    }
  }
});

/**
* Handles keyboard clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
document.addEventListener('keydown', (e) => {
  let pressedKey = e.key;
  console.log(pressedKey)
  if( allowedKeys.includes(pressedKey) ){
    game.handleInteraction(e)
  }
});

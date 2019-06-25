/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases(){
    return [new Phrase("You can totally do this"),
            new Phrase("Stay foolish to stay sane"),
            new Phrase("I can and I will"),
            new Phrase("Take the risk or lose the chance"),
            new Phrase("Prove them wrong")];
  };

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase(){
    return this.phrases[Math.floor(Math.random()*this.phrases.length)];
  };

  /**
  * Reset the game
  */
  gameReset(){
    let phraseUl = document.getElementsByTagName('UL')[0].innerHTML = '';
    let allButtons = document.getElementsByTagName('button');
    // Iterting over allbuttons from the keyboard ul and changing
    // their class to 'key'
    for(let i = 0; i < allButtons.length; i++){
      allButtons[i].className = 'key';
      allButtons[i].disabled = false;

    }
    const heartImages = document.querySelectorAll('.tries');
    for(let i = 0; i < heartImages.length; i++){
      heartImages[i].firstChild.src = 'images/liveHeart.png';
    }
    // resetting the missed counter
    this.missed = 0;

  }


  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame(){
    game.gameReset();
    // Hiding the overlay
    document.getElementById('overlay').style.display = 'none';
    // Getting a randomPhrase
    this.activePhrase = this.getRandomPhrase();
    // Adding it to the display
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin(){
    // Get all LI with the class letter
    const letterLi = document.querySelectorAll(`.hide.letter`);
    if( letterLi.length > 0  ){
      return false;
    }else{
      return true;
    }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife(){
    const heartImages = document.querySelectorAll('.tries');
    const firstImage = heartImages[this.missed];
    // Changing color of the body when player is guessing wrong
    // for 300 ms and changing it back
    document.querySelector('body').style.backgroundColor = 'coral';
    setTimeout(function(){
      document.querySelector('body').style.backgroundColor = '';
    }, 300);
    // Miss counter -> if miss lower than 4 add a miss
    // If not game is lost.
    if (this.missed < 4){
      heartImages[this.missed].firstChild.src = 'images/lostHeart.png';
      this.missed = this.missed + 1;
    }else{
      heartImages[this.missed].firstChild.src = 'images/lostHeart.png';
      this.gameOver();
    }
  };


  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon){
    // Creating the gameover overlay
    const overlay = document.querySelector('#overlay');
    const overlayH1 = document.querySelector('#game-over-message');
    // Showing the overlay.
    overlay.style.display = '';
    // Showing different messages and colors if the game is lost or won
    if(gameWon){
      overlayH1.textContent = 'Great job!';
      overlay.style.backgroundColor = '#5ac179';
    }else{
      overlayH1.textContent = 'Sorry, better luck next time!';
      overlay.style.backgroundColor = 'coral';
    }
  };

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(event){
    // Getting all keys
    const keys = document.getElementsByClassName('key');
    let letter = event.key;
    let targetKey;
    // Getting the pressed key out of all keys
    for(let key of keys){
      if( key.textContent === event.key){
        targetKey = key;
      }
    }
    // disabling the key
    targetKey.setAttribute('disabled', 'disabled')
    // Adding the class chosen to each key which is in activePhrase
    if ( this.activePhrase.checkLetter(letter) ){
      targetKey.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter)
      // Checking everytime if all letters of the Phrase are revealed and game is won or not
      if(this.checkForWin()){
        this.gameOver(true);
      }
    // Adding the class wrong to each key pressed which is not in activePhrase
    }else{
      targetKey.classList.add('wrong');
      this.removeLife();
    }


  };



}

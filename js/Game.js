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
    let allb = document.getElementsByTagName('button');
    for(let i = 0; i < allb.length; i++){
      allb[i].className = 'key';
    }
    const heartImages = document.querySelectorAll('.tries');
    for(let i = 0; i < heartImages.length; i++){
      heartImages[i].firstChild.src = 'images/liveHeart.png';
    }
    this.missed = 0;

  }


  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame(){
    game.gameReset();
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin(){
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
    const heartOL = document.querySelector('#scoreboard ol');
    const heartImages = document.querySelectorAll('.tries');
    const firstImage = heartImages[this.missed];
    if (this.missed < 4){
      heartImages[this.missed].firstChild.src = 'images/lostHeart.png';
      this.missed = this.missed + 1;
    }else{
      heartImages[this.missed].firstChild.src = 'images/lostHeart.png';
      game.gameOver();
    }
  };


  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon){
    const overlay = document.querySelector('#overlay');
    const overlayH1 = document.querySelector('#game-over-message');
    overlay.style.display = '';
    if(gameWon){
      overlayH1.textContent = 'Great job!';
      overlay.style.backgroundColor = '#5ac179';
    }else{
      overlayH1.textContent = 'Sorry, better luck next time!';
      overlay.style.backgroundColor = 'coral';
    }
  };
}

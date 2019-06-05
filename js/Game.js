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





}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Display phrase on game board
  */
  addPhraseToDisplay(){
    let phraseUl = document.getElementsByTagName('UL')[0];
    for( let i = 0; i < this.phrase.length; i++ ){
      let li = document.createElement('li');
      if( this.phrase[i] != " "){
        li.className = `hide letter ${this.phrase[i]}`;
      }else{
        li.className = `hide space`;
      }
      li.appendChild(document.createTextNode(this.phrase[i]))
      phraseUl.appendChild(li);
    }
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter){

  };


  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){


  };


}

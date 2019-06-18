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
    // Iterating over every letter and adding placeholders to the page
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
    // Checking if the letter is inside the phrase
    for (let i = 0; i < this.phrase.length; i++){
      if(letter == this.phrase[i]){
        return true;
      }
    }
    return false;
  };


  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter){
    // Showing matched letter if phrase includes the letter
    if (this.phrase.includes(letter) ){
      const letterLi = document.querySelectorAll(`.${letter}`);
      for (let li of letterLi) {
        li.classList.remove('hide');
        li.classList.add('show');
      }
    }
  };


}

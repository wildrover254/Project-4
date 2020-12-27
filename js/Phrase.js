 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const ul = document.querySelector('ul');
        let char = Array.from(this.phrase);
        for (let i = 0; i < this.phrase.length; i++) {
            if (char[i] === " "){
                const li = document.createElement('li');
                ul.appendChild(li); 
                li.textContent = `${char[i]}`;
                li.className = "space"
            } else {
                const li = document.createElement('li');
                ul.appendChild(li); 
                li.textContent = `${char[i]}`;
                li. className = `hide letter ${char[i]}`;
            }
        }
    }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        let phraseArray = [];
        for (let i = 0; i < this.phrase.length; i++) {
            phraseArray.push(this.phrase[i]);
        }
        if (phraseArray.includes(letter)){
            return true;
        } else {
            return false;
        }
    }
    
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        if (this.checkLetter(letter) == true) {
            const shw = document.getElementsByClassName(`${letter}`);
            for (let i = 0; i < shw.length; i++) {
                shw[i].classList.remove('hide');
                shw[i].classList.add('show');
            }
            return true;
        } else {
            return false;
        }
    }

 }

        
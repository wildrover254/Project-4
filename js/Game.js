class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
                        new Phrase('Shiny and Chrome'), 
                        new Phrase('One Ring to Rule Them All'), 
                        new Phrase('May the force be with you'), 
                        new Phrase('Did you pay the one'), 
                        new Phrase('Pitter patter')
                        ];
        this.activePhrase = null;
    }

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const num = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[num];
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button) {
        const letter = button.textContent;
        button.setAttribute('disabled', 'true');
        if(this.activePhrase.checkLetter(letter) == true) {
            button.setAttribute('class', 'chosen');
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin() == true) {
                this.gameOver(true);
            }
        } else if (this.activePhrase.checkLetter(letter) == false){
            button.setAttribute('class', 'wrong');
            this.removeLife();
        }
        //console.log(letter);
    }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        let tries = document.getElementsByClassName('tries');
        for (let i = 0; i < tries.length; i++) {
            if (i == this.missed){
            tries[i].innerHTML = '<img src="images/lostHeart.png" alt="Lost Heart Icon" height="35" width="30">';
            }
        }
        this.missed++;
        if (this.missed >= 5) {
            this.gameOver();
        }
    }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        const letters = document.getElementsByClassName('letter');
        const shown = document.getElementsByClassName('show');
        if(shown.length == letters.length) {
            return true;
        } else {
            return false;
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/

    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
        overlay.style.display = 'block';
        if (gameWon == true) {
            overlay.classList.add('win');
            overlay.classList.remove('lose');
            overlay.classList.remove('start');
            message.textContent = 'Congratulations, you win!';
        } else if (this.missed >= 5) {
            overlay.classList.add('lose');
            overlay.classList.remove('win');
            overlay.classList.remove('start');
            message.textContent = 'Sorry, try Again!';
        }
    }
}
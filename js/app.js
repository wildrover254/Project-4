const keyboard = document.getElementById('qwerty');
const board = document.querySelector('ul');
const tries = document.getElementsByClassName('tries');
const keys = document.querySelectorAll('.keyrow button');
const overlay = document.getElementById('overlay');

let game = null;
/**
 * Resets the gameboard on each click
 * Generates a new Game object and starts a game
 */
document.getElementById('btn__reset').addEventListener('click', (e) => {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
    for (let i = 0; i < tries.length; i++) {
        tries[i].innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
    }
    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('class', 'key');
        keys[i].removeAttribute('disabled');
    }
    game = new Game();
    game.startGame();
});

/**
 * Checks to make sure that only a button was clicked
 * Uses that button and calls handleInteraction 
 */
keyboard.addEventListener('click', function(event) {
    let target = event.target;

    if (target.tagName != 'BUTTON') return;

    game.handleInteraction(target);
})

document.addEventListener('keydown', function(event){
    const keyPressed = event.code;
    const keyValue = keyPressed.slice(keyPressed.length - 1).toLowerCase();
    let btn;
    for (let i = 0; i < keys.length; i++){
        if(keyValue === keys[i].textContent) {
            btn = keys[i];
        }
    }
    if (game != null) {
    game.handleInteraction(btn);
    }
})

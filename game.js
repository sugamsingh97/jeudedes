//jeu de des
//initialisation du jeu
function startGame() {
    document.getElementById("game").innerHTML += throwDice().toString();
}

//lancement des des
function throwDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue;
}

//hold round transfer la valeur de des au score du joueur
function holdRound() {
    
}

//restart game
function resetGame() {
    
}


//jeu de des
//initialisation du jeu
let p1TotalScore;
let p2TotalScore;
let p1CurrentScore;
let p2CurrentScore;
let activePlayer = null;
let gameRunning = false;
document.getElementById("active1").style.display = "none";
document.getElementById("active2").style.display = "none";

function startGame() {
    p1CurrentScore = 0;
    p2CurrentScore = 0;
    p1TotalScore = 0;
    p2TotalScore = 0;
    activePlayer = "p1";
    gameRunning = true;
    //hide dice faut faire
    document.getElementById("des").style.display = "none";
    //set active player 1 on UI
    document.getElementById("active1").style.display = "block";
    document.getElementById("active2").style.display = "none";
    //document.getElementById("game").innerHTML += throwDice().toString();
}

//lancement des des
function throwDice() {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    return diceValue === 1 ? 0 : diceValue;
}


//hold round transfer la valeur de des au score du joueur
function holdRound() {
    
}

//restart game
function resetGame() {
    
}


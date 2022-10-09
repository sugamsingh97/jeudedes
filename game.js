//jeu de des
//initialisation du jeu
let p1TotalScore;
let p2TotalScore;
let p1CurrentScore;
let p2CurrentScore;
let activePlayer;
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
    //setting ui reset values
    document.getElementById("p1CurrentScore").innerHTML = p1CurrentScore;
    document.getElementById("p2CurrentScore").innerHTML = p2CurrentScore;
    document.getElementById("p1TotalScore").innerHTML = p1TotalScore;
    document.getElementById("p2TotalScore").innerHTML = p2TotalScore;
}

//lancement des des
function throwDice() {
    
    let diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
        document.getElementById("des").style.display = "none";
        if (activePlayer === "p1") {
            p1CurrentScore = 0;
            document.getElementById("p1CurrentScore").innerHTML = p1CurrentScore;
        } 
        if(activePlayer === "p2") {
            debugger;
            p2CurrentScore = 0;
            document.getElementById("p2CurrentScore").innerHTML = p2CurrentScore;
        }
        debugger;
        next();
    } else {
        if (activePlayer === "p1") {
            
            p1CurrentScore = p1CurrentScore + diceValue;
            document.getElementById("p1CurrentScore").innerHTML = p1CurrentScore;
        } 
        if(activePlayer === "p2") {
            debugger;
            p2CurrentScore = p2CurrentScore + diceValue;
            document.getElementById("p2CurrentScore").innerHTML = p2CurrentScore;
        }
        
        document.getElementById("des").innerHTML = diceValue.toString();
        document.getElementById("des").style.display = "block";
        
    }
    //diceValue === 1 ? document.getElementById("des").style.display = "none" : document.getElementById("des").innerHTML = diceValue.toString();
}


//hold round transfer la valeur de des au score du joueur
function holdRound() {
    
}

//restart game
function resetGame() {
    
}

//Next player
function next() {

    if (activePlayer === "p1") {
        activePlayer = "p2"
        document.getElementById("active2").style.display = "block";
        document.getElementById("active1").style.display = "none";
    } else {
        activePlayer = "p1"
        document.getElementById("active1").style.display = "block";
        document.getElementById("active2").style.display = "none";
    }
}


//jeu de des
//initialisation du jeu
debugger;
const Player = new Object();
Player.name = "p1";
Player.currentScore = 0;
Player.totalScore = 0;


let dice;
let gameRunning = false;
document.getElementById("active1").style.display = "none";
document.getElementById("active2").style.display = "none";
document.getElementById("hold").disabled = "true";
startGame();
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
    document.getElementById("p1c").innerHTML = p1CurrentScore;
    document.getElementById("p2c").innerHTML = p2CurrentScore;
    document.getElementById("p1TotalScore").innerHTML = p1TotalScore;
    document.getElementById("p2TotalScore").innerHTML = p2TotalScore;
    //debugger;
}

//lancement des des
function throwDice() {
    
    let diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
        document.getElementById("des").style.display = "none";
        if (activePlayer === "p1") {
            p1CurrentScore = 0;
            document.getElementById("p1c").innerHTML = p1CurrentScore;
            document.getElementById("hold").disabled = true;
        } 
        if(activePlayer === "p2") {
            p2CurrentScore = 0;
            document.getElementById("p2c").innerHTML = p2CurrentScore;
            document.getElementById("hold").disabled = true;
        }
        next();
    } else {
        //debugger;
        if (activePlayer === "p1") {
            
            p1CurrentScore = p1CurrentScore + diceValue;
            document.getElementById("p1c").innerHTML = p1CurrentScore;
            document.getElementById("hold").disabled = false;
        } 
        if(activePlayer === "p2") {
            p2CurrentScore = p2CurrentScore + diceValue;
            document.getElementById("p2c").innerHTML = p2CurrentScore;
            document.getElementById("hold").disabled = false;
        }
        
        document.getElementById("des").innerHTML = diceValue.toString();
        document.getElementById("des").style.display = "block";
        
    }
    //diceValue === 1 ? document.getElementById("des").style.display = "none" : document.getElementById("des").innerHTML = diceValue.toString();
}


//hold round transfer la valeur de des au score du joueur
function holdRound() {
    if (activePlayer === "p1") {
        p1TotalScore += p1CurrentScore;
        p1CurrentScore = 0;
        dice = 0;
        document.getElementById("des").innerHTML = dice;
        document.getElementById("p1c").innerHTML = p1CurrentScore;
        document.getElementById("p1TotalScore").innerHTML = p1TotalScore;
        if (p1TotalScore >= 100) {
            //p1 won - to do
        } else {
            document.getElementById("hold").disabled = true;
            next();
        }
        
    } else {
        p2TotalScore += p2CurrentScore;
        p2CurrentScore = 0;
        dice = 0;
        document.getElementById("des").innerHTML = dice;
        document.getElementById("p2c").innerHTML = p2CurrentScore;
        document.getElementById("p2TotalScore").innerHTML = p2TotalScore;
        if (p2TotalScore >= 100) {
            // to do p2 won
        }
        else {
            document.getElementById("hold").disabled = true;
            next();
        }
    }
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

//jeu de des
//initialisation du jeu
const Player = [{
    name: "p1",
    currentScore: 0,
    totalScore: 0,
    active: false
},
{
    name: "p2",
    currentScore: 0,
    totalScore: 0,
    active: false
}];
let dice;
let gameRunning = false;

initialiseUi();
startGame();

function startGame() {
    reset();
    gameRunning = true;
    //hide dice faut faire
    hideDice();
    //set active player 1 on UI
    setActivePlayer(Player[0],Player);
    //setting ui reset values
    setCurrentScore(Player[0], Player[0].currentScore);
    setCurrentScore(Player[1], Player[1].currentScore);
    setTotalScore(Player[0], Player[0].totalScore);
    setTotalScore(Player[1], Player[1].totalScore);
    //debugger;
}



//lancement des des
function throwDice() {
    
    document.getElementById("newGame").disabled = false;
    let diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
        hideDice();

        if (Player[0].active) {
            setCurrentScore(Player[0], 0);
            document.getElementById("hold").disabled = true;
        } 
        if(Player[1].active) {
            setCurrentScore(Player[1], 0);
            document.getElementById("hold").disabled = true;
        }
        next();
    } else {
        //debugger;
        if (Player[0].active) {
            Player[0].currentScore += diceValue;
            setCurrentScore(Player[0], Player[0].currentScore);
            document.getElementById("hold").disabled = false;
        } 
        if(Player[1].active) {
            Player[1].currentScore += diceValue;
            setCurrentScore(Player[1], Player[1].currentScore);
            document.getElementById("hold").disabled = false;
        }
        
        document.getElementById("des").innerHTML = diceValue.toString();
        document.getElementById("des").style.display = "block";
        
    }
    //diceValue === 1 ? document.getElementById("des").style.display = "none" : document.getElementById("des").innerHTML = diceValue.toString();
}


//hold round transfer la valeur de des au score du joueur
function holdRound() {
    if (Player[0].active) {
        Player[0].totalScore += Player[0].currentScore;
        Player[0].currentScore = 0;
        dice = 0;
        document.getElementById("des").innerHTML = dice;
        setCurrentScore(Player[0], 0);
        setTotalScore(Player[0], Player[0].totalScore);
        if (Player[0].totalScore >= 100) {
            // to do p1 won
            document.getElementById("active1").classList.remove("material-icons");
            document.getElementById("active1").innerHTML = "a gagne";
            document.getElementById("hold").disabled = true;
            document.getElementById("rollDice").disabled = true;
        } else {
            document.getElementById("hold").disabled = true;
            next();
        }
        
    } else {
        Player[1].totalScore += Player[1].currentScore;
        Player[1].currentScore = 0;
        dice = 0;
        document.getElementById("des").innerHTML = dice;
        setCurrentScore(Player[1], 0);
        setTotalScore(Player[1], Player[1].totalScore);
        if (Player[1].totalScore >= 100) {
            // to do p2 won
            document.getElementById("active2").classList.remove("material-icons");
            document.getElementById("active2").innerHTML = "a gagne";
            document.getElementById("hold").disabled = true;
            document.getElementById("rollDice").disabled = true;
        }
        else {
            document.getElementById("hold").disabled = true;
            next();
        }
    }
}

//Next player
function next() {

    if (Player[0].active) {
        setActivePlayer(Player[1],Player);
    } else {
        setActivePlayer(Player[0],Player);
    }
}
function initialiseUi() {
    document.getElementById("active1").style.display = "none";
    document.getElementById("active2").style.display = "none";
    document.getElementById("hold").disabled = true;
    document.getElementById("newGame").disabled = true;
}
function reset() {
    Player[0].active = true;
    Player[0].totalScore = 0;
    Player[0].currentScore = 0;
    Player[1].active = false;
    Player[1].totalScore = 0;
    Player[1].currentScore = 0;
}

function setTotalScore(player, score) {
    switch (player.name) {
        case "p1":
            document.getElementById("p1TotalScore").innerHTML = score;
            break;
        case "p2":
            document.getElementById("p2TotalScore").innerHTML = score;
            break;
        default:
            break;
    }    
}

function setCurrentScore(player, score) {
    switch (player.name) {
        case "p1":
            document.getElementById("p1c").innerHTML = score;
            break;
        case "p2":
            document.getElementById("p2c").innerHTML = score;;
            break;
        default:
            break;
    }
    
    
}

function setActivePlayer(player, objplayer) {
    debugger;
    switch (player.name) {
        case "p1":
            document.getElementById("active1").style.display = "inline";
            document.getElementById("active2").style.display = "none";
            player.active = true;
            objplayer[1].active = false;
            break;
        case "p2":
            document.getElementById("active2").style.display = "inline";
            document.getElementById("active1").style.display = "none";
            player.active = true;
            objplayer[0].active = false;
            break;
        default:
            break;
    }
}

function hideDice() {
    document.getElementById("des").style.display = "none";
}
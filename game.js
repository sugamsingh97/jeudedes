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
//dice
const diceOne = "<div class='dice-red first-face'><span class='dot'></span></div>";
const diceTwo = "<div class='dice second-face'><span class='dot'></span><span class='dot'></span></div>";
const diceThree = "<div class='dice third-face'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
const diceFour = "<div class='fourth-face dice'><div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div></div>";
const diceFive = "<div class='fifth-face dice'><div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div></div>";
const diceSix = "<div class='sixth-face dice'><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div></div>";

initialiseUi();
startGame();

function startGame() {
    reset();
    gameRunning = true;
    //set active player 1 on UI
    setActivePlayer(Player[0],Player);
    //setting ui reset values
    setCurrentScore(Player[0], Player[0].currentScore);
    setCurrentScore(Player[1], Player[1].currentScore);
    setTotalScore(Player[0], Player[0].totalScore);
    setTotalScore(Player[1], Player[1].totalScore);
    //document.getElementById("rollDice").disabled = false;
    //debugger;
}



//lancement des des
function throwDice() {
    
    document.getElementById("newGame").disabled = false;
    let diceValue = Math.floor(Math.random() * 6) + 1;
    if (diceValue === 1) {
        setDice(diceOne);
        if (Player[0].active) {
            setCurrentScore(Player[0], 0);
            disableButton(document.getElementById("hold"));
        } 
        if(Player[1].active) {
            setCurrentScore(Player[1], 0);
            disableButton(document.getElementById("hold"));
        }
        next();
    } else {
        switch (diceValue) {
            case 1:
                setDice(diceOne);
                if (Player[0].active) {
                    setCurrentScore(Player[0], 0);
                    disableButton(document.getElementById("hold"));
                } 
                if(Player[1].active) {
                    setCurrentScore(Player[1], 0);
                    disableButton(document.getElementById("hold"));
                }
                next();
                break;
            case 2:
                setDice(diceTwo);
                if (Player[0].active) {
                    Player[0].currentScore += diceValue;
                    setCurrentScore(Player[0], Player[0].currentScore);
                    enableButton(document.getElementById("hold"));
                } else {
                    Player[1].currentScore += diceValue;
                    setCurrentScore(Player[1], Player[1].currentScore);
                    enableButton(document.getElementById("hold"));
                }
                break;
            case 3:
                setDice(diceThree);
                if (Player[0].active) {
                    Player[0].currentScore += diceValue;
                    setCurrentScore(Player[0], Player[0].currentScore);
                    enableButton(document.getElementById("hold"));
                } else {
                    Player[1].currentScore += diceValue;
                    setCurrentScore(Player[1], Player[1].currentScore);
                    enableButton(document.getElementById("hold"));
                }
                break;
            case 4:
                setDice(diceFour);
                if (Player[0].active) {
                    Player[0].currentScore += diceValue;
                    setCurrentScore(Player[0], Player[0].currentScore);
                    enableButton(document.getElementById("hold"));
                } else {
                    Player[1].currentScore += diceValue;
                    setCurrentScore(Player[1], Player[1].currentScore);
                    enableButton(document.getElementById("hold"));
                }
                break;
            case 5:
                setDice(diceFive);
                if (Player[0].active) {
                    Player[0].currentScore += diceValue;
                    setCurrentScore(Player[0], Player[0].currentScore);
                    enableButton(document.getElementById("hold"));
                } else {
                    Player[1].currentScore += diceValue;
                    setCurrentScore(Player[1], Player[1].currentScore);
                    enableButton(document.getElementById("hold"));
                }
                break;
            case 6:
                setDice(diceSix);
                document.getElementById("des").innerHTML = diceSix;
                if (Player[0].active) {
                    Player[0].currentScore += diceValue;
                    setCurrentScore(Player[0], Player[0].currentScore);
                    enableButton(document.getElementById("hold"));
                } else {
                    Player[1].currentScore += diceValue;
                    setCurrentScore(Player[1], Player[1].currentScore);
                    enableButton(document.getElementById("hold"));
                }
                break;

            default:
                break;
        }
    }
    //diceValue === 1 ? document.getElementById("des").style.display = "none" : document.getElementById("des").innerHTML = diceValue.toString();
}


function disableButton(button) {
    button.disabled = true;
}
function enableButton(button) {
    button.disabled = false;
}
//hold round transfer la valeur de des au score du joueur
function holdRound() {
    if (Player[0].active) {
        Player[0].totalScore += Player[0].currentScore;
        Player[0].currentScore = 0;
        dice = 0;
        document.getElementById("des").innerHTML = " ";
        setCurrentScore(Player[0], 0);
        setTotalScore(Player[0], Player[0].totalScore);
        if (Player[0].totalScore >= 10) {
           // debugger;
            // to do p1 won
            document.getElementById("active1").classList.remove("material-icons");
            document.getElementById("active1").innerHTML = "a gagné !";
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
        document.getElementById("des").innerHTML = " ";
        setCurrentScore(Player[1], 0);
        setTotalScore(Player[1], Player[1].totalScore);
        if (Player[1].totalScore >= 10) {
            // to do p2 won
            // debugger;
            document.getElementById("active2").classList.remove("material-icons");
            document.getElementById("active2").innerHTML = "a gagné !";
            disableButton(document.getElementById("hold"));
            disableButton(document.getElementById("rollDice"));
        }
        else {
            disableButton(document.getElementById("hold"));
            next();
        }
    }
}

//Next player
function next() {

    if (Player[0].active) {
        setActivePlayer(Player[1],Player);
        Player[0].currentScore = 0;
        document.getElementById("p1c").innerHTML = Player[0].currentScore;
    } else {
        setActivePlayer(Player[0],Player);
        Player[1].currentScore = 0;
        document.getElementById("p2c").innerHTML = Player[1].currentScore;
    }
}
function initialiseUi() {
    document.getElementById("active1").style.display = "none";
    document.getElementById("active2").style.display = "none";
    disableButton(document.getElementById("hold"));
    disableButton(document.getElementById("newGame"));
}
function reset() {
    Player[0].active = true;
    Player[0].totalScore = 0;
    Player[0].currentScore = 0;
    Player[1].active = false;
    Player[1].totalScore = 0;
    Player[1].currentScore = 0;
    enableButton(document.getElementById("rollDice"));
    document.getElementById("active1").classList.add("material-icons");
    document.getElementById("active2").classList.add("material-icons");
    document.getElementById("active1").innerHTML = "fiber_manual_record";
    document.getElementById("active2").innerHTML = "fiber_manual_record";
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
    //debugger;
    switch (player.name) {
        case "p1":
            document.getElementById("active1").style.display = "inline";
            document.getElementById("active2").style.display = "none";
            document.getElementById("active1").innerHTML = "fiber_manual_record"
            document.getElementById("p2").classList.remove("backgroundActive2");
            document.getElementById("p1").classList.add("backgroundActive1");
            player.active = true;
            objplayer[1].active = false;
            break;
        case "p2":
            document.getElementById("active2").style.display = "inline";
            document.getElementById("active1").style.display = "none";
            document.getElementById("active1").innerHTML = "fiber_manual_record"
            document.getElementById("p1").classList.remove("backgroundActive1");
            document.getElementById("p2").classList.add("backgroundActive2");
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


function setDice(diceDigit) {
  document.getElementById("des").innerHTML = diceDigit;
}
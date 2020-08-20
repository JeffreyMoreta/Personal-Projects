//Starting the Scores off at zero for both players
let botScore=0,
	playerScore=0;

//Player chooses Rock, roll for bot weapon choice
document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	checkWhoWon(getRandomWeapon(), "rock");
}

//Player chooses Paper, roll for bot weapon choice
document.getElementById("paper").onclick=playerThrowsPaper;
function playerThrowsPaper(){
	checkWhoWon(getRandomWeapon(), "paper");
}

//Player chooses Scissors, roll for bot weapon choice
document.getElementById("scissors").onclick=playerThrowsScissors;
function playerThrowsScissors(){
	checkWhoWon(getRandomWeapon(), "scissors");
}

//Roll a random weapon for the bot
function getRandomWeapon(){
	let randomNumber = Math.floor(Math.random() * Math.floor(3));
	let botsWeapon = "empty";

	if (randomNumber == 0){
		botsWeapon = "rock";
	}
	else if(randomNumber == 1){
		botsWeapon = "paper";
	}else{
		botsWeapon = "scissors";
	}
	return botsWeapon;
}

//This will figure out if the Bot wins
function checkWhoWon(botsWeapon, playersWeapon){
	if(botsWeapon === playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon == "scissors" && playersWeapon == "paper") ||
		(botsWeapon == "paper" && playersWeapon == "rock") ||
		(botsWeapon == "rock" && playersWeapon == "scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}

function increaseBotScore(){
	botScore += 1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}

function increasePlayerScore(){
	playerScore += 1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("You win this time");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

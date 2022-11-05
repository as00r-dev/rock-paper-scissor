let isThereWinner = false;
let winner = null;
let userPlay = null;
let computerPlay = null;
let userScore = 0;
let computerScore = 0;

mainGame();

function mainGame() {
	alert(`
		Your Score:${userScore} Computer Score:${computerScore}			 
		Computer Choice:${computerPlay}
		`);
	if (isThereWinner) {
		alert(winner);
	} else {
		while (!verifyUserInput()) {
			askValueToUser();
		}
		assignRandomPlayToComputer();
		checkWhoWonAndUpdateScore();
	}
}

// Ask user for input until we get valid input
function askValueToUser() {
	userPlay = prompt(`
            Enter R for Rock.
            Enter P for Paper.
            Enter S for Scissor.
            Other values will cause the prompt to reload!
        `);
}

// Verify user input
function verifyUserInput() {
	if (userPlay === "P" || userPlay === "R" || userPlay === "S") {
		return true;
	} else {
		return false;
	}
}

// Randomly assign a play to computer
function assignRandomPlayToComputer() {
	let randomNumber = Math.floor(Math.random() * 100) + 1;
	if (randomNumber >= 66) {
		computerPlay = "R";
	} else if (randomNumber >= 33) {
		computerPlay = "P";
	} else {
		computerPlay = "S";
	}
}

// To check who won and increase score
function checkWhoWonAndUpdateScore() {
	if (userPlay === computerPlay) {
		checkIfWinnerExists();
	} else if (userPlay === "R" && computerPlay === "P") {
		computerScore++;
	} else if (userPlay === "R" && computerPlay === "S") {
		userScore++;
	} else if (userPlay === "P" && computerPlay === "R") {
		userScore++;
	} else if (userPlay === "P" && computerPlay === "S") {
		computerScore++;
	} else if (userPlay === "S" && computerPlay === "R") {
		computerScore++;
	} else if (userPlay === "S" && computerPlay === "P") {
		userScore++;
	}
	userPlay = null;
	checkIfWinnerExists();
}

// Declare Winner, if there is one
function checkIfWinnerExists() {
	if (userScore === 5) {
		isThereWinner = true;
		userScore = 0;
		computerScore = 0;
		winner = "You Won!";
	} else if (computerScore === 5) {
		isThereWinner = true;
		userScore = 0;
		computerScore = 0;
		winner = "Computer Won!";
	} else {
		isThereWinner = false;
	}
	mainGame();
}

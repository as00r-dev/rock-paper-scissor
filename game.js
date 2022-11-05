let isThereWinner = false;
let winner = null;
let userPlay = null;
let computerPlay = null;
let userScore = 0;
let computerScore = 0;

mainGame();

function mainGame() {
	if (isThereWinner) {
		console.log(winner);
	} else {
		while (!verifyUserInput()) {
			askValueToUser();
			console.log(userPlay);
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

function checkWhoWonAndUpdateScore() {
	if (userPlay === computerPlay) {
		mainGame();
	}
}

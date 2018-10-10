// MAKES SURE THAT THE PAGE NOTIFIER DELETES THE TEXT NODE AFTER IT SHOWS
// MAYBE A DELAY FUNCTIION THAT DELETES TEXT NODE AFTER ONE SECOND OF SHOWING UP ON DOM TREE
// instead of just human won write eg. scissor cuts paper, Human won
var computer, human;
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

function computerLogic() {
	///Asigning computer selection value to R,P or S.
	// Computer random selection of rock or paper or scissors/// 
	computer = (Math.floor(Math.random() * 3));
	if (computer == 0) {
		computer = rock;
		console.log(computer);
	} else if (computer == 1) {
		computer = paper;
		console.log(computer);
	} else if (computer == 2) {
		computer = scissors;
		console.log(computer);
	}
	/////decision logic to identify who wins////////
	if (computer == rock) {
		if (human == rock) {
			drawShow();
			choices();
			console.log("draw");
		} else if (human == paper) {
			humanScore += 1;
			humanWinShow();
			choices();
			console.log("Human Wins");
		} else if (human == scissors) {
			computerScore += 1;
			compWinShow();
			choices();
			console.log("Computer Wins");
		}
		console.log(humanScore);
		console.log(computerScore);
	}
	if (computer == paper) {
		if (human == rock) {
			computerScore += 1;
			compWinShow();
			choices();
			console.log("Computer Wins");
		} else if (human == paper) {
			drawShow();
			choices();
			console.log("draw");
		} else if (human == scissors) {
			humanScore += 1;
			humanWinShow();
			choices();
			console.log("Human Wins");
		}
		console.log(humanScore);
		console.log(computerScore);
	}
	if (computer == scissors) {
		if (human == rock) {
			humanScore += 1;
			humanWinShow();
			choices();
			console.log("Human Wins");
		} else if (human == paper) {
			computerScore += 1;
			compWinShow();
			choices();
			console.log("Computer Wins");
		} else if (human == scissors) {
			drawShow();
			choices();
			console.log("draw");
		}
		console.log(humanScore);
		console.log(computerScore);
	}

	function choices() {
		// inserts computer's choice as text to the DOM
		var compChoiceShow = document.createElement('p');
		var compNode = document.createTextNode(computer);
		compChoiceShow.appendChild(compNode);
		var compNoted = document.getElementById("human");
		// document.getElementById('human').style.padding='0px';
		// document.getElementById('human').style.backgroundColor='red';
		compNoted.appendChild(compChoiceShow);
		// Removes the computers choice from the view
		setTimeout(hideCompChoice, 1500);

		function hideCompChoice() {
			compChoiceShow.removeChild(compNode);
		}
		// inserts human's choice as text to the DOM
		var humanChoiceShow = document.createElement('p');
		var humanNode = document.createTextNode(human);
		humanChoiceShow.appendChild(humanNode);
		var humanNoted = document.getElementById("comp");
		humanNoted.appendChild(humanChoiceShow);
		// Removes the human's choice from the view
		setTimeout(hideHumanChoice, 1500);

		function hideHumanChoice() {
			humanChoiceShow.removeChild(humanNode);
		}
	}

	function compWinShow() {
		var notify = document.createElement('p');
		var node = document.createTextNode("Computer Scored");
		notify.appendChild(node);
		var notified = document.getElementById("outcome");
		notified.appendChild(notify);
		// Removes the computers choice from the view
		setTimeout(removeCompScore, 1500);

		function removeCompScore() {
			notify.removeChild(node);
		}
	}

	function humanWinShow() {
		var notify = document.createElement('p');
		var node = document.createTextNode("Human Scored");
		notify.appendChild(node);
		var notified = document.getElementById("outcome");
		notified.appendChild(notify);
		// Removes the computers choice from the view
		setTimeout(removeCompScore, 1500);

		function removeCompScore() {
			notify.removeChild(node);
		}
	}

	function drawShow() {
		var notify = document.createElement('p');
		var node = document.createTextNode("It's a Draw");
		notify.appendChild(node);
		var notified = document.getElementById("outcome");
		notified.appendChild(notify);
		// Removes the computers choice from the view
		setTimeout(removeCompScore, 1500);

		function removeCompScore() {
			notify.removeChild(node);
		}
	}
}
// Human selection ///////
document.querySelector('.rock').addEventListener("click", function() {
	human = rock;
	computerLogic();
	console.log(human);
});
document.querySelector('.paper').addEventListener("click", function() {
	human = paper;
	computerLogic();
	console.log(human);
});
document.querySelector('.scissors').addEventListener("click", function() {
	human = scissors;
	computerLogic();
	console.log(human);
});

document.querySelector('')
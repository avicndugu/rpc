// MAKES SURE THAT THE PAGE NOTIFIER DELETES THE TEXT NODE AFTER IT SHOWS
// MAYBE A DELAY FUNCTIION THAT DELETES TEXT NODE AFTER ONE SECOND OF SHOWING UP ON DOM TREE
// instead of just human won write eg. scissor cuts paper, Human won
var computer, human;
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var cScore=document.getElementById("cScore");
var hScore=document.getElementById("hScore");
var winner=document.getElementById("winner");
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
	// END OF Computer random selection of rock or paper or scissors/// 

	///// Decision logic to identify who wins, draws or looses ////////
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
///// END OF DECISION logic to identify who wins, draws or looses ////////

//////// DISPLAYING CHOICES ON THE PAGE //////////////////////////

	function choices() {
		// inserts computer's choice as text to the DOM
		var compChoiceShow = document.getElementById('comp');
		compChoiceShow.innerHTML = computer;
		// inserts human's choice as text to the DOM
		var humanChoiceShow = document.getElementById('human');
		humanChoiceShow.innerHTML= human;
	}

	function compWinShow() {
		var notified = document.getElementById('outcome');
		notified.innerHTML="Computer Scored";
	}

	function humanWinShow() {
		var notified = document.getElementById("outcome");
		notified.innerHTML="Human Scored";
	}

	function drawShow() {
		var notified = document.getElementById("outcome");
		notified.innerHTML="Its a draw";
	}
}
//////////// END OF DISPLAYING CHOICES ON THE PAGE //////////////

//////////// WHEN THE SCORES CHECKER REACHES FIVE ROUNDS IT ANOUNCES THE WINNER
var playedTimes=0;
console.log(playedTimes);
function playCounter() {
	if (playedTimes<5) {
		playedTimes=playedTimes+1;
	}
	else {
		if (computerScore>humanScore) {
			winner.innerHTML = "Computer is the winner";
			console.log("Comp Has the most points");
		}
		else if (computerScore<humanScore) {
			winner.innerHTML = "You are the winner";
			console.log("Human has the most points");	
		}
		else{
			winner.innerHTML = "It is a draw";
			console.log("It's a draw");
		}
		console.log("game over announce the winner with the highest points");
	}
}
function pointsCounter() {
    cScore.innerHTML ="Computer score is : "+computerScore;
	hScore.textContent="Your  score is : "+humanScore;
}
//////////// END OF WHEN THE SCORES CHECKER REACHES FIVE ROUNDS IT ANOUNCES THE WINNER

// Human selection ///////
document.querySelector('.rock').addEventListener("click", function() {
	human = rock;
	computerLogic();
	playCounter();
	pointsCounter();
});
document.querySelector('.paper').addEventListener("click", function() {
	human = paper;
	computerLogic();
	playCounter();
	pointsCounter();
});
document.querySelector('.scissors').addEventListener("click", function() {
	human = scissors;
	computerLogic();
	pointsCounter();
	playCounter();
});

//////////////////// RECORD KEEPING OF THE SCORES
//////////// WHEN THE SCORES CHECKER SHOUTS COMPUTER WIN COMP SCORE +1
//////////// WHEN THE SCORES CHECKER SHOUTS HUMAN WIN HUMAN SCORE +1
////////////  WHEN THE SCORES CHECKER SHOUTS DRAW SCORE REMAINS THE SAME
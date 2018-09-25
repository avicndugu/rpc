// MAKES SURE THAT THE PAGE NOTIFIER DELETES THE TEXT NODE AFTER IT SHOWS
// MAYBE A DELAY FUNCTIION THAT DELETES TEXT NODE AFTER ONE SECOND OF SHOWING UP ON DOM TREE
// instead of just human won write eg. scissor cuts paper, Human won
var computer, human;
var rock="rock";
var paper="paper";
var scissors="scissors";
let humanScore=0;
let computerScore=0;
function computerLogic(){
///Asigning computer selection value to R,P or S.
// Computer random selection of rock or paper or scissors/// 
	computer=(Math.floor(Math.random()*3));
	if (computer==0){
		computer=rock;
		console.log(computer);
	}
	else if(computer==1) {
		computer=paper;
		console.log(computer);
	}
	else if(computer==2){
		computer=scissors;
		console.log(computer);
	}

/////decision logic to identify who wins////////
if (computer==rock){
	if (human==rock) {
		drawShow();
		choices();
		console.log("draw");
	}
	else if(human==paper){
		humanScore+=1;
		humanWinShow();
		choices();
		console.log("Human Wins");	
	}
	else if(human==scissors){
		computerScore+=1;
		compWinShow();
		choices();
		console.log("Computer Wins");	
	}
	console.log(humanScore);
	console.log(computerScore);
}
if (computer==paper) {
	if (human==rock) {
		computerScore+=1;
		compWinShow();
		choices();
		console.log("Computer Wins");
	}
	else if(human==paper){
		drawShow();
		choices();
		console.log("draw");	
	}
	else if(human==scissors){
		humanScore+=1;
		humanWinShow();
		choices();
		console.log("Human Wins");	
	}
	console.log(humanScore);
	console.log(computerScore);
}
if (computer==scissors) {
	if (human==rock) {
		humanScore+=1;
		humanWinShow();
		choices();
		console.log("Human Wins");
	}
	else if(human==paper){
		computerScore+=1;
		compWinShow();
		choices();
		console.log("Computer Wins");	
	}
	else if(human==scissors){
		drawShow();
		choices();
		console.log("draw");	
	}
	console.log(humanScore);
	console.log(computerScore);	
}
function choices(){
// inserts computer's choice as text to the DOM
		var compShow=document.createElement('p');
		var compNode= document.createTextNode("computer choice is: "+ computer);		
		compShow.appendChild(compNode);
		var compNoted=document.getElementById("pageNote");
		compNoted.appendChild(compShow);
// inserts human's choice as text to the DOM
		var humanShow=document.createElement('p');
		var humanNode= document.createTextNode("Your choice is: "+ human);		
		humanShow.appendChild(humanNode);
		var humanNoted=document.getElementById("pageNote");
		humanNoted.appendChild(humanShow);
}
function compWinShow(){
		var notify=document.createElement('p');
		var node= document.createTextNode("Computer Scored");		
		notify.appendChild(node);
		var notified=document.getElementById("pageNote");
		notified.appendChild(notify);
	}
function humanWinShow(){
	var notify=document.createElement('p');
	var node= document.createTextNode("Human Scored");
	notify.appendChild(node);
	var notified=document.getElementById("pageNote");
	notified.appendChild(notify);
}
function drawShow(){
	var notify=document.createElement('p');
	var node= document.createTextNode("It's a Draw");
	notify.appendChild(node);
	var notified=document.getElementById("pageNote");
	notified.appendChild(notify);
}
}


// Human selection ///////
document.querySelector('.rock').addEventListener("click", function() {
  human=rock;
  computerLogic();
  console.log(human);
});
document.querySelector('.paper').addEventListener("click", function(){
    human=paper;
    computerLogic();
  	console.log(human);
  });
document.querySelector('.scissors').addEventListener("click", function(){
    human=scissors;
    computerLogic();
    console.log(human);
  });
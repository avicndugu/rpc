var computer, human;
var rock="rock";
var paper="paper";
var scissors="scissors";

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
		console.log("draw");
	}
	else if(human==paper){
		console.log("Human Wins");	
	}
	else if(human==scissors){
		console.log("Computer Wins");	
	}
}
if (computer==paper) {
	if (human==rock) {
		console.log("Computer Wins");
	}
	else if(human==paper){
		console.log("draw");	
	}
	else if(human==scissors){
		console.log("Human Wins");	
	}
}
if (computer==scissors) {
	if (human==rock) {
		console.log("Human Wins");
	}
	else if(human==paper){
		console.log("Computer Wins");	
	}
	else if(human==scissors){
		console.log("draw");	
	}	
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
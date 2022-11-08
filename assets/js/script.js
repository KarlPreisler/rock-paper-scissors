/*jshint esversion: 6 */
/* Declare constants for DOM Elements*/
const playerResult = document.getElementById("player-choice");
const computerResult = document.getElementById("computers-choice");
const allChoices = document.querySelectorAll("button");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const showResults = document.getElementById("result");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

let playerChoice;
let computerChoice;

/* Grab each button and add Event listener for clicks, 
pass through event function.
save target.id as userChoice and display in innerHTML.
call other functions. 
*/ 

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerResult.innerHTML = playerChoice;
    generateChoiceComputer();
  generateResult();
  playerImage.src = `assets/images/${[playerChoice]}.png`;
}));

/* Generate random number and assign each as the computerChoice, call other functions. */

function generateChoiceComputer() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
   
    if (randomNumber === 1) {
      computerChoice = "rock";
    }
    else if(randomNumber === 2) {
      computerChoice = "scissors";
    }
    else if(randomNumber === 3) {
      computerChoice = "paper";
    }
    computerResult.innerHTML = computerChoice;
    computerImage.src = `assets/images/${[computerChoice]}.png`;
}
   
/* This function will compare playerChoice and computerChoice in order to generate results. 
** The result will add 1 score to the winner of the current round.*/
 let result;
  function generateResult() {
    if (computerChoice === playerChoice) {
    result = "It's a draw!";
    }
    else if(computerChoice === "rock" && playerChoice === "paper") {
      result = "You win!";
      playerScore.innerHTML++;
    }
    else if(computerChoice === "rock" && playerChoice === "scissors") {
      result = "You lose!";
      computerScore.innerHTML++;
    }
    else if(computerChoice === "paper" && playerChoice === "scissors") {
      result = "You win!";
      playerScore.innerHTML++;
    }
    else if(computerChoice === "paper" && playerChoice === "rock") {
      result = "You lose!";
      computerScore.innerHTML++;
    }
    else if(computerChoice === "scissors" && playerChoice === "rock") {
      result = "You win!";
      playerScore.innerHTML++;
    }
    else if(computerChoice === "scissors" && playerChoice === "paper") {
      result = "You lose!";
      computerScore.innerHTML++;
    }
    showResults.innerHTML = result;
  }
  
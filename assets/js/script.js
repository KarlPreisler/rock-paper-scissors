/*jshint esversion: 6 */
/* Declare constants for DOM Elements*/
const playerResult = document.getElementById("player-choice");
const computerResult = document.getElementById("computers-choice");
const allChoices = document.querySelectorAll(".control");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const showResults = document.getElementById("result");
const resetButton = document.getElementById("reset-button");

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");


/* Grab each button and add Event listener for clicks, 
pass through event function.
save target.id as userChoice and display in innerHTML.
call other functions. 
*/ 

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
  let playerChoice = e.target.id;
  playerResult.innerHTML = playerChoice;
  let computerChoice = generateChoiceComputer();
  generateResult(playerChoice, computerChoice);
  playerImage.src = `assets/images/${[playerChoice]}.png`;
}));

resetButton.addEventListener('click', startGame);


/* Set up the game. This is called when a fresh game starts or when the user
   restarts a game after already.
*/
function startGame() {
  // Initialize/reset game state
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  showResults.innerHTML = '';

  playerImage.src = "assets/images/allhands.png";
  computerImage.src = "assets/images/allhands.png";
}
/* Pick a random choice for the computer (rock, paper or scissors) and return it
@returns {string} - One of 'rock', 'paper' or 'scissors'.
*/
function generateChoiceComputer() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  } else if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerResult.innerHTML = computerChoice;
  computerImage.src = `assets/images/${[computerChoice]}.png`;

  return computerChoice;
}
   
/* This function will compare playerChoice and computerChoice in order to generate results. 
** The result will add 1 score to the winner of the current round.
@param {string} playerChoice, computerChoice - The player's and computer's
 character choices, one of 'rock', 'paper' or 'scissors'
 */
function generateResult(playerChoice, computerChoice) {
  let result;
  if (computerChoice === playerChoice) {
    result = "It's a draw!";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    result = "You win!";
    playerScore.innerHTML++;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "You lose!";
    computerScore.innerHTML++;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "You win!";
    playerScore.innerHTML++;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    result = "You lose!";
    computerScore.innerHTML++;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "You win!";
    playerScore.innerHTML++;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "You lose!";
    computerScore.innerHTML++;
  }
  showResults.innerHTML = result;
}
  
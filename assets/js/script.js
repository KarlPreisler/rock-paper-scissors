const playerResult = document.getElementById("player-choice")
const computerResult = document.getElementById("computers-choice")
const allChoices = document.querySelectorAll('button')
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const showResults = document.getElementById("result")
let playerChoice
let computerChoice
let result
/* event listener for playerChoice */

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerResult.innerHTML = playerChoice
    generateChoiceComputer()
  generateResult()
  playerImage.src = `assets/images/${[playerChoice]}.png.png`;
}))



function generateChoiceComputer() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
   
    if (randomNumber === 1) {
      computerChoice = "rock"
    }
    if (randomNumber === 2) {
      computerChoice = "scissors"
    }
    if (randomNumber === 3) {
      computerChoice = "paper"
    }
    computerResult.innerHTML = computerChoice
    computerImage.src = `assets/images/${[computerChoice]}.png.png`;
  }
   
  function generateResult() {
    if (computerChoice === playerChoice) {
      result = "It's a draw!"
    }
    if (computerChoice === 'rock' && playerChoice === "paper") {
      result = "You win!"
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
      result = "You lose!"
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
      result = "You win!"
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
      result = "You lose!"
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
      result = "You win!"
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
      result = "you lose!"
    }
    showResults.innerHTML = result;
   
  }
  
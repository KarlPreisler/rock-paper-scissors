const playerResult = document.getElementById("player-choice")
const computerResult = document.getElementById("computers-choice")
const allChoices = document.querySelectorAll('button')
const playerImage = document.getElementById("player-image")
let playerChoice
let computerChoice
/* event listener for playerChoice */

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerResult.innerHTML = playerChoice
    playerImage.src = `assets/images/${[playerChoice]}.png.png`;
    generateChoiceComputer()
}))
/* Generate random number and assign name for computerChoice, call other functions. */
 
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
   
  
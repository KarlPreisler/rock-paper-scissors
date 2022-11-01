const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerImage = document.getElementById("player-image")
const computerImage = document.getElementById("computer-image")
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".control");
const choices = ["rock", "paper", "scissors"];


/* generate random number and assign 
    eventlistener that listens for each button click*/

possibleChoices.forEach((possibleChoices) => {
    possibleChoices.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
        generateComputerChoice();
    })
})

function playGame(playerChoice) {
    playerImage.src = `assets/images/${choices[playerChoice]}.png.png`;

    let computerChoice = Math.floor(Math.random() * possibleChoices.length);
    computerImage.src = `assets/images/${choices[computerChoice]}.png.png`;
    computerChoiceDisplay.innerHTML = computerChoice;
}
/*generate random number
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = "rock"
    }
    if (randomNumber === 1) {
        computerChoice = "scissors"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
*/

const playerResult = document.getElementById("player-choice")
const computerResult = document.getElementById("computers-choice")
const allChoices = document.querySelectorAll('button')
const playerImage = document.getElementById("player-image")
let playerChoice
/* event listener for playerChoice */

allChoices.forEach(allChoices => allChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerResult.innerHTML = playerChoice
    playerImage.src = `assets/images/${[playerChoice]}.png.png`;
}))

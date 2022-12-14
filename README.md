## Rock, Paper, Scissors Game

The Rock Paper Scissors website provides the chance to play the well known game Rock Paper Scissors. The website is targeted towards anyone who wants to play a simple game against the computer, or people who are new to the game and want to learn the game's functions. 

The users of the website will be able to choose between three options, rock paper or scissors, and play a round against a computer. The result of each round is displayed in text and the rules for the game are also available to the user in the footer of the website.

![FINAL SCREENSHOT PP2 AMIRESPONSIVE](https://user-images.githubusercontent.com/114813115/200673134-8a4b4b26-c72e-4b8a-96c6-8c4250e492e3.png)

## Features:

## The Header
- On the top of the page the name of the game is displayed, “Rock Paper Scissors Game”.
This provides the user with clear information about what they are about to play.

![Screenshot_20221108_050158](https://user-images.githubusercontent.com/114813115/200615332-efd90f2f-155a-49f0-943e-0b1f715705d3.png)

## The Sub-Header
- The second header underneath the game title is displaying the text: “Choose an option:” This indicates to the user that they have the possibility to change the outcome of the game and that they are about to make a decision.
 
![Screenshot_20221108_050217](https://user-images.githubusercontent.com/114813115/200615399-6320c643-6b12-4b1c-a4a8-40fdb6d647de.png)

## The Rock, Paper and Scissors Buttons
- The three buttons are the options that the user can choose from, they display: Rock, Paper, Scissors, respectively. 
- When hovering over each of these buttons they indicate that they are clickable by changing background color to a slightly darker shade. 
- If the user clicks any of the buttons their choice will be recorded while calling an action to generate a random choice for the user's opponent, the computer. 
- A click of any of the buttons will also call a function to compare the users and computer’s choice in order to generate a result. 
- The function for displaying the result is also called.

![Screenshot_20221108_050230](https://user-images.githubusercontent.com/114813115/200615419-610a8572-939f-44e5-9674-478510de078c.png)

## The Reset Scores Button
- The Reset Scores button sets the scores from both the computer and the player to zero, as well as resetting the text displayed in the Results section and also changing the Images to Allhands.png for both the player and computer. 
- This Provides the user with the opportunity to start over as they might be unhappy with the scores or simply want to play a certain number of rounds before they want to have a clean start again. 
- When hovering over the Reset Scores button the cursor will turn into a pointer and the background-color will slightly change color in order to indicate that it's a clickable button.
- When hovering over the button the border of the button will turn to the color red in order to indicate that the player should be cautious with this button, as it might delete that winning streak that the player worked so hard for.

![UPDATED RESET SCORES SCREENSHOt](https://user-images.githubusercontent.com/114813115/200673693-970eeb96-fa77-492f-9e3e-753398675a52.png)


## The Scores Section
- The Scores Section features two rows of text: "Your Score", and "Computer Score". When entering the site these values are set to zero, and this value will increase in increments of 1 by each round won by either the computer or player.
- This provides the user with an easy way to keep track of the results of each round.

![Screenshot_20221108_050302](https://user-images.githubusercontent.com/114813115/200615554-7518e787-7380-4e0b-bd47-11aae0da77bb.png)

## The Result Section
- The result section shows the result after each round, it can display either "You lose!", "You win!" or "It's a draw!" depending on the outcome of the round. 
- This provides the user with a clear indication of what the outcome was of the last round played.
 
![Screenshot_20221108_050253](https://user-images.githubusercontent.com/114813115/200615576-d4ecffdf-e6e1-4d02-9c72-369b612dc8e7.png)

## The Game Area
- The Game Area is where the choices of both the computer and user are displayed. This is also where the result of each round is displayed. 
- The Game Area is separated by two boxes side by side, each indicated by having a distinct background color. 
- The box on the left displays the text: “Your Choice:” while the one on the right displays “Computer Choice:”. When the user clicks a button, their choice will be displayed as well as the choice of the computer. 
- When the user first enters the website, each of these two boxes have the same image consisting of three hands, representing the three different options available in the game. 
- If the user then clicks any of the three buttons, the images in both boxes will immediately change to display the hand representing the users and computer’s respective choice for the round. 
 
![Screenshot_20221106_061440](https://user-images.githubusercontent.com/114813115/200188427-aa6e90e8-62fb-404a-b8b7-296cd961700b.png)

## The Footer
- The footer includes clear information about the rules of the game, this is for anyone who is not familiar with the game and wants to learn how to play it. 
- Media queries are used to make the footer responsive to all screen sizes while maintaining a clean look on the website.
 
![Screenshot_20221106_061451](https://user-images.githubusercontent.com/114813115/200185201-6deca681-2772-41fc-8ddd-f001081b1da6.png)

## Testing
- I have tested that this website works appropriately in the following browsers: Chrome, Firefox and Safari.
- I confirmed that this website looks good and functions the way it should on all standard screen sizes using the devtools device toolbar.
- I have confirmed that all headers and sections are legible in terms of positioning and readability.
- No elements are distracted by background-colors, and no images are stretched when viewed on different devices.
- I have made sure that all functions work properly and the game works as intended.
- I have made sure that all buttons work as intended.
- I have made sure that the website is responsive to all devices, using media queries to change the placement of the footer to adapt to different screen sizes.

## Validator Testing
- No errors were returned when passing the HTML code through the official W3C validator
- No errors were found when passing through the CSS code through the official (Jigsaw) validator
- No errors were found when passing the JavaScript code through the official Jshint validator.

![FINAL MOCKUP PP2](https://user-images.githubusercontent.com/114813115/200673288-9be3131e-7d7f-440e-9f12-c76114056204.png)


## Lighthouse Score

![Lighthouse PP2 Updated](https://user-images.githubusercontent.com/114813115/200618521-b49db6a9-45f6-40e3-ae73-98aa5ef515c5.png)

## Bugs
There are no unfixed bugs.

## Deployment

- The website is hosted using GitHub pages, deployed directly from the master branch. New commits to the master branch will automatically update the deployed site. The steps to deploy are as follows:
- In the GitHub repository, navigate to the settings tab.
- Choose Pages from the left side menu.
- Select the Master Branch from the source section drop-down menu.
- The page will automatically be refreshed with a detailed ribbon display to indicate that the deployment was successful.
- Live link for the website - https://karlpreisler.github.io/rock-paper-scissors/      
 

## How to clone the repository
- Go to the following repository on gitHub: https://github.com/KarlPreisler/rock-paper-scissors
- Above the list of files, click the green Code button.
- Select HTTPs and copy the link provided by GitHub.
- Open GitBash.
- Change the current working directory to the location where you want the cloned directory.
- Type git clone, and then paste the URL you copied earlier.
- Press enter to begin the clone process.

## Credits
- Google fonts imported from https://fonts.google.com/about
- Images imported from free source https://www.clipartmax.com/so/rock-paper-scissors-clipart/
- Responsiveness screenshot taken from: https://ui.dev/amiresponsive

##  Acknowledgements
- My mentor Brian Machiara for great support and guidance.

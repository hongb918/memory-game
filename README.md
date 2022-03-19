MEMORY GAME

For this project, I am re-creating a memory game. he game follow a traditional memory game. The objective is to match every pairs on the board. The game is finished when the player find all matching pairs. 

In this repo, I build a focus around array methods, and setting Attributes in Javascript. 

APPLICATIONS & APPROACHES:
- HTML
- CSS
- JAVSCRIPT
    . createElement
    . document.querySelector
    . dataset
    . appendChild
    . addEventListener
    . for Loops
- All images are found through Canva website.


UNSOLVED PROBLEMS & MAJOR HURDLES:
- Adding in timer and reset button for the game
- One major hurdle was finding ways to transition the cards into an array.


GitHub: https://github.com/hongb918/memory-game

Screenshots of the App:
<img width="1342" alt="Screen Shot 2022-03-19 at 10 42 18 AM" src="https://user-images.githubusercontent.com/95890211/159127993-bec4bfe5-525f-4502-8364-7d1ef503a789.png">
<img width="1052" alt="Screen Shot 2022-03-19 at 10 42 34 AM" src="https://user-images.githubusercontent.com/95890211/159128694-dd0dc8c9-093e-418c-9a5e-d77d11647f83.png">
<img width="1430" alt="Screen Shot 2022-03-19 at 10 57 31 AM" src="https://user-images.githubusercontent.com/95890211/159128701-e24c05b4-0424-4a6c-88f3-2f3c0c930ce8.png">

User Stories

* User can click a button to start the game. 		
* User can see a grid with 2 x 6 cards. All the cards are faced down initially (hidden state)
* User can click on any card to unveil the image that is underneath it (change it to visible state). The image will be displayed until the user clicks on a 2nd card
* User can see how many moves they have made in this game and the ultimate goal is match all the set with the least amount of moves.

When the User clicks on the 2nd card:

* If there is a match, the 2 cards will be eliminated from the game (either hide/remove them or leave them in the visible state)
* If there isn’t a match, the 2 cards will flip back to their original state (hiddenstate)
* When all the matches have been found, User can restart the game by refreshing the page.

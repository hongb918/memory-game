// Storing each card with a value of name and images in an object, and within the object it is the array index.

const cardIndex = [
    {
        name: 'donuts',
        img: 'lib/donuts2.png'
    },
    {
        name: 'nose',
        img: 'lib/nose.png'
    },
    {
        name: 'orange',
        img: 'lib/orange.png'
    },
    {
        name: 'ramen',
        img: 'lib/ramen2.png'
    },
    {
        name: 'laCat',
        img: 'lib/lacat2.png'
    },
    {
        name: 'playful',
        img: 'lib/playful.png',
    }
]

//sorting the array
const gameBoard = cardIndex.concat(cardIndex);
gameBoard.sort(() => {
    return 0.5 - Math.random();
    //shuffling the index to return to a number that is randomly <0, 0 or >0 
})

const game = document.getElementById('board');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

let moves = 0;

for (let i = 0; i < gameBoard.length; i++) {
    let cards = document.createElement('div');
    cards.classList.add('card');
    //setting cards attribute to data set of name 
    cards.dataset.name = gameBoard[i].name;


    let front = document.createElement('div');
    front.classList.add('front');

    //declaring the bacgkround image of the back of the card using the object value of images    
    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameBoard[i].img})`;

    grid.appendChild(cards);
    cards.appendChild(front);
    cards.appendChild(back);

    //checking if a card has been clicked, and if it has, displaying the numbers of clicks of the cards using innerhTML

    cards.addEventListener('click', (e) => {
        let counter = document.querySelector('.counter');
        moves++;
        counter.innerHTML = moves;
    })
}

//Declaring factors in the game
let firstCard = '';
let secondCard = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

//creating a value that holds function once a pair is found.
let matchingPair = function () {
    let chosen = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosen.length; i++) {
        chosen[i].classList.add('match')
    }
}

//reseting the game to its original state, tracking all the variables back to the deafault state, removing all clicks and guesses
const restartGame = () => {
    firstCard = '';
    secondCard = '';
    count = 0;
    previousTarget = null;

    let chosen = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosen.length; i++) {
        chosen[i].classList.remove('chosen');
    }
};
//Game logic:
//  - Adding event listener to show the image once is it clicked
grid.addEventListener('click', (event) => {
    let clickedCard = event.target;
    //reading only nodeName property of the node as a string (section is a child node of grid)
    if (clickedCard.nodeName === 'section' || clickedCard === previousTarget || clickedCard.parentNode.classList.contains('chosen')) {
        return;
    }
    // counting the number of showing and check the previously shown image matches the current image, 
    // if it does, adding a class chosen to both the matched images. 
    if (count < 2) {
        count++;
        if (count === 1) {
            firstCard = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('chosen');
            //adding class to parent element/node once a card is selected
        } else {
            secondCard = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('chosen');
            //adding the second card/guess to the class that is selected
        }
        if (firstCard !== '' && secondCard !== '') {
            //card comparison logic
            if (firstCard === secondCard) {
                setTimeout(matchingPair, delay);
                //setting a paraemter(code/function, time )
                setTimeout(restartGame, delay)
            } else {
                setTimeout(restartGame, delay)
            }
        }
        previousTarget = clickedCard;
    }
})





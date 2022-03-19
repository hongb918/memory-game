
//Possibly adding in the game status
let gameActive = true;


//storing how many moves i.e times player click on the card
const moveDisplay = document.querySelector('.moves');
const scoreDisplay = document.querySelectorAll('.points')




const cardIndex = [
    {
        name: 'blue',
        img: './blue.png'
    },
    {
        name: 'nose',
        img: './nose.png'
    },
    {
        name: 'orange',
        img: './orange.png'
    },
    {
        name: 'rocket',
        img: './rocket.png'
    },
    {
        name: 'tv',
        img: './tv.png'
    },
    {
        name: 'playful',
        img: './playful.png'
    }
]

//sorting the array
const gameBoard = cardIndex.concat(cardIndex);
gameBoard.sort(() => {
    return 0.5 - Math.random();
})

const game = document.getElementById('board');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


for (let i = 0; i < gameBoard.length; i++) {
    let cards = document.createElement('div');
    cards.classList.add('card');
    //setting cards attribute to data set of i 
    cards.dataset.name = gameBoard[i].name;

    let front = document.createElement('div');
    front.classList.add('front');

    //declaring the bacground image of the back of the card using the object value of images    
    let back = document.createElement('div');
    back.style.backgroundImage = `url(${gameBoard[i].img})`;

    grid.appendChild(cards);
    cards.appendChild(front);
    cards.appendChild(back);
}


let firstCard = '';
let secondCard = '';
let moves = 0;
let previousTarget = null;
let delay = 1200;


let matchingPair = function () {
    let chosen = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosen.length; i++) {
        chosen[i].classList.add('match')
    }
}

const restartGame = () => {
    firstCard = '';
    secondCard = '';
    moves = 0;
    previousTarget = null;

    let chosen = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosen.length; i++) {
        chosen[i].classList.remove('chosen');
    }
};


grid.addEventListener('click', (event) => {
    let clickedCard = event.target;
    if (clickedCard.nodeName === 'section' || clickedCard === previousTarget || clickedCard.parentNode.classList.contains('chosen')) {
        return;
    }
    if (moves < 2) {
        moves++;
        if (moves === 1) {
            firstCard = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('chosen');
        } else {
            secondCard = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('chosen');
        }
        if (firstCard !== '' && secondCard !== '') {
            if (firstCard === secondCard) {
                setTimeout(matchingPair, delay);
                setTimeout(restartGame, delay)
            } else {
                setTimeout(restartGame, delay)
            }
        }
        previousTarget = clickedCard;
    }
})



//Wining Message
const winningMessage = () => `You've won!`;

// function showingMoves () {

// }

// function showingScore () {

// }





//setting event listeners for game card


//setting event listners for reset button
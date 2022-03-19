
//Possibly adding in the game status
let gameActive = true;


//storing how many moves i.e times player click on the card
const moveDisplay = document.querySelector('.moves');
const scoreDisplay = document.querySelectorAll('.points')


const game = document.getElementsByClassName('.board');
const grid = document.getElementsByClassName('.grid');
let cards = document.querySelectorAll('card');

const cardIndex = [
    {
        name: 'blue',
        img: 'lib/blue.png'
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
        name: 'rocket',
        img: 'lib/rcoket.png'
    },
    {
        name: 'tv',
        img: 'lib/tv.png'
    },
    {
        name: 'playful',
        img: 'lib/playful.png'
    }
]

//sorting the array
cardIndex.sort(() => 0.5 - Math.randon())

function setBoard() {
    for (let i = 0; i < cardIndex.length; i++) {
        //setting cards attribute to data set of i 
        cards.dataset.name = cardIndex[i].name;

        let front = document.createElement('div');
        front.classList.add('front');

        //declaring the bacground image of the back of the card using the object value of images    
        let back = document.createElement('div');
        back.style.backgroundImage = `url(${cardIndex[i].img})`;

        cards.appendChild(front);
        cards.appendChild(back);
    }
}

let firstCard = '';
let secondCard = '';

let previousTarget = null;
let delay = 1200;


// function matchingSet() {

// }




//Wining Message
const winningMessage = () => `You've won!`;


// const cellIndex = Array.from(parseInt(cards.getAttribute('data-cell-index')));

// cellIndex.sort(() => 0.5 - Math.random())


// const gameGrid = cellIndex.concat(cellIndex);
// gameGrid.sort(() => {
//     return 0.5 - Math.random();
// })



function restartGame() {
    firstCard = '';
    secondCard = '';
    moves = 0;
    previousTarget = null;

}

// function showingMoves () {

// }

// function showingScore () {

// }





//setting event listeners for game card
document.querySelectorAll('.card').forEach(cards => addEventListener('click', cellClick));


//setting event listners for reset button
document.querySelector('.reset').addEventListener('click', restartGame);
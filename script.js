const items = [
    '😊', '😊', '😎', '😎', '😍', '😍', '😜', '😜', '😁', '😁',
    '😅', '😅', '😂', '😂', '😆', '😆', '😇', '😇', '🤩', '🤩'
];

let firstCard = null;
let secondCard = null;
let attempts = 0;
let pairsSolved = 0;
let isFlipping = false;

const attemptsElement = document.getElementById('attempts');
const pairsSolvedElement = document.getElementById('pairs-solved');
const restartButton = document.getElementById('restart-button');

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(items);

// Flip card function
function flipCard(card, id) {
    if (isFlipping || card.classList.contains('done') || card.innerText) return;

    card.innerText = items[id - 1];

    if (firstCard === null) {
        firstCard = card;
    } else {
        secondCard = card;
        isFlipping = true;
        attempts++;
        attemptsElement.textContent = attempts;

        if (firstCard.innerText === secondCard.innerText) {
            setTimeout(() => {
                firstCard.classList.add('done');
                secondCard.classList.add('done');
                firstCard = null;
                secondCard = null;
                pairsSolved++;
                pairsSolvedElement.textContent = pairsSolved;

                if (pairsSolved === items.length / 2) {
                    restartButton.textContent = 'Play Again';
                    alert('Congratulations! You solved all pairs.');
                }
                isFlipping = false;
            }, 500);
        } else {
            setTimeout(() => {
                firstCard.innerText = '';
                secondCard.innerText = '';
                firstCard = null;
                secondCard = null;
                isFlipping = false;
            }, 1000);
        }
    }
}

// Restart game function
function restartGame() {
    shuffle(items);
    document.querySelectorAll('.item').forEach(card => {
        card.innerText = '';
        card.classList.remove('done');
    });

    firstCard = null;
    secondCard = null;
    attempts = 0;
    pairsSolved = 0;
    isFlipping = false;

    attemptsElement.textContent = attempts;
    pairsSolvedElement.textContent = pairsSolved;
    restartButton.textContent = 'Restart';
}

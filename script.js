const items = [
    '😊', '😊', '😎', '😎', '😍', '😍', '😜', '😜', '😁', '😁',
    '😅', '😅', '😂', '😂', '😆', '😆', '😇', '😇', '🤩', '🤩'
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(items);


let firstCard = null;
let secondCard = null;

function flipCard(card, id) {
    if (card.classList.contains('done')) {
        return;
    }

    if (firstCard === null) {
        firstCard = card;
        card.innerText = items[id-1];
        return;
    }

    if (secondCard === null) {
        secondCard = card;
        card.innerText = items[id-1];
    }

    if (firstCard !== null && secondCard !== null) {
        if (firstCard.innerHTML !== secondCard.innerHTML) {
            setTimeout(() => {
                firstCard.innerHTML = '';
                secondCard.innerHTML = '';
                firstCard = null;
                secondCard = null;
            }, 1000);
        } else {
            setTimeout(() => {
                firstCard.classList.add('done');
                secondCard.classList.add('done');
                firstCard.innerHTML = '';
                secondCard.innerHTML = '';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}

let isFlipping = false;

function flipCard(card, id) {
    if (isFlipping || card.classList.contains('done') || card.innerText) return;

    card.innerText = items[id - 1];

    if (firstCard === null) {
        firstCard = card;
    } else {
        secondCard = card;
        isFlipping = true;

        if (firstCard.innerText === secondCard.innerText) {
            setTimeout(() => {
                firstCard.classList.add('done');
                secondCard.classList.add('done');
                firstCard = null;
                secondCard = null;
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


const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const resetButton = document.querySelector('#reset');
const winPointOption = document.querySelector('select');

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

let winPoint = [];

for (let i = 3; i <= 10; i++) {
    winPoint.push(i);
}

for (const point of winPoint) {
    const option = document.createElement('option');
    option.value = point;
    option.text = point;
    winPointOption.append(option);
}

if (winPoint[0]) {
    p1Button.disabled = true;
    p2Button.disabled = true;
} else {
    p1Button.disabled = false;
    p2Button.disabled = false;
}

const reset = () => {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    winPointOption.value = 0;
};

resetButton.addEventListener('click', () => {
    reset();
});

p1Button.addEventListener('click', (e) => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score == winPoint) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    } else {
        alert('Game is Over');
        winPointOption.value = 0;
        p1Button.disabled = true;
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score == winPoint) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    } else {
        alert('Game is Over');
        winPointOption.value = 0;
        p2Button.disabled = true;
    }
});

winPointOption.addEventListener('change', (e) => {
    e.preventDefault();
    winPoint = parseInt(e.target.value);
    p1Button.disabled = false;
    p2Button.disabled = false;
});

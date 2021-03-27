'use strict';
import PopUp from './popup.js';

const GREEN_CAR_COUNT = 10;
const RED_CAR_COUNT = 5;
const TRUCK_COUNT = 10;
const IMG_SIZE = 100; // 100*100
const TIME = 5;

const alert_sound = new Audio('carrot/sound/alert.wav');
const back_sound = new Audio('carrot/sound/bg.mp3');
const right_car_sound = new Audio('carrot/sound/carrot_pull.mp3');
const win_sound = new Audio('carrot/sound/game_win.mp3');

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const playBtn = document.querySelector('.play__btn');
// const restartBtn = document.querySelector('.restart__btn');
const counter = document.querySelector('.game__counter');

// const popup = document.querySelector('.popup');
// const message = document.querySelector('.message');

const timerDisplay = document.querySelector('.game__timer');
const btnImg = document.querySelector('.play__btn>.fas');

let started = false;
let score = 0;
let setTimer = undefined;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
    initGame();
})

// Start play button
playBtn.addEventListener('click', () => {
    
    if (started) {
        stopGame();
    } else {
        startGame();
    }

});

function stopGame() {

    started = false;
    finishGame(false);
    stopGameTimer(setTimer);

}

function startGame() {
    started = true;

    initGame();

    // 버튼 이미지 바꾸기
    changeBtnImg();
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

function initGame() {

    showStartButton();

    started = true;

    //bgm 켜기
    playSound(back_sound);

    //필드 초기화
    field.innerHTML = '';

    // 아이템 추가
    createItems('car green', GREEN_CAR_COUNT, './carrot/img/car--green.png');
    createItems('car red', RED_CAR_COUNT, './carrot/img/car--red.png');
    createItems('car truck', TRUCK_COUNT, './carrot/img/car--truck.png');
    
    // 카운터, 타이머 초기화
    resetCounter();
    startTimer();
}

function changeBtnImg() {
    btnImg.classList.add('fa-pause');
    btnImg.classList.remove('fa-play');
}

function createItems(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - IMG_SIZE;
    const y2 = fieldRect.height - IMG_SIZE;
    
    for (let i = 0; i < count ; i++) {
        const item = document.createElement('img');

        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);

        item.style.width = `${IMG_SIZE}px`;
        item.style.height = `${IMG_SIZE}px`;
        item.style.position = 'absolute';
        item.style.cursor = 'pointer';

        const x = randomNum(x1, x2);
        const y = randomNum(y1, y2);

        item.style.left = `${x}px`;
        item.style.top = `${y}px`;

        field.appendChild(item);
    }
}

function randomNum (min, max) {
    return Math.random() * (max - min) + min;
}

function resetCounter() {
    score = 0;
    counter.innerHTML = RED_CAR_COUNT;
}

function startTimer() {
    let remainTime = TIME;
    timerDisplay.innerHTML = `0:${remainTime}`;
    
    setTimer = setInterval(() => {
        --remainTime;
        timerDisplay.innerHTML = `0:${remainTime}`;

        if (remainTime === 0 ) {

            finishGame(false);
            playSound(alert_sound);
            return;
            }
    }, 1000)
}

function stopGameTimer(timer) {
    clearInterval(timer);
    stopSound(back_sound);
}

function finishGame(win) {

    started = false;
    hideStartButton();
    stopGameTimer(setTimer);

    if (win) {
        gameFinishBanner.showWithText('YOU WON🤩');
        playSound(win_sound);
    } else {
        gameFinishBanner.showWithText('YOU LOSE🤬');
        playSound(alert_sound);
    }
}

function hideStartButton() {
    playBtn.style.visibility = 'hidden';
}

function showStartButton() {
    playBtn.style.visibility = 'visible';
}

field.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.className === 'car green' || target.className === 'car truck') {
        finishGame(false);
        return;
    } else if (target.className === 'car red') {
    target.remove();
    playSound(right_car_sound);
    score++;
    counter.innerHTML = RED_CAR_COUNT - score;
    }
    
    if (score === RED_CAR_COUNT) {
        finishGame(true);
    }
});


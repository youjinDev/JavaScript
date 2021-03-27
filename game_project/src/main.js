'use strict';
import PopUp from './popup.js';
import Field from './field.js';


const GREEN_CAR_COUNT = 10;
const RED_CAR_COUNT = 5;
const TRUCK_COUNT = 10;
const TIME = 5;

const alert_sound = new Audio('carrot/sound/alert.wav');
const back_sound = new Audio('carrot/sound/bg.mp3');
const win_sound = new Audio('carrot/sound/game_win.mp3');

const playBtn = document.querySelector('.play__btn');
const counter = document.querySelector('.game__counter');

const timerDisplay = document.querySelector('.game__timer');
const btnImg = document.querySelector('.play__btn>.fas');

let started = false;
let score = 0;
let setTimer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(startGame);

const gameField = new Field(RED_CAR_COUNT, GREEN_CAR_COUNT, TRUCK_COUNT);
gameField.setClickListener(onItemClick);

function onItemClick(itemType) {
    console.log(itemType);

    if(!started) {
        return;
    }

    if (itemType === 'carRight') {
        score++;
        counter.innerHTML = RED_CAR_COUNT - score;
        if (score === RED_CAR_COUNT) {
            finishGame(true);
        }
    } else if (itemType === 'carWrong') {
        finishGame(false);
        return;
    }
}

playBtn.addEventListener('click', () => {
    if (started) {
        stopGame();
    } else {
        startGame();
    }
});


function stopGame() {
    started = false;
    stopSound(back_sound);
    hideStartButton();
    gameFinishBanner.showWithText(' ');
    stopGameTimer();
}

function startGame() {
    started = true;
    playSound(back_sound);
    initGame();
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
    gameField.init();
    showStartButton();
    resetCounter();
    startTimer();
}

function changeBtnImg() {
    btnImg.classList.add('fa-pause');
    btnImg.classList.remove('fa-play');
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

function stopGameTimer() {
    clearInterval(setTimer);
}

function finishGame(win) {
    started = false;
    stopGameTimer();
    stopSound(back_sound);
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




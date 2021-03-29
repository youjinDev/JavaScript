'use strict';

import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js'

const GREEN_CAR_COUNT = 10;
const RED_CAR_COUNT = 5;
const TRUCK_COUNT = 5;
const TIME = 5;

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
    sound.stopBackground();
    hideStartButton();
    gameFinishBanner.showWithText(' ');
    stopGameTimer();
}

function startGame() {
    started = true;
    sound.playBackground();
    initGame();
    changeBtnImg();
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
            sound.playAlert();
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
    sound.stopBackground();
    if (win) {
        gameFinishBanner.showWithText('YOU WON🤩');
        sound.playWin();
    } else {
        gameFinishBanner.showWithText('YOU LOSE🤬');
        sound.playAlert();
    }
}

function hideStartButton() {
    playBtn.style.visibility = 'hidden';
}

function showStartButton() {
    playBtn.style.visibility = 'visible';
}




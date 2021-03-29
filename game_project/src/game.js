'use strict';

import Field from './field.js';
import * as sound from './sound.js'

export default class Game {
    constructor(gameDuration, redCarCount, greenCarCount, truckCount) {
        this.gameDuration = gameDuration;
        this.redCarCount = redCarCount;
        this.greenCarCount = greenCarCount;
        this.truckCount = truckCount;

        this.counter = document.querySelector('.game__counter');
        this.timerDisplay = document.querySelector('.game__timer');
        this.btnImg = document.querySelector('.play__btn>.fas');
        this.playBtn = document.querySelector('.play__btn');

        this.playBtn.addEventListener('click', () => {
            if (this.started) {
                this.stop();
            } else {
                this.start();
            }
        });

        this.gameField = new Field(redCarCount, greenCarCount, truckCount);
        this.gameField.setClickListener(this.onItemClick);

        this.score = 0;
        this.started = false;
        this.setTimer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    init() {
        this.gameField.init();
        this.showStartButton();
        this.resetCounter();
        this.startTimer();
    }

    start() {
        this.started = true;
        this.init();
        this.changeBtnImg();
        sound.playBackground();
    }

    stop() {
        this.started = false;
        this.hideStartButton();
        this.stopGameTimer();
        sound.stopBackground();
        this.onGameStop && this.onGameStop('cancle');
    }

    finish(win) {
        this.started = false;
        this.stopGameTimer();
        sound.stopBackground();
        if (win) {
            sound.playWin();
        } else {
            sound.playAlert();
        }
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');

    }
    
    onItemClick = itemType => {
        if(!this.started) {
            return;
        }
    
        if (itemType === 'carRight') {
            this.score++;
            this.counter.innerHTML = this.redCarCount - this.score;
            if (this.score === this.redCarCount) {
                this.finish(true);
            }
        } else if (itemType === 'carWrong') {
            this.finish(false);
            return;
        }
    }

    hideStartButton() {
        this.playBtn.style.visibility = 'hidden';
    }
    
    showStartButton() {
        this.playBtn.style.visibility = 'visible';
    }
    
    changeBtnImg() {
        this.btnImg.classList.add('fa-pause');
        this.btnImg.classList.remove('fa-play');
    }
    
    resetCounter() {
        this.score = 0;
        this.counter.innerHTML = this.redCarCount;
    }
    
    startTimer() {
        let remainTime = this.gameDuration;
        this.timerDisplay.innerHTML = `0:${remainTime}`;
        
        this.setTimer = setInterval(() => {
            --remainTime;
            this.timerDisplay.innerHTML = `0:${remainTime}`;
    
            if (remainTime === 0 ) {
                this.finish(false);
                sound.playAlert();
                return;
                }
        }, 1000)
    }
    
    stopGameTimer() {
        clearInterval(this.setTimer);
    }

    






}
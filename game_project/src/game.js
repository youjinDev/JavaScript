'use strict';

import Field from './field.js';
import * as sound from './sound.js'

const RED_CAR_COUNT = 5;
const GREEN_CAR_COUNT = 5;
const TRUCK_CAR_COUNT = 5;

export default class GameBuilder {
    withGameDuration(time) {
        this.gameDuration = time;
        return this;
    }

    withRedCarCount(redCarCount) {
        this.redCarCount = redCarCount;
        return this;
    }

    withGreenCarCount(greenCarCount) {
        this.greenCarCount = greenCarCount;
        return this;
    }

    withTruckCount(truckCount) {
        this.truckCount = truckCount;
        return this;
    }

    build() {
        console.log(this);
        return new Game(
            this.gameDuration,
            this.redCarCount,
            this.greenCarCount,
            this.truckCount
        );
    }
}

class Game {
    constructor(gameDuration, redCarCount, greenCarCount, truckCount) {
        this.gameDuration = gameDuration;
        this.redCarCount = redCarCount;
        this.greenCarCount = greenCarCount;
        this.truckCount = truckCount;

        this.counter = document.querySelector('.game__counter');
        this.timerDisplay = document.querySelector('.game__timer');
        this.btnImg = document.querySelector('.play__btn>.fas');
        this.playBtn = document.querySelector('.play__btn');
        this.scoreSum = document.querySelector('.total__score>span');

        this.playBtn.addEventListener('click', () => {
            if (this.isStarted) {
                this.stop();
            } else {
                this.start();
            }
        });

        this.gameField = new Field(redCarCount, greenCarCount, truckCount);
        this.gameField.setClickListener(this.onItemClick);

        this.score = 0;
        this.totalScore = 0;
        this.isStarted = false;
        this.setTimer = undefined;
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }

    nextStage() { 
        this.redCarCount = this.redCarCount + 1;
        this.greenCarCount = this.greenCarCount + 1;
        this.truckCount = this.truckCount + 1;
    }

    // next level
    start() {
        this.isStarted = true;
        this.init();
        this.changeBtnImg();
        sound.playBackground();
    }

    // reset btn
    startInit() {
        this.isStarted = true;
        this.init();
        this.changeBtnImg();
        sound.playBackground();
    }

    init() {
        this.gameField.initField();
        this.showStartButton();
        this.resetCounter();
        this.startTimer();
    }

    stop() {
        this.isStarted = false;
        this.hideStartButton();
        this.stopGameTimer();
        sound.stopBackground();
        this.resetTotalScore();
        this.onGameStop && this.onGameStop('cancel');
    }

    finish(win) {
        this.isStarted = false;
        this.hideStartButton();
        this.stopGameTimer();
        sound.stopBackground();
        if (win) {
            sound.playWin();
        } else {
            sound.playAlert();
            this.resetTotalScore();
        }
        this.onGameStop && this.onGameStop(win? 'win' : 'lose');
    }

    resetTotalScore() {
        this.scoreSum.innerHTML = '0';
        this.totalScore = 0;
    }
    
    onItemClick = itemType => {
        if(!this.isStarted) {
            return;
        }
    
        if (itemType === 'carRight') {
            this.totalScore++;
            this.score++;
            this.scoreSum.innerHTML = this.totalScore;
            this.counter.innerHTML = this.redCarCount - this.score;
            // 시간 내 성공하면
            if (this.score === this.redCarCount) {
                this.finish(true);
                this.nextStage();
                this.gameField.updateField(1);
            }
        } else if (itemType === 'carWrong') {
            this.finish(false);
            this.resetTotalScore();
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
            // Time Out
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
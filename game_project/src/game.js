'use strict';

export default class Game {
    constructor(gameDuration, redCarCount, greenCarCount, truckCount) {
        this.gameDuration = gameDuration;
        this.redCarCount = redCarCount;
        this.greenCarCount = greenCarCount;
        this.truckCount = truckCount;

        this.counter = document.querySelector('.game__counter');
        this.timerDisplay = document.querySelector('.game__timer');
        this.playBtn = document.querySelector('.play__btn');
        
        this.btnImg = document.querySelector('.play__btn>.fas');
        this.score = 0;
        this.started = false;
        this.setTimer = undefined;
    }
}
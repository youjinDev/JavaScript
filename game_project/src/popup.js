'use strict';

export default class Popup {
    constructor() {
        this.popUp = document.querySelector('.popup');
        this.popUpText = document.querySelector('.message');
        this.popUpRestart = document.querySelector('.restart__btn');
        this.popUpNextStage = document.querySelector('.next__btn');
        
        this.popUpRestart.addEventListener('click', () => {
            this.onClick && this.onClick();
            this.hide();
        });

        this.popUpNextStage.addEventListener('click', () => {
            //game next level로 넘어가야 함
            this.onClickNextLevel && this.onClickNextLevel();
            this.hide();
        });
    }

    setRestartClickListener(onClick) {
        this.onClick = onClick;
        console.log(this);
    }

    setNextClickListener(onClickNextLevel) {
        this.onClickNextLevel = onClickNextLevel;
    }

    showWithText(text) {
        this.popUp.classList.remove('invisible');
        this.popUpText.innerHTML = text;
    }

    hide() {
        this.popUp.classList.add('invisible');
    }
}
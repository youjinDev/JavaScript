'use strict';

import Game from './game.js';
import PopUp from './popup.js';

const GREEN_CAR_COUNT = 10;
const RED_CAR_COUNT = 5;
const TRUCK_COUNT = 5;
const TIME = 5;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
    game.start();
});

const game = new Game(TIME, RED_CAR_COUNT, GREEN_CAR_COUNT, TRUCK_COUNT);
game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'win':
            message = '이겼습니다!🙌';
            break;
        case 'cancle':
            message = ' ';
            break;
        case 'lose':
            message = '졌습니다!🤬'
            break;
    }

    gameFinishBanner.showWithText(message);

});



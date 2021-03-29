'use strict';

import GameBuilder from './game.js';
import PopUp from './popup.js';

// Builder Pattern
const game = new GameBuilder()
    .withGameDuration(5)
    .withRedCarCount(5)
    .withGreenCarCount(5)
    .withTruckCount(5)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'win':
            message = '이겼습니다!🙌';
            break;
        case 'cancel':
            message = ' ';
            break;
        case 'lose':
            message = '졌습니다!🤬'
            break;
    }
    gameFinishPopup.showWithText(message);
});

const gameFinishPopup = new PopUp();
gameFinishPopup.setClickListener(() => {
    game.start();
});

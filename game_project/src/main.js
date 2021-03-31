'use strict';

import GameBuilder from './game.js';
import PopUp from './popup.js';

// Builder Pattern
const game = new GameBuilder()
    .withGameDuration(10)
    .withRedCarCount(5)
    .withGreenCarCount(5)
    .withTruckCount(5)
    .build();
    
const gameFinishPopup = new PopUp();
gameFinishPopup.setRestartClickListener(() => {
        game.start();
});

game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'win':
            message = 'WIN!🙌';
            gameFinishPopup.popUpRestart.style.visibility = 'hidden';
            gameFinishPopup.popUpNextStage.style.visibility = 'visible';
            break;
        case 'cancel':
            message = 'STOPPED';
            gameFinishPopup.popUpNextStage.style.visibility = 'hidden';
            gameFinishPopup.popUpRestart.style.visibility = 'visible';
            break;
        case 'lose':
            message = 'LOSE!🤬';
            gameFinishPopup.popUpRestart.style.visibility = 'visible';
            gameFinishPopup.popUpNextStage.style.visibility = 'hidden';
            break;
    }
    gameFinishPopup.showWithText(message);
});

gameFinishPopup.setNextClickListener(() => {
    game.start();
});
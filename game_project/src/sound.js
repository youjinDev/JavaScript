
const alert_sound = new Audio('carrot/sound/alert.wav');
const back_sound = new Audio('carrot/sound/bg.mp3');
const win_sound = new Audio('carrot/sound/game_win.mp3');
const right_car_sound = new Audio('carrot/sound/carrot_pull.mp3');

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

export function playAlert() {
    playSound(alert_sound);
}

export function playWin() {
    playSound(win_sound);
}

export function playRight() {
    playSound(right_car_sound);
}

export function playBackground() {
    playSound(back_sound);
}

export function stopBackground() {
    stopSound(back_sound);
}
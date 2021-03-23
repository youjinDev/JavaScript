'use strict';

const sectionPlayground = document.querySelector('.section__playground');
const playBtn = document.querySelector('.play__btn');
const restartBtn = document.querySelector('.restart__btn');
const counter = document.querySelector('.counter');
const wrapper = document.querySelector('.car__wrapper');
const popup = document.querySelector('.popup');
const p = document.querySelector('.p');
let timerDisplay = document.querySelector('.timer');

// 타이머 시작
let setTimer;

// Start play button
playBtn.addEventListener('click', settingGame);
playBtn.addEventListener('click', () => {
    // playBtn 클릭 방지
    playBtn.disabled = true;

    // timer 시작
    startTimer();
});

wrapper.addEventListener('click', (e) => {

    // miss click
    if (e.target.className === 'car car__green' || e.target.className ==='car car__truck') {
        p.innerHTML = 'LOSE🤬'
        gameoverPop();
        return;
    }
    counter.innerHTML -= 1;
    removeCar(e);

    // game clear
    if (counter.innerHTML == 0) {
        p.innerHTML = 'CLEAR🤩'
        stopTimer();
        gameoverPop();
    }
    
});

// restart btn
restartBtn.addEventListener('click', () => {
    popup.classList.toggle('invisible');
    playBtn.classList.toggle('invisible');
    startTimer();
    settingGame();
});

// function
function settingGame() {

    // 1. 자동차 추가
    wrapper.innerHTML = `
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--red.png" alt="" class="car car__red">
        <img src="carrot/img/car--truck.png" alt="" class="car car__truck">
        <img src="carrot/img/car--truck.png" alt="" class="car car__truck">
        <img src="carrot/img/car--truck.png" alt="" class="car car__truck">
        <img src="carrot/img/car--truck.png" alt="" class="car car__truck">
        <img src="carrot/img/car--truck.png" alt="" class="car car__truck">
    `;

    // 2. 자동차 랜덤 배치
    function randomPlace(car) {
        let clientRect = sectionPlayground.getBoundingClientRect();
        let randX = Math.floor(Math.random() * (clientRect.right - 100)); //1200 - 100. 0~1100
        let randY = Math.floor(Math.random() * ((clientRect.bottom - 100) - 315)) + 315; // 315 ~ 600
        car.style.transform = `translate(${randX}px, ${randY - 315}px)`;
    }

    // 함수 실행
    const cars = document.querySelectorAll('.car');
    cars.forEach((currentValue) => {
        randomPlace(currentValue)
    });
}

function startTimer() {
    // 변수 초기화
    counter.innerHTML = 10;
    timerDisplay.innerHTML = 10;

    setTimer = setInterval(() => {
        timerDisplay.innerHTML = timerDisplay.innerHTML - 1;

        if (timerDisplay.innerHTML == 0) {
            p.innerHTML = 'TIME OUT😰'
            gameoverPop();
            return;
        }
    }, 1000);
}

// gameover 종류 = 초록차 눌렀을 때 or 시간 다 됐을때
function gameoverPop() {
    // 팝업 띄우기
    popup.classList.toggle('invisible');
    playBtn.classList.toggle('invisible');

    // timer 정지
    stopTimer();
}

function stopTimer() {
    clearInterval(setTimer);
    // setTimer = null;
}

function removeCar(e) {
    wrapper.removeChild(e.target);
}
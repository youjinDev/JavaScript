'use strict';

const sectionPlayground = document.querySelector('.section__playground');
const playBtn = document.querySelector('.play__btn');
const restartBtn = document.querySelector('.restart__btn');
const counter = document.querySelector('.counter');
const wrapper = document.querySelector('.car__wrapper');
const popup = document.querySelector('.popup');

// Start play button
playBtn.addEventListener('click', settingGame);

function settingGame() {

    // 1. 자동차 추가
    wrapper.innerHTML = `
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
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
        <img src="carrot/img/car--green.png" alt="" class="car car__green">
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

} // settingGame함수 끝



// 3. 타이머 시작
let timerDisplay = document.querySelector('.timer');
ltimerDisplay.innerHTML = 10;

playBtn.addEventListener('click', () => {
    let countdown = setInterval(() => {
        timerDisplay.innerHTML = timerDisplay.innerHTML - 1;
        if (timerDisplay.innerHTML == 0) {
            gameover();
            clearInterval(countdown);
        }
    }, 1000);
})

    // gameover 종류 = 초록차 눌렀을 때 or 시간 다 됐을때
function gameover() {
    // 팝업 띄우기
    popup.classList.remove('invisible');
}



// 3. 남은 갯수를 표시한다
// 4. 다른 것을 클릭하면 게임을 종료한다










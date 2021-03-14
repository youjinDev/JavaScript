'use strict';

const target = document.querySelector('.target');
const result = document.querySelector('.result');
const vertical = document.querySelector('.line.vertical');
const horizontal = document.querySelector('.line.horizontal');
const targetRect = target.getBoundingClientRect();
const targetWidth = targetRect.width / 2;
const targetHeight = targetRect.height / 2;

document.addEventListener('mousemove', e => {
    // result에 동적으로 좌표를 출력하게 만든다
    let Y = e.clientY;
    let X = e.clientX;

    result.innerHTML = `🚩X 좌표 : ${X} 🚩Y 좌표 : ${Y}`;

    result.style.transform = `translate(${X}px, ${Y}px)`;

    // vertical, horizontal line 을 동적으로 움직이게 만든다
    vertical.style.transform = `translateX(${X}px)`;
    horizontal.style.transform = `translateY(${Y}px)`;

    // target image도 동적으로 움직이게 만든다
    target.style.transform = `translate(${X - targetWidth}px, ${Y - targetHeight}px)`;
});

// 추가할 기능
// 사운드
const audio = document.querySelector('.shoot');
document.addEventListener('click', () => {
audio.play();
})

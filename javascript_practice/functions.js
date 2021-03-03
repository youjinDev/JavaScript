'use strict';

// 1. Function
// 프로그램 내에서 기본적이고 기초적인 building block
// 여러번 재사용 가능
// 값을 계산하거나 태스크를 수행
// function 은 object! 변수 할당, 파라미터 전달, 함수 리턴 가능
// 하나의 함수는 한 가지의 일만 하도록 작성

printHello; // Hoisted

function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello');
log(12345); // 문자열로 변환되어 출력됨
// js에서는 타입이 중요한 경우의 함수는 조금 난해할 수 있음

// 2. Parameters
/*
premitive parameters : passed by value
object parameters : passed by reference
*/
function changeName (obj) {
    obj.name = 'coder';
}
const student = {name : 'youjin'};
changeName(student);
console.log(student);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} from ${from}`)
}
showMessage('Hello World!');

// 4. Rest parameters (added in ES6)
// ...args : 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('cha', 'you', 'jin'); // 배열 형태로 전달됨

// 5. Return a value
function sum(a,b) {
    return a+b;
    // default return value is 'undefined'
}

const result = sum(3,4);
console.log(result);

// 6. Early return, early exit
// don't
function upgradeUser (user) {
    if (user.point > 10) {
        // long update logic...
    }
}

// do
function upgradeUser(user) {
    // 조건이 맞지 않으면 함수를 빨리 종료
    if(user.point <= 100) {
        return;
    }
    // 조건이 맞을 때만 필요한 로직을 작성
    // long upgrade logic...
}

// 7. Function expression
// anonymous function
const printIt = function () {
    console.log('print it');
}
printIt();
// expression에서 named function을 사용하는 이유는
// 디버깅에서 stack traces에서 함수명이 보이게 하기 위해서

const printAgain = printIt;
printAll();

const sumAgain = sum;
console.log(sumAgain(1,2));

// funcion declaration은 hoisting 가능
// function expression은 hoisting 불가능

// 8. Arrow function
// always anonymous function
const simplePrint = () => console.log('simplePrint');

const add = (a, b) => a + b;
console.log(add(10234,12413));

const multiply = (a, b) => {
    // do something more...
    return a * b;
    // block 안에서는 return 필요
};

// IIFE : Immediately Invoked Function Expression
// 함수를 바로 실행하고 싶을 때
(function hello() {
    console.log('IIFE');
})();











// function calculate (command, a, b) {
//     if (command === '+') {
//         return a+b;
//     } else if (command === '-') {
//         return a-b;
//     } else if (command === '*') {
//         return a*b;
//     } else if (command === '/') {
//         return a/b;
//     } else if (command === '%') {
//         return a%b;
//     } else {
//         return;
//     }
// }

// const result = calculate('-', 1, 2);
// console.log(result);
// const result2 = calculate('a', 1, 2);
// console.log(result2);


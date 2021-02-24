'use strict';


// 1. variable let
// let : mutable data type
// const : immutable data type
let hey;
hey = 'string!';
console.log(hey);
hey = 3;
console.log(hey);

let heey = hey;
console.log(heey);
heey = 'changing!';
console.log(heey); // 변경 가능 (재할당 가능)

let nanami = 'nanami';
let nanami = 'love'; // Uncaught SyntaxError: Identifier 'nanami' has already been declared (동일한 변수명 재선언 불가)
console.log(nanami);


let name = 'youjin';
console.log(name);
name='jello';
console.log(name);

console.log(name);

// Don't use var
// var hoisting : 어디에서 선언하든지 제일 위로 선언을 끌어올려주는 것
// has no block scope : 블록을 선언해도 어디서든지 보여질 수 있음
// 이러한 위험 부담 때문에 let을 사용
console.log(a);
var a;
a = 2;

// 2. variable constant
// immutable data type
// security 
// thread safety : 다중 스레드 환경에서 동시에 한 변수에 접근하여 값을 변경하는 것 방지
// reduce human mistakes

// 3. Variable types
// primitive : single item인 number, boolean, string, null, undefined
// object : 여러개의 single item, box container
// function, first-class function : 함수도 변수에 할당 가능, 함수에 파라미터로 전달 가능, 리턴 타입으로도 가능

const school = 'dokyo';
console.log(school);
const school2 = school;
console.log(school2);
school2 = 2;
console.log(school2); // Uncaught TypeError: Assignment to constant variable.

const infinity = 1/0;
console.log(infinity);
const nan = 'not a number' / 2;
console.log(nan);

const bigInt = 12893729873498237195871893279n;
console.log(typeof bigInt);

// string
const char = 'F';
const clock = 'watch';

// template literals (string)
const helloToclient = `hi! ${name}`;
console.log(helloToclient);

// boolean
// false : 0, null, undefined, ''
// true : 1, any other value
const test = 3<1;
console.log(test);
const test2 = '333' > '111';
console.log(test2);

// null
let nothing = null;
console.log(nothing);

// undefined
let ab;
console.log(ab);

// symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);
//  runtime-wide 심볼 레지스트리에서 해당 키로 존재하는 심볼을 찾는다. 없으면 '전역 심볼 레지시트리'에  해당 키로 새로운 심볼을 만들어 준다.
const gSymbol = Symbol.for('id');
console.log(gSymbol.description);
console.log(gSymbol.toString());
console.log(symbol1===gSymbol);

// 4. Dynamic typing : 선언할 때 어떤 타입인지 선언하지 않고, 런타임시 할당된 값에 따라 타입이 변경됨

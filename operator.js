'use strict';

// 1. String concatenation
console.log('my' + 'dog');
console.log('1' + 2);
console.log(`string literals : ~!'''
1 + 2 = ${1+2}`);
console.log('youjin\'s \n\tbook');

// 2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(6%4); // remainder
console.log(2**3); // exponentiation 

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}
counter : ${counter}`); // preIncrement : 3, counter : 3

const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}
counter : ${counter}`); // postOncrement : 3, counter : 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // false
console.log(10 <= 6); // false
console.log(10 > 6); // true
console.log(10 >= 6); //true

// 6. Logical operators : || (or), && (and), ! (not)
const val1 = false;
const val2 = 4 < 2;

// 첫 번째 조건이 ture이면 뒤에 조건은 보지 않는다
// 그러므로 heavy한 조건은 모두 false일 때 마지못해 호출될 수 있도록 맨 뒤에 배치하는 것이 효율적!
console.log(`or : ${val1 || val2 || check()}`);

// 마찬가지로 선 조건이 false이면 무조건 false이므로 뒤에 조건은 보지 않는다
//  console.log('😨') 출력되지 않음
console.log(`and : ${val1 && val2 && check()}`);

function check() {
    for (let i=0; i<100; i++) {
        //낭비
        console.log('😨');
    }
    return true;
}

// &&연산자는 이렇게도 쓰임
// nullableObject && nullableObject.something
/* if (nullableObject != null) {
    nullableObject.something;
}
*/

console.log(!val2); // ture

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type converse
console.log(stringFive == numberFive); //ture
console.log(stringFive != numberFive); //false

// === strict equality, no type converse
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const student1 = {name: 'youjin'};
const student2 = {name: 'youjin'};
const student3 = student1;
console.log(student1 == student2);
console.log(student1 === student2);
console.log(student1 === student3);

console.log('\n\n\n');

// equality
console.log(0==false); //t
console.log(0===false); //f
console.log(''==false); //t
console.log(''===false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

console.log('\n\n\n');

// 8. Tenary operator
// condition ? val1 : val2;
const pet = 'dog';
console.log(pet === 'dog' ? 'yes' : 'no');

console.log('\n\n\n');

// 9. Switch statement
// use for multiple if checks

const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'naverwhale' :
        console.log('love it!');
        break;
    default:
        console.log('Internet');
        break;
}

console.log('\n\n\n');

// 10. Loops
let i = 3;
while (i > 0) {
    console.log('while : ' + i);
    i--;
}
console.log(i);

console.log('\n\n\n');

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
console.log(i);

console.log('\n\n\n');


// break, continue
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`i : ${i}`);
}

console.log('\n\n\n');

for (let i = 0; i < 10; i++) {
    if (i > 8) {
        break;
    }
    console.log(`i : ${i}`);
}


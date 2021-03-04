'use strict';

// 0. Declarations
let arr1 = new Array();
console.log(arr1.length); //0

let arr2 = new Array(3);
console.log(arr2.length); //3
console.log(arr1[1]); //undefined

let arr3 = [];
console.log(arr3[0]); //undefined

let books = ['Alice', 'Monster', 'Creater', 'Cinderella', 'Red shoes'];
const length = books.length;
console.log(length);

// 1. for...of 문 : 권장
for (let book of books) {
    console.log(book);
}

// 2. for...in 문 : 객체의 속성에서 따온 문법
// for..in 반복문은 모든 프로퍼티를 대상으로 순회. 키가 숫자가 아닌 프로퍼티도 순회 대상에 포함됨
// for..in 반복문은 배열이 아니라 객체와 함께 사용할 때 최적화되어 있어서 배열에 사용하면 객체에 사용하는 것 대비 10~100배 정도 느림
for (let prop in books) {
    console.log(books[prop]);
}

// 3. forEach문
books.forEach(book => console.log(`${book}은 재미있다`));
books.forEach((book, index, array) => {
console.log(`책 ${book}, 인덱스 ${index}, 배열 ${array}`);
});

// 4. length property
// 배열의 길이기 바뀔 때마다 갱신된다
let fruits = [];
fruits[12345] = '사과';
console.log(`배열 fruits의 길이는 ${fruits.length}`);

// 수동으로 length 길이를 변경할 수 있다. 배열 비우기도 가능.
fruits.length = 0;
console.log(`length 수정 후 배열 fruits의 길이는 ${fruits.length}`);

// 5. 다차원 배열
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix[1][2]); // 6
console.log(matrix[1]); // [4, 5, 6]

// 6. String : 요소를 쉼표로 구분한 문자열이 반환
console.log(String(matrix));

// 7. 삽입, 삭제
// push : 가장 뒤에 삽입
// pop : 가장 뒤의 내용 삭제

fruits.push('복숭아');
fruits.push('귤');
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift : 가장 앞에 삽입 후 shift 해야하므로 매우 느린 속도
fruits.unshift('한라봉');
fruits.unshift('포도');
fruits.unshift('체리');
fruits.unshift('낑깡');
fruits.unshift('망고');
console.log(fruits);

// shift : 가장 앞에 삭제 후 shift 해야하므로 매우 느린 속도
fruits.shift();
console.log(fruits);

console.clear();

// splice 
// fruits.splice(1); //index[1]부터 끝까지 전부 지움
console.log(fruits);

fruits.splice(2, 2);
console.log(fruits); //index[2] 포함 2개 삭제

fruits.splice(1, 1, '자두', '참외');
console.log(fruits); //index[1] 포함 1개 삭제 후 자두와 참외 삽입

// concat : 두 배열 합치기
let fruits2 = ['샤인머스캣', '감'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 8. Searching : indexOf, includes
console.clear();
console.log(newFruits);
console.log(newFruits.indexOf('샤인머스캣'));
console.log(newFruits.includes('코코넛')); // false 출력
console.log(newFruits.indexOf('코코넛')); //-1 출력

// 9. lastIndexOf
console.clear();
newFruits.push('자두');
console.log(newFruits);
console.log(newFruits.lastIndexOf('자두'));


// 10. object in Array
let Students = [
    {name : '민호', age : 28},
    {name : '승윤', age : 24},
    {name : '예은', age : 11},
]

console.log(Students);
console.log(Students.age);

let Donuts = [
{name : 'choco', price : 2000},
{name : 'peanut', price : 1000},
{name : 'vanilla', price : 2200},
{name : 'berry', price : 2300},
{name : 'jelly', price : 1900},
{name : 'butter', price : 2500},
];

Donuts.forEach(donut => {
    if (donut['name']=='vanilla') {
        console.log(donut.price);
    }
});

fetch('donut.json')
  .then((response) => response.json())
  .then(json => {
    // let print = JSON.stringify(json);
    // console.log(print);
    return json.Donuts;
  });

  function printDonutPrice (Donuts) {
    Donuts.forEach(donut => {
        if (donut['name']=='berry') {
            console.log(donut['price']);
        }
    });
  }

  printDonutPrice(Donuts);





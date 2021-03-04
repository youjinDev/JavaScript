'use strict';

let books = ['Alice', 'Kiki', 'Creater', 30, 111111];
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

// length 프로퍼티
let fruits = [];
fruits[12345] = '사과';
console.log(`배열 fruits의 길이는 ${fruits.length}`);

// 수동으로 length 길이를 변경할 수 있다. 배열 비우기 가능.
fruits.length = 0;
console.log(`length 수정 후 배열 fruits의 길이는 ${fruits.length}`);

// 다차원 배열
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(matrix[1][2]); // 6
console.log(matrix[1]); // [4, 5, 6]

// String : 요소를 쉼표로 구분한 문자열이 반환
console.log(String(matrix));

let Students = [
    {name : 'youjin', age : 28},
    {name : '승윤', age : 24},
    {name : '예은', age : 11},
]

console.log(Students);
console.log(Students.age);



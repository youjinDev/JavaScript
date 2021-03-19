'use strict';

let student = {
    name: '유진',
    age: '28',
    class: 'javascript',
    enroll: true,
}

function copyObject(student) {
    let result = {};
    for (let prop in student) {
        result[prop] = student[prop];
    }
    return result;
}

let student2 = copyObject(student);
let student3 = student;
student3.name = '김뽀삐';
let student4 = Object.assign({}, student);


student2.name='김종구';
console.log(student);
console.log(student2);
console.log(student3);
console.log(student4);

student4.name = '나나미';
console.log(student4);
console.log(student);



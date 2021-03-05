'use strict';

// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    fruits.forEach((fruit) => {
        console.log(fruit);
    });

    // solution : join('seperator:string'), return string
    const result = fruits.join(' and ');
    console.log(result);
    const result2 = fruits.join(); // 인수 없으면 기본값 ,이 들어감
    console.log(result2);

  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    // solution : split('seperator'|limit number), return array
    const result = fruits.split(','); // seperator 인자로 꼭 전달
    console.log(result);

    let names = 'Bilbo Gandalf Nazgul Hanna';
    let arr = names.split(' ', 3); // limit length 지정 가능
    console.log(arr); // Bilbo Gandalf Nazgul
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    let newArray = [];
    const arrayLength = array.length;;
    for (let i = 0; i < arrayLength; i++) {
        newArray.push(array[arrayLength-(i+1)]);
    }
    console.log(newArray);

    // solution : reverse(), return array
    const solArray = array.reverse();
    console.log(solArray);
    console.log(array); // 원본 그 자체를 역으로 만들어줌

    const arr = ['안', '녕', '하', '세', '요'];
    console.log('문자열도 가능     ' + arr.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const newArray = array.splice(2, 3); //return 'deleted' element
    console.log(newArray); // [3, 4, 5]
    console.log(array); // [1, 2] 원본 배열 자체를 수정함

    // solution : slice(), return array 배열에서 원하는 부분만 return 해서 받아오고 싶을 때
    const array2 = [1, 2, 3, 4, 5];
    console.log(array2.slice(2, 5)); // [3, 4, 5]
    const array3 = array2.slice();

    console.log(array3); // 인수를 넘기지 않고 array의 복사본을 만들 수 있다
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
    new Student('F', 20, true, 90),
  ];
  
  // Q5. find a student with the score 90
  {
      students.forEach(Student => {
          if(Student.score == 90) {
              console.log(Student.name)
          }
      });

    // Solution : find - 첫번째로 나온 true 값을 리턴함
    const result = students.find((student, index) => student.score === 90 && index == 5);
    console.log(result);
    console.log(typeof(result)); // object
    console.log(result.name, result.score);

  }
  
  // Q6. make an array of enrolled students
  {
    // solution : filter(callback), return new array
    const result = students.filter((student) => student.enrolled);
    console.log(result);
      // [Student, Student, Student, Student]
      // 0: Student {name: "A", age: 29, enrolled: true, score: 45}
      // 1: Student {name: "C", age: 30, enrolled: true, score: 90}
      // 2: Student {name: "E", age: 18, enrolled: true, score: 88}
      // 3: Student {name: "F", age: 20, enrolled: true, score: 90}
      // length: 4
      // __proto__: Array(0)
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {

    // sulution : map(callback(currentValue)), return new array
    const result = students.map((student) => student.score);
    console.log(result); // [45, 80, 90, 66, 88, 90]
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // solution : some(callback), return boolean
    const result = students.some(student => student.score < 50);
    console.log(result); // true

    // 배열의 elements가 조건을 만족하는지 확인하려면 : every
    // 모두의 age가 30점 이상인지 확인
    const result2 = students.every(student => student.age >= 30);
    console.log(result2); // false
  }
  
  // Q9. compute students' average score
  {
    let sum = 0;
    const scores = students.map((student) => {
      return student.score;
    });
    scores.forEach(score => {
      sum += score;
    });
    let avg = sum / scores.length;
    console.log(avg);

    // solution : reduce(callback, initialValue)
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing score >= 80
  {
  // solution
   const result = students.map(student => student.score).filter(score => score >= 80).join(', ');
   console.log(result); // 80, 90, 88, 90
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'

  {
    const result = students.map(student => student.score)
    .sort((a, b) => a - b)
    .join(', ');
    console.log(result);
  }
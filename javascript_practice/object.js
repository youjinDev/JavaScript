
let user = {
    name : "차유진",
    age : 28,
    married : false,
    "favorite person" : "나나미 켄토"
};

if(user.blakb === undefined) {alert("false")};
alert("blakb" in user); // 위와 동일한 내용


// let key = prompt("어떤 정보를 입력?");
// alert(user[key]);


// let fruit1 = prompt("어떤 과일 선택할거임?", "apple");


// let fruits = {
//     [fruit1] : 5, // 변수 fruit1에서 값을 동적으로 받아옴
// };

// alert(fruits.apple);
// alert(fruits.fruit1);

// let item = prompt("어떤 item을 가방에 넣을거임?", "tumbler");
// let bag = {};
// bag[item] = 5;


function makeUser (name, age) {
    return {
        name,
        age,
    };
}

let user2 = makeUser('나나미', 28);
console.log(user2.name);

let obj = {
    0 : "number 0"
};

console.log(obj[0]);

obj.__proto__ = 5;
console.log(obj.__proto__); // 객체가 출력됨

let student = {
    name : 'Itadori',
    age : 15,
    favorite : null
};

for (prop in student) {
    console.log(student[prop]); // value 출력
    console.log(prop); // key 출력
}

let codes = {
    "+49": "독일",
    "+41": "스위스",
    "+44": "영국",
    // ..,
    "+1": "미국"
  };
  
  for (let code in codes) {
    console.log( +code ); // 49, 41, 44, 1
  }

  consoloe.log(typeof student);
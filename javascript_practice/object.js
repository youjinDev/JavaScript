
'use strict';

{
let user = {
    name : "차유진",
    age : 28,
    married : false,
    'favorite person' : '김연아'
};

/*
if(user.blakb === undefined) {alert("false")};
alert("blakb" in user);
위와 동일한 내용
*/

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

//함수로 object 만들기
function makeUser (name, age) {
    return {
        name,
        age,
    };
}

let user2 = makeUser('나나미', 28);
console.log(user2.name);

// property key에 숫자 대입 가능
let obj = {
    1 : "number 0"
};

console.log(obj[1]); // number 0

obj.__proto__ = 5;
console.log(obj.__proto__); // 객체가 출력됨

let student = {
    name : 'Itadori',
    age : 15,
    favorite : null
};

for (let prop in student) {
    console.log(student[prop]); // value 출력
    console.log(prop); // key(=property) 출력
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

  console.log(typeof student);
}

console.clear();

// property descriptor의 플래그 변경하기! 
{

    let user = {};

    // 이 메서드를 사용하면 프로퍼티 플래그를 변경할 수 있다(기본은 false)
    Object.defineProperty(user, 'name', {
        vlaue: '김거북',
        configurable: true
    });
    
    let propertyDescriptor = Object.getOwnPropertyDescriptor(user, 'name'); //특정 프로퍼티에 대한 정보(property descriptor 객체)를 얻는다

    console.log(JSON.stringify(propertyDescriptor, null, 4));

    /*
    Object.defineProperty 메서드로 객체에 프로퍼티를 만들면 property descriptor 객체가 이렇게 모두 false로 변경된다
    {
    "writable": false,
    "enumerable": false,
    "configurable": false
    }
    */

    // user.name = '김정민';
    // writabale = false 인 name의 수정 불가!

    let student = {}

    Object.defineProperties(student, {
        name: {
            value: '강환성',
        },
        age: {
            value: '18',
            writable: true,
            configurable: true
        }
    });

    student.age = '20';

    console.log(student); //강환성, 20
    console.log(Object.getOwnPropertyNames(student));

}
console.clear();

// 객체 내 custom method
{
    let user = {
        name: '크리스',
        toString() { // Custom Method는 enumerable
            return this.name;
        }
    };

    for (let prop in user) console.log(prop); // name, toString

    Object.defineProperty(user, 'toString', {
        enumerable: false
    });

    for (let prop in user) console.log(prop); // name만 출력됨


    

}
console.clear();
// getter, setter
{
    let pet = {
        name: '뚜비',
        animal: 'dog',

        // getter는 절대 매개변수를 갖지 않음
        get nameAnimal() {
            return `${this.name} is a ${this.animal}`;
        },

        set nameAnimal(value) {
            [this.name, this.animal] = value.split(' ');
        }
    };
    
    //getter가 실행됨
    let petName = pet.nameAnimal;
    console.log(petName); // 뚜비 is a dog

    delete pet.nameAnimal; // delete 연산자로 삭제할 수 있음
    
    petName = pet.nameAnimal;
    console.log(petName); // undefined

    // setter가 실행됨
    pet.nameAnimal = '까까 cat';
    console.log(pet.nameAnimal); // 까까 is a cat

    console.log(typeof nameAnimal); // undefined, 즉 가상의 프로퍼티가 생김. 읽고 쓸 수는 있지만 실재하지 않음!

    console.clear();

    let user = {

        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 3) {
                alert('유효한 이름을 입력하세요');
            }
            return this._name = value;
        }
    };

    user.name = " "; //alert

    user.name = '장발장';
    console.log(user.name); //장발장
    console.log(user._name); //장발장 _프로퍼티는 객체 내부에서만 활용하는 것이 관습
























}
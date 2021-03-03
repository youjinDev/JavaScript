
let user = {
    name: 'Youjin',
    gender : 'female'
};

let changeName1 = function(user, newName) {
    let newUser = user;
    newUser.name = newName;
    return newUser;
};

let user2 = changeName1(user, 'Hansam');
console.log(`이름은 제대로 ${user2.name}으로 바뀌지만, 원본 객체와 같아지므로 user!==user2(Hansam) 결과는 다음과 같다.`);
console.log(user!==user2); // false


// 새로운 객체를 반환하도록 수정
// user과 new user은 서로 다른 객체가 됨
let changeName2 = function(user, newName) {
    return {
        name : newName,
        gender : user.gender
    };
};

function copyObject (user) {
    let result = {};
    for (let prop in user) {
        result[prop] = user[prop];
    }
    return result;
};

let user3 = changeName2(user, 'Briton');
console.log(`이름도 제대로 ${user3.name}으로 바뀌면서, 원본 객체와 비교 user!==user3(Briton) 결과는 다음과 같다.`);

console.log(user!==user3);
console.log('\n');

// 값으로 전달받은 객체에 변경을 가하더라도 원본 객체는 변하지 않아야 하는 상황
// 불변 객체가 필요할 때
// 정보가 바뀌면 알람을 보내야 하는 상황
if (user !== user3) {
    console.log('사용자 정보가 변경되었습니다.');
}

let user4 = copyObject(user);
user4.name = 'Jung';
console.log(user4.name);
console.log(user4.gender);

// Object의 method assign을 사용하면 반복문 없이도 객체를 복사할 수 있다.
let clone = Object.assign({}, user);
console.log(clone);
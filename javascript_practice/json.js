// JSON
// JavaScript Object Notation

// 1. Object to Json
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const jelly = {
    name : '마이구미',
    favor: '포도',
    price: 1200,
    size: null,
    manufacturingDate: new Date(),
    manufacture: () => {
        console.log(`${this.manufacturingDate}에 제조되었습니다!`);
    }, // 함수는 object의 데이터가 아니기 때문에 json에서 제외됨 (Symbol도 마찬가지)
};

json = JSON.stringify(jelly);
console.log(json);

json = JSON.stringify(jelly, ['name']);
console.log(json);

json = JSON.stringify(jelly, (key, value) => {
    console.log(`key : ${key} value : ${value}`);
    return key === 'name' ? 'youjin' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(jelly);
const obj = JSON.parse(json);
console.log(obj);

jelly.manufacture();
// obj.manufacture(); obj.manufacture is not a function at json.js:44

console.log(jelly.manufacturingDate.getDate());
// console.log(obj.manufacturingDate.getDate()); json.js:49 Uncaught TypeError: obj.manufacturingDate.getDate is not a function at json.js:49

console.clear();
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup은 room을 참조합니다.
  };
  
  room.occupiedBy = meetup; // room references meetup
  
  console.log(JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}
  console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  
  JSON.stringify(meetup, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key == 'occupiedBy' ? undefined : value;
  });

  
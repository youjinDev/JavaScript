// 원본 배열을 수정하지 않는 코드 작성하기

const staffs = [
    {
        name : '유진',
        age : 28,
        year : 10
    },
    {
        name : '진호',
        age : 20,
        year : 12
    },
    {
        name : '민지',
        age : 21,
        year : 10
    },
    {
        name : '나래',
        age : 30,
        year : 8
    },
    {
        name : '훈이',
        age : 22,
        year : 5
    }
];

const newArr = staffs.filter(staff => staff.age > 25);
console.log(newArr);

// 원본 배열 바꾸지 않고 복제하기

const copiedArr = [...staffs];
console.log(copiedArr);

const copiedArr2 = staffs.slice();
console.log(copiedArr2);

console.clear();

// 배열 정렬하기

function sortByName(a, b) {
    if (a.name === b.name) return 0;
    return a.name > b.name ? 1 : -1;
}

function sortByYear(a, b) {
    if (a.year === b.year) return 0;
    return a.year > b.year ? 1 : -1;
}

console.log(staffs);

// 여기에서 원본 staffs 대신 [...staffs]를 쓰면 원하는 결과를 낼 수 있다!
const orderedByName = [...staffs].sort(sortByName);
const orderedByYear = [...staffs].sort(sortByYear);

console.log(orderedByName);
console.log(orderedByYear);
console.log(staffs);

console.clear();

// 원본 배열을 변형하지 않으면서 push나 shift 없이 배열에 요소 추가하기
const animals = ['토끼', '사자', '햄스터', '스컹크', '도롱뇽'];
const newAnimals = ['개', ...animals, '뱀']; // = pop, shift
console.log(newAnimals);
console.log(animals);
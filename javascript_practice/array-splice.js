'use strict';

const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7];
let array = [...ARRAY];
array.splice(1, 1);
console.log('splice 하나 실행 후');
console.log(array);
array.splice(4, 1);
console.log('splice 두번 실행 후');
console.log(array);

let array2 = [...ARRAY];
array2.splice(4, 1);
array2.splice(1, 1);
console.log('뒤에거 부터 지우면 원하는 결과 나옴');
console.log(array2);

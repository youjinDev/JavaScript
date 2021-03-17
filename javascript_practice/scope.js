'use strict';
/*
{
var a = 1;
var outer = function() {
    var b = 2;
    var inner = function() {
        // console.log(b);
        // 함수 내부에서 실제로 호출할 외부 변수들의 정보만 보여준다
        // b는 inner에서 실제로 호출하지 않았으므로, outer 스코프에 inner 변수만 노출된다
        // inner 안에서 b 변수를 호출하면 outer 스코프에 { b: 2, inner : f() } 이렇게 둘 다 노출됨!
        // console.dir(inner);
        console.log(b);
    };

    inner();
};

outer();

}

console.clear();

{
var a = 1;
var outer = function() {

    var inner = function() {
        console.log(a); //undefined
        var a = 3;
    };

    inner();
    console.log(a); // 1
};

outer();
console.log(a); //1

}

console.clear();

{
    let a = 1;
    let outer = function() {
        let a = 2;
    
        let inner = function() {
            
            console.log(a); // ReferenceError : Cannot access 'a' before initialization
                            // let이 hoisting이 되지 않는다면 a=2가 출력될 것. 하지만 ReferenceError 발생. hoisting의 증거!
            let a = 'hi';
        };
    
        inner();
        console.log(a); // 1
    };
    
    outer();
    console.log(a); //1
    
    }
    */

const btn = document.querySelector('.btn');
const count = document.querySelector('.count');

btn.addEventListener('click', () => {
    
    count.innerHTML = add();

    function add() {
        let counter = count.innerHTML;
        console.log(counter); // 처음 한 번 눌렀을 때 0
        counter++;
        console.log(counter);
        return counter;
    }

});

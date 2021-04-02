'use strict';

// 1. function vs. arrow function
// arrow functiondms은 this가 없어서 this 호출시 가장 가까운 scope를 가리킨다

let fooArrow = () => {
    console.log(this);
}

foo(); // this === undefined
fooArrow(); // this === window

function foo() {
    console.log(this);
}





// 2. method vs. function

let user = {
    name: 'cahcha',
    age: 28,
    methodA() {
        console.log(this);
    },
    methodB() {
        let innerArrowB = () => {
            console.log(this);
        }
        innerArrowB();
    },
    methodC() {
        function innerFuncC() {
            console.log(this);
        }
        innerFuncC();
    },
    secret: {
        self: this,
        method3() {
            function innerFunc() {
                console.log(this);// this === undefined
            }
            innerFunc();
        },
        method4() {
            foo();
        },
        method5() {
            fooArrow();
        }
    }
}

user.methodA(); // this === user
user.methodB(); // this === user
user.methodC(); // this === undefined

user.secret.method2 = foo;
user.secret.method2(); // this === secret

user.secret.method3(); // this === undefined

user.secret.method4(); // this === undefined
user.secret.method5(); // this === window
// fooArrow()는 global scope에서 정의되었기 때문에 this를 호출하면 가장 가까운 scope인 window를 참조하게 되는 듯
// methodC와 비교했을 때, methodC내부함수 innerFuncC는 내부에서 선언되고 수행되므로, 블록 scope를 가진다. 즉, hoisting될 때 this binding단계에서 undefined로 초기화된다.

console.clear();

// 3. addEventListener callback
const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.btn');

button.addEventListener('click', foo); // button Element
button.addEventListener('click', fooArrow); // window

button.addEventListener('click', () => {
    console.log(this); // this === window
});

button.addEventListener('click', function (e) {
    console.log(this, e); // button Element
});

wrapper.addEventListener('click', function (e) {
    console.log(this); // this === wrapper element
    console.log(e.currentTarget); // wrapper. currentTarget === this
    console.log(e.target); // currentTarget !== target
});

wrapper.addEventListener('click', (e) => {
    console.log(this); // this === window
    console.log(e.currentTarget); // wrapper. currentTarget !== this
    console.log(e.target);
});

// 4. chaining

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        alert(this.step );
        console.log(this); // ladder 객체
    }
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep(); // 1




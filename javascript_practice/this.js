'use strict';


{
setTimeout(function () {
    console.log(this) //window 객체
}, 100);

setTimeout(() => {
    console.log(this) //window 객체
}, 200);

}



{
const arr = [1, 2, 3, 4, 5]
arr.forEach(function (x) {
    console.log(this, x); // undefined (use strict를 쓰지 않으면 window임)
});

arr.forEach( x =>  {
    console.log(this, x); // window 객체
});
}
console.clear();

{
    function callThis() {
        console.log(this); // arrow function 안에서는 this가 없어서 가장 가까운 scope를 가리키게 됨. 즉, 여기서는 window임
    }
    // addEventListener는 콜백 함수를 호출할 때 자신의 this를 상속하도록 정의되어있음
    // 즉, this를 호출하면 .앞의 element를 가리키게 됨
    const button = document.querySelector('.btn');
    button.addEventListener('click', function (e) {
        callThis(); // HTMLButtonElement
    })

    // 근데 여기는 왜 window 객체지?!
    button.addEventListener('click', (e) => {
        callThis(); // window
    });
}




console.clear();


// method 내부에서의 this
/*
this에서는 호출한 주체에 대한 정보가 담긴다.
어떤 함수를 메서드로서 호출하는 경우 호출 주체는 메서드명 앞의 객체이다.
*/
{   

let obj = {
    methodA () {
        console.log(this); // this === obj 객체
    },
    inner: {
        methodB() {
            console.log(this); // this === inner 객체
        }
    }
};

obj.methodA();
obj.inner.methodB();
}


// // 함수 내부에서의 this
// /*
// 어떤 함수를 함수로 호출할 경우 this가 지정되지 않는다.
// 함수로서 호출하면 호출 주체를 명시하지 않고 개발자가 코드에 직접 관여해서 실행한 것이기 때문에
// 호출 주체에 대한 정보를 알 수 없다.
// 실행 컨텍스트를 활성화 할 당시 this가 지정되지 않은 경우엔 전역 객체를 바라본다.
// 즉, 함수에서의 this는 전역 객체를 가리킨다. 
// */

// // method 내부 '함수'에서의 this

{
    let obj1 = {
        outer() {
            console.log(this); // this === obj1
            // let innerFunc = () => {console.log(this)}; // 이렇게하면 outer을 가리키게 됨
            function innerFunc() {
                console.log(this); // method 내부 함수, this === undefined (strict모드가 아닐 때는 window객체)
            }
            innerFunc(); 

            let obj2 = {
                innerMethod: innerFunc
            };
            obj2.innerMethod(); // method로 호출됨, this === obj2
        }
    };

    obj1.outer(); 
}


{
    let group = {
        title: "1모둠",
        students: ["보라", "호진", "지민"],
      
        showList() {
          this.students.forEach(
            (student) => console.log(this.title + ': ' + student)
          );
        }
      };
      
      group.showList();

}


{
    let students = {
        name : '유진'
    }

    sayHello(); // this === undefined
    students.f = sayHello;
    students.f(); // this === students 객체



    function sayHello() {
        console.log(this.name + ', hello!' + this);
    }


}
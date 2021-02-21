✔ IntersectionObsever API
====================
### 1. 왜 사용할까?
-----------------
- performance 측면에서 유용

### 2. 문법
----------------
```
const observer = new IntersectionObserver(callback, option);
let callback = (entries, observer) => {}
```
- InntersectionObsever를 이용해서 관찰자 만들기
+ IntersectionObserver는 웹 API가 제공하는 것 중 하나로, 원하는 element(관찰 대상)가 특정 영역에 들어오거나 나갈때 callback 함수를 호출하여 알려주는 관찰자이다.
- observer가 callback을 호츨할 때 인자로 entries, observer와 같은 유용한 정보들을 전달해 준다.
```
entries
```
- IntersectionObserverEntry들의 배열
- 화면에 들어온 요소들의 정보를 담고있음
boundingClientRect, intersectionRatio, intersectionRect, isIntersecting, isVisible 등등

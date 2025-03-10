
// java의 메서드와 같음 but,return타입 의미가 없음(작성X).
function printHello() {
  console.log('hello~');
}

//printHello();

// 자료형의 의미가 없기 때문에 매개변수에 let ,const 생략
// 매개변수로 두 정수를 받아 두정수의 합을 출력
function printSum(a, b) {
  console.log(a+b);
}

printSum(10,20);

// 매개변수로 두 수를 전달 받아, 두 수의 곱을 return 하는 함수
function getMulti(a,b) {
  return a*b;
}

 let result = getMulti(2,5);
 console.log(result);

// javascript 는 변수에  함수저장 가능!

// 기본 함수 선언 방식
// 함수 호출을 먼저 적어도 호출됨
printData1();
function printData1() {
  console.log('hello');
}

// 함수 표현식
// 함수에는 ;을 넣거나, 안넣어도 오류는 안남. 
const printData2 = function(){
  console.log('hello');
};
printData2();

// 화살표 함수 : 함수를 간략히 선언(많이 씀!!)
// const printData3 = () => {}; 기본문법
// 실행문이 하나라면 {} 생략가능!
const printData3 = () => {
  console.log('hello');
};

// 기본 함수
function f1(a,b) {
  console.log(a+b);
}

// 표현식 변경 
const f2 = function(a,b){
  console.log(a+b);
};

// 화살표 변경 > react에서 제일 많이 쓰임!!
const f3 = (a,b) => {
  console.log(a+b);
};

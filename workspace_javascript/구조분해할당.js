
// 배열의 데이터를 다른 변수에 저장하는 일반적 방법
const arr1 = [1,2,3];
let a = arr1[0];
let b = arr1[1];
let c = arr1[2];
console.log(a,b,c);


// 배열 구조 분해 할당
let [aa,bb,cc] = arr1;
console.log(aa,bb,cc);

let [aaa,bbb] = arr1;
console.log(aaa,bbb);

let [a1,b1,c1,d1] = arr1;
console.log(a1,b1,c1,d1);

////////////////////////////////////////////
const person = {
  name: 'kim',
  age: 20,
  hobby: 'study'
};

// 객체 구조 분해 할당 ( 많이 씀!! )
// const {name, age, hobby} = person;
const {name, hobby, age} = person; // 변수명과 동시에 key값이 됨
console.log(age, name, hobby); // 객체는 순번이 없음 그래서 key값을 주는것임

const {name:name1, age1, hobby1} = person; //변수명과 key값이 동일 하지 않을때 결과 : undefined
console.log(name1, age1, hobby1);


const student = {
  name : 'Kim',
  age : 30,
  korScore : 80, 
  engScore : 80
};

//매개변수도 student객체가 전달되면 해당 학생의 총점을 리턴하는 함수
function getSum(s) {
  let korScore = s.korScore;
  let engScore = s.engScore;
  return korScore+engScore;
};

// {korScore,engScore} = student; 성립
function getSum1({korScore,engScore}) {
  return korScore + engScore;
};

console.log(getSum1(student));


const phone = {
  modleName : 's5',
  price : 10000
};

//매개변수로 phone 을 전달하면 폰 객체의 모델명과 가격을 출력하는 함수
function p1(p) {
  console.log(p.modleName,p.price);
}

p1(phone);

function p2({modleName,price}) {
  console.log(modleName,price);
}

p2(phone);
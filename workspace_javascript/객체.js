
// 객체 :  key와 value 한 쌍의 데이터로 이루어진 데이터 집합

// 객체 선언 방식
const obj1 = {}; // 빈 객체 생성
// key : value > value라는 데이터에 접근하기 위해 key를 사용
const person = {
  name : 'kim',
  age : 20,
  addr : 'ulsan',
  age : 15 // key 가 중복이면, 마지막으로 넣은 데이터만 유효!
};

// kim 문자열 출력
console.log(person.name);
console.log(person['name']);
console.log(person);

// 새로운 데이터 추가 방법
person.hobby = '공부';
person.age = 50;
console.log(person);
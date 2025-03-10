
// 스프레드 연산자
const arr1 = [1,2,3];
const arr2 = [4,5];


const arr3 = [1,2,3,...arr2];
console.log(arr3);


// [1,2,3,4,5]
arr1[3] = arr2; //[1,2,3[4,5]] push도 동일한 결과
console.log(arr1);


const person = {
  name: 'kim',
  age: 20
};

const score = {
  korScore : 80,
  engScore : 100
};

const student = {
  ...person, //name: 'kim', age: 20 
  ...score //korScore : 80, engScore : 100
 
}
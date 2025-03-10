
// 1. 정수로 이루어진 배열이 매개변수로 들어오면 
//    해당 배열에서 짝수만 출력하는 함수를 선언하고 호출하세요.

function test1 (arr){
  for (let i = 0; i<arr.length; i++){
    if(arr[i]%2===0){
      console.log(arr[i]);
    }
  }
}
const test_data =[1,2,3,4,5,6];
test1(test_data);

//2. 정수로 이루어진 두 배열이 매개변수로 들어오면 
//   두 배열의 모든 요소들의 평균을 리턴하는 함수를  
//   함수표현식으로 구현하고 호출해보세요.
//***같이 변수 선언을 하면 오류가 날수 있음(따로 선언하기)***

const test2 = function(arr,arr1){
  const sum = getArrSum(arr);
  const sum1 = getArrSum(arr1);
  return (sum+sum1)/(arr.length+arr1.length);
  ;
}

// 배열의 합을 구하는 함수
function getArrSum(arr){
  let sum = 0;
  for(const e of arr){
    sum = sum + e;
  }
  return sum;
}
const data1 = [1,2,3,4];
const data2 = [4,5,6,7];
const result = test2(data1,data2);
console.log(`평균 값은 ${result} 입니다.`);


// 3. 문자열로 이루어진 배열이 매개변수로 전달되면 
//    배열 각 요소의 글자 중 길이가 가장 긴 문자열을 리턴하는 함수를 
//    화살표함수로 구현하고 호출해보세요.

const test3 = (arr) => {
  let max = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i].length>max.length){
      max = arr[i];
    }
  }
  return console.log(max);
};

test3(['으어어','엥어어어']);

// 4. 첫번째 매개변수로 전달된 정수의 배수를
//    두번째 매개변수의 갯수만큼 갖는 배열을 리턴하는 
//    함수를 선언하고 호출해보세요.
//    ex>첫번째 매개변수의 인자 : 3, 두번째 매개변수의 인자: 5 -> [3,6,9,12,15]
const test4 = (num1,num2) => {
  let arr = [];
  for(let i = 1; i<num2+1;i++){
    arr.push(num1*i);
  }
  return console.log(arr);
};

test4(4,4);
//alert(123); 팝업창 띄워주는 명령어

let num1 = 5;

if (num1 >= 3){
  console.log('3이상 입니다.');
}
else{
  console.log('아녀아녀유');
}

//1~10까지 출력

for(let i = 1; i<11; i++){
  console.log(i);
}

// 자바 스크립트는 배열 생성시 크기 지정 X
// 크기가 알아서 늘어남
let arr = []; // 빈배열 생성

let arr2 = [1,2,3];
for(let i = 0; i<arr2.length; i++){
  console.log(arr2[i]);
}
console.log(arr2); // 반복문을 안돌려도 나옴

// for...of문법(java 의 for-each문)
for(let e of arr2){
  console.log(e);
}
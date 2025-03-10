
// 배열 생성 문법
const arr1 = new Array(); //  빈 배열 생성
const arr2 = []; // 빈 배열 생성(간단)
const arr3 = [1,3,5]; // 초기값 지정 배열
const arr4 = [1,5.5,'java']; // 자료형 다른 배열
const arr5 = [1,5,[1,3,5]]; // 배열에 배열 가능 으악;;
console.log(arr5[2][1]);// 3출력


// 배열에 데이터 추가
// '주소'를 참조해서 사용하는 참조 자료형
const arr6 = [];
arr6[0] = 5;
arr6[1] = 7;
arr6.push('java');
arr6.push(10); // 배열의 마지막 요소에 데이터 추가
arr6.push('yeah~~')

// 배열 출력
console.log(arr6); // 배열 객체 출력하면 모든 정보 나옴!
console.log(arr6[1]); // 7출력


const arr7 = [5,1,[1,4,7]];
console.log(arr7[2][2]);

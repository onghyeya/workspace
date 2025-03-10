//1. 이름, 부서, 직급, 급여의 네 개의 데이터를 갖는 객체 emp를 생성해보세요. 각 데이터의 값은 임의의 값으로 설정하면 됩니다.
const emp ={ 
  name : '홍길동',
  dept : '개발부',
  rank : '팀장',
  pay : 100000
};
const emp1 ={ 
  name : '김길동',
  dept : '회계부',
  rank : '사원',
  pay : 500000
};

//2. 1번에서 만든 emp 객체 하나를 매개변수로 받아, 전달받은 객체의 부서가 '개발부'라면 해당 객체의 급여를 출력하고, '개발부'가 아니라면 '부서가 잘못되었습니다'를 출력하는 함수를 화살표함수로 구현하고 호출하세요.

const test1 = (emp) => {
  console.log(emp.dept==='개발부'?emp.pay:'부서가 잘못되었습니다'); // 삼항 연산자 방법
};
test1(emp);

//3. 1번에서 만든 emp객체 두 개를 매개변수로 받아, 매개변수로 전달된 두 객체 중 급여가 높은 객체의 이름을 리턴하는 함수를 함수표현식으로 구현하고 호출해보세요.
const returnEmp = function (emp,emp1) {
  return emp.pay>emp1.pay?emp.name:emp1.name;
};
console.log(returnEmp(emp,emp1));



//다음 객체를 사용하여 아래 문제들을 해결하세요.
const foodList = [
  {
    name : '김치찌개',
    price : 12000,
    type : '한식',
    material : ['김치','두부', '돼지고기']
  }, 
  {
    name : '짜장면',
    price : 8000,
    type : '중식',
    material : ['춘장','밀가루', '양파', '오이']
  }, 
  {
    name : '불고기',
    price : 15000,
    type : '한식',
    material : ['소고기','양파', '대파']
  }, 
  {
    name : '탕수육',
    price : 25000,
    type : '중식',
    material : ['돼지고기','밀가루']
  }
];

//java에서의 형태
// class Person{
// String name;
// int age;
//}
// person p1 = new Person('kim',20);
// person p2 = new Person('kim',20);
// List<Person> list = new ArrayList();
// list.add(p1);


//4. 매개변수로 foodList가 전달되면 모든 음식의 이름을 출력하는 함수를 화살표함수로 구현하고 호출하세요.
const data1 = (foodList) => {
  for(let i = 0; i<foodList.length; i++){
    console.log(foodList[i].name);
  }
};
data1(foodList);
//5. 매개변수로 foodList가 전달되면 한식 음식의 가격의 합을 출력하는 함수를 함수표현식으로 구현하고 호출하세요.
const data2 = function(foodList){
  let sum = 0;
  for(let food of foodList){
    if(food.type==='한식'){
      sum = sum + food.price;
    }
  }
  console.log(`한식 가격의 합은 ${sum}원 입니다.`);
  
};
data2(foodList);

//6. 매개변수로 foodList가 전달되면 음식재료가 3개 이상인 음식정보만 새로운 배열에 담아 리턴하는 함수를 구현하고 호출하세요.

const data3 = (foodList) => {
  let arr = [];
  for(let i = 0; i<foodList.length; i++){
    if(foodList[i].material.length>=3){
      arr.push(foodList[i]); // 이거 기억 잘 안난다
    }
  }
  return console.log(arr);
};
data3(foodList);

//7. 첫번째 매개변수로 foodList, 두번째 매개변수로 음식명이 전달되면 전달된 음식명의 모든 요리재료를 출력하는 함수를 화살표함수로 구현하고 호출하세요. 만약, 두번째 매개변수로 전달된 음식명이 없다면 '정보없음'을 출력하세요.

const data4 = (list,foodName) => {

  for(let i = 0; i<list.length; i++){
    if(list[i].name === foodName){
      console.log(list[i].material);
      return;
    }
  }
  console.log('정보없음');
};
data4(foodList,'라면');




// 매개변수로 5보다 큰 숫자가 들어 올때만 안녕 출력
function aaa(num) {
  if(num > 5){
    console.log('안녕');
    
  }
}

// 매개변수로 5보다 큰 숫자가 들어 올때만 안녕 출력
// return 키워드 작성후 데이터를 작성하지 않으면 return을 만나면 함수종료
// java는 메서드의 리턴값이  void 일때만  return키워드를 작성하지 않을 수 있음
function bbb(num) {
  if(num > 5){
    return; 
  }
  console.log('안녕');
  
}
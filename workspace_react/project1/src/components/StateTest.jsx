import React, { useState } from "react";


// 일반적인 변수의 값을 바꾼다고 해서 화면에 반영되지 않음.
const StateTest = () => {
  console.log(3);
  
  
  // useState는 실행 후 2 개의 데이터를 갖는 배열을 리턴 얘는 무조건 '구조분해할당'과 함께 사용!
  // 배열의 첫번째 데이터는 소괄호 안에 작성된 데이터를 리턴
  // 배열의 두번째 데이터로 전달되는 것은 '함수'
  // ex ) useState() == [변수명,함수]
  
  // 두번째로 리턴되는 '함수'는 변수의 값을 변경하는 기능을 가진 함수임 
  // java에서 아래와 같음
  // class Hobby{
  //  String hobby;
  // public void setHobby(String hobby){
  //   this.hobby = hobby;
  //   }
  // }

  // state 함수 변수만 리렌더링이 되어도 마지막값저장
  // 일반변수는 리렌더링 되면 원래 초기화 된 값으로만 나옴
  // 화면에서 바뀌는 부분 : useState / 화면에서 변경하지 않는 부분 :  일반 변수

  let [hobby,setHobby] = useState('잠자기');

  return (
    <>
      <div>{hobby}</div>
      <button type="button" onClick={() => {
        setHobby('밥먹기');
      }}>취미변경</button>
    </>
  );
};

export default StateTest;

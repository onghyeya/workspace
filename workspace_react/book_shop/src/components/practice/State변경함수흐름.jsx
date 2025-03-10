import React from "react";
import { useEffect } from "react";
import { useState } from "react";


  /*
    - 동기 방식과 비동기 방식
    - 동기 : 코드의 결과를 기다린 후 다음코드를 진행하는 것
    - 비동기 : 코드의 결과를 기다리지 않고 다음 코드를 진행
    - 비동기 방식으로 동작 되는 대표들 : state 변경 함수 , axios

    state 변경 함수는 모든 코드 해석후 마지막에 일괄 처리한다.
    때문에 state변경 함수가 여러줄 실행되도 한번만 리렌더링한다.
  */
const State변경함수흐름 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
 
  useEffect(() => {
    console.log(1);
    setNum1(num1+1);
    console.log(2);
    setNum2(num1+1);
    console.log(3);
  }, []);
  console.log('리렌더!');

  
  return (
    <div>
      <div>State변경함수흐름</div>
      <h3>{num1}</h3>
      <h3>{num2}</h3>
    </div>
  );
};

export default State변경함수흐름;

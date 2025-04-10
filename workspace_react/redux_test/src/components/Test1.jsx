import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCounter, increase } from "../redux/counterSlice";

const Test1 = () => {
  // store에 저장된 counter 가져옴
  const counter = useSelector((state) => state.counter);

  // store에 등록된 reducer(함수)를 호출해주는 객체
  const dispatch = useDispatch();
  return (
    <div>
      <div>Test1 {counter}</div>
      <button type="button" onClick={()=>{
        // dispatch(increase());
        dispatch(handleCounter(5));// 매개변수로 들어온 데이터가 action으로 들어감
      }}>dispatch야 increase함수 실행시켜줘</button>
    </div>
  );
};

export default Test1;

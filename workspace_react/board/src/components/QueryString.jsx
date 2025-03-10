import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";

const QueryString = () => {
  // Query String 으로 넘어오는 데이터 받기(react-PDF(2) 21슬라이드)
  // 배열의 첫번째 인자: 쿼리 스트링으로 넘어오는 데이터(객체 형식)
  // 배열의 두번째 인자: 전달받은 데이터를 변경하는 함수(전달 받은 데이터를 변경할 일이 거진 없음)
  // 데이터를 넘기지 않으면 null이 들어옴
  const [params,setParams] = useSearchParams();
  console.log(params);
  

  // 데이터 빼기
  const age = params.get('age'); // age 이라는 이름으로 넘어온 데이터를 받음.
  const name = params.get('name');// name 이라는 이름으로 넘어온 데이터를 받음.

  const sendData1 = ()=>{
    axios.get(`/api/replies/test?name=${name}&age=${age}`)
    .then().catch(error=>console.log(error)
    )
  }
  
  

  return (
    <>
      <div>QueryString 연습</div>
      <div>이름: {name}</div>
      <div>나이: {age}</div>
      <button type="button" onClick={e=>{sendData1()}}>데이터 전송</button>
    </>
  );
};

export default QueryString;

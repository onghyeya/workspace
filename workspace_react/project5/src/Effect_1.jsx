import React, { useEffect, useState } from "react";

const Effect_1 = () => {
  const [cnt1,setCnt1] = useState(0);
  const [cnt2,setCnt2] = useState(0);

  // useEffect의 두번째 매개변수를 의존성 배열이라 부름
  // 의존성 배열을 어떻게 작성하냐에 따라 useEffect의 리렌더링 시점의 
  // 실행 여부를 결정

  // 의존성 배열을 빈 배열로 선언하면
  // useEffect의 내용은 mount(새로고침)될때만 실행!
  useEffect(() => {
    console.log(5);
  },[]);

  // 의존성 배열에 cnt1변수를 작성하면
  // mount(기본) + cnt1이 변경되서 리렌더링 될때만 실행
  useEffect(() => {
    console.log('cnt1 값 변경');
  },[cnt1]);

  // mount(기본) + cnt2 값이 변경되어 리렌더링 될때 실행
  useEffect(() => {
    console.log('cnt2 값 변경');
  },[cnt2]);
  
  // mount + cnt1 or cnt2값 중 하나라도 값이 변경되어 리렌더링 될때 실행
  useEffect(() => {
    console.log('cnt 값 변경');
  },[cnt1,cnt2]);

  return (
    <>
      <div>Effect_1</div>

      <button type="button" onClick={(e)=>{
        setCnt1(cnt1 + 1);
      }}>누구세용?</button>

      <button type="button" onClick={(e)=>{
        setCnt2(cnt2 + 1);
      }}>제가용?</button>
    </>
  );
};

export default Effect_1;

import React, { useState } from "react";

const Input_1 = () => {
  // input 태그 안의 value 속성 값을 저장 할 state변수
  // input 태그는 value,onChange 무조건 넣어줘야함.
  const [data, setData] = useState("");
  // e : 객체, e.target :이벤트가 발생한 태그 ,e.target.value : 태그안의 적힌 데이터
  return (
    <>
      <h2>input 태그에 데이터 입력받기</h2>

      <input
        type="text"
        value={data}
        onChange={(e) => {
          console.log(e.target.value);
          setData(e.target.value); // 
        }}
      />

      <div>input 태그에 입력한 내용 : {data}</div>
    </>
  );
};

export default Input_1;

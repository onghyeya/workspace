import React, { useState } from "react";
import { use } from "react";

const Test = () => {
  const [data, setData] = useState({
    name: "김자바",
    age: 20,
    address: "울산시",
  });
  


  return (
    <>
      <div>Test</div>
      <h3> 이름 : {data.name}</h3>
      <h3>나이 : {data.age}</h3>
      <h3>주소 : {data.address}</h3>

      <button
        id="aaa"
        className="bbb"
        type="button"
        onClick={(e) => {
          // 이벤트 발생 시 실행코드로 작성하는 함수의 매개변수로는
          // 이벤트 객체를 전달 받을 수 있다.
          // 이벤트 객체는 이벤트와 관련된 모든 정보를 객체 형태로 갖고 있다.
          console.log(e);

          // e.target > 이벤트가 발생한 태그
          console.log(e.target);
          // 이벤트가 발생한 태그의 type 속성값
          console.log(e.target.type);
          console.log(e.target.id);
          console.log(e.target.className);
          setData({...data, name : '홍길동'});
        }}
      >
        이름을 홍길동으로 변경
      </button>
      <button
        type="button"
        onClick={() => {
          setData({ ...data, age: 30 });
        }}
      >
        나이를 30으로 변경
      </button>
      <button type="button"  onClick={() => {
          setData({ ...data, address: '서울시' });
        }}>주소를 서울시로 변경</button>
    </>
  );
};


export default Test;

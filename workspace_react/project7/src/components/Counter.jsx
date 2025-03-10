import React, { useState } from "react";
import Display from "./Display";
import Controller from "./Controller";

const Counter = () => {
  // ★★★ 전체를 포함하고 있는 components 부모가 자식한테만 보내줄수 있다(props) ★★★
  const [cnt, setCnt] = useState(0);

  function changeCnt(num) {
    setCnt(cnt + num);
  }

  return (
    <>
      <h2>Simple Counter</h2>
      <Display count={cnt} />
      <Controller changeCnt={changeCnt} />

      {/* 
      <Display>
        <Controller/>   >>> 감싸주면 부모태그 : Display / 자식태그 : Controller
      </Display> 
      */}
    </>
  );
};

export default Counter;

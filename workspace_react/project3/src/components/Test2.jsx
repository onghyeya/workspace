import React, { useState } from "react";
import './Test2.css';

const Test2 = () => {
  const [count,setCount] = useState(0);

  const changeCount = (index) => {
    setCount(count + index)
  };

  return (
    <>
      <div className="title">Simple counter</div>
      <div className="box1">
        <p>현재 카운트 : </p>
        <p>{count}</p>
      </div>
      <div className="box2">
        <button type="button" onClick={(e) => {
          changeCount(-1);
        }}>-1</button>
        <button type="button"onClick={(e) => {
          changeCount(-10);
        }}>-10</button>
        <button type="button" onClick={(e) => {
          changeCount(-100);
        }}>-100</button>
        <button type="button" onClick={(e) => {
          changeCount(100);
        }}>+100</button>
        <button type="button" onClick={(e) => {
          changeCount(10);
        }}>+10</button>
        <button type="button" onClick={(e) => {
          changeCount(1);
        }}>+1</button>
      </div>
    </>
  );
};

export default Test2;

import React, { useState } from "react";
import "./Test4.css";


const Test4 = () => {
  const [numArr, setNumArr] = useState([0, 0, 0]);
  
  function changeData(index) {
    const copyArr = [...numArr];
    copyArr[index] += 1;
    setNumArr(copyArr);
  }

  return (
    <>
      <div>Test4</div>
      <div className="box">
        <span
          onClick={() => {
            changeData(0);
          }}
          >
          {numArr[0]}
        </span>
        <span
          onClick={() => {
            changeData(1);
          }}
          >
          {numArr[1]}
        </span>
        <span
          onClick={() => {
            changeData(2);
          }}
        >
          {numArr[2]}
        </span>
      </div>
    </>
  );
};

export default Test4;

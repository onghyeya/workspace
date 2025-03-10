import React, { useState } from "react";
import "./Test3.css";

const Test3 = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div>Test3</div>
      <div
        className="box3"
        onMouseEnter={(e) => {
          setIsShow(true)
        }}
        onMouseLeave={(e)=>{
          setIsShow(false)
        }}
      >
        마우스를 올리면 숨겨진 글자가 보여요.
      </div>

      {
        isShow ? <div className="box3"> hello React! </div> : null
      }
    </>
  );
};

export default Test3;

import React from "react";

const Map_2 = () => {
  const arr = ['짜장면','짬뽕','탕수육'];
  return (
    <>
      <ul>
        {
          arr.map((food, i)=>{
            return (
              //key 속성에 서로 다른 데이터만 들어가면 됨.
              // 밑에 예시에서는 i 도 가능 하지만 food 도 가능함 (데이터가 다르기 때문)
              <li key={i}>{food}</li>
            )
          })
        }
      </ul>
    </>
  );
};

export default Map_2;

import React from "react";

const Header = ({hobby, age}) => {
   //console.log(props); 객체 타입
  console.log(hobby); // react만 빼고 싶을 때 객체의 key값을 뺌
  console.log(age); // 20만 빼고 싶을 때 객체의 key값을 뺌
  
  
  return (
    <>
      <div>Header</div>
    </>
  );
};

export default Header;

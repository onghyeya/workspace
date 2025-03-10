import React, { useState } from "react";

const Input_2 = () => {
  //이름을 입력하는 input 태그에 작성한 내용을 저장할 state변수
  const [info, setInfo] = useState({
    name: "",
    age: "",
    addr: "",
  });

  // 3개를 만들어서 하는 방법
  // const [name,setName] =useState('');
  // const [age,setAge] =useState('');
  // const [addr,setAddr] =useState('');
  
  // input 태그의 값이 변경될때마다 (input 태그에 입력할때마다)
  // input 태그에 작성한 데이터를 info변수에 저장한다

  function changeInfo(e) {
    // [key] 이유 : key 값이 변수로 적용되어서 사용하라고 만든 문법
    // ex ) person.name; === const test = 'name'; > person[test];  
    setInfo({
       ...info, //  name : '',age : '',addr: ''
       [e.target.name]: e.target.value 
      });
  }
  return (
    <>
      이름 :
      <input
        name="name"
        type="text"
        value={info.name}
        onChange={(e) => {
          changeInfo(e);
        }}
      />
      <br />
      나이 :
      <input
        name="age"
        type="text"
        value={info.age}
        onChange={(e) => {
          changeInfo(e);
        }}
      />
      <br />
      주소 :
      <input
        name="addr"
        type="text"
        value={info.addr}
        onChange={(e) => {
          changeInfo(e);
        }}
      />
      <br />
      <div>입력받은 이름 : {info.name}</div>
      <div>입력받은 나이 : {info.age}</div>
      <div>입력받은 주소 : {info.addr}</div>
    </>
  );
};

export default Input_2;

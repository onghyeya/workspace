import React, { useState } from "react";
import './Test1.css'

const Test1 = () => {
  const [info, setInfo] = useState({
    name: "",
    tel: "",
    mail: "",
    subject: "",
  });

  // 모든 input 태그의 값이 변경 될 때 실행할 함수
  // input 태그에 입력한 정보를 Info에 저장(변경) 하는 기능
  // name 속성 잘 넣어주기, 이벤트 객체 잘 만들어주기
  // 넌 최고의 함수야! 키키루
  const changeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  }

  const sub = ["국어", "영어", "수학"];

  return (
    <>
      <div className="info">
        <h3>회원 가입서</h3>
          이름{" "}
          <input
            name="name"
            type="text"
            value={info.name}
            onChange={(e) => {
              changeInfo(e);
            }}
          /> <br />
          연락처{" "}
          <input
            name="tel"
            type="text"
            value={info.tel}
            onChange={(e) => {
              changeInfo(e);
            }}
          /> <br />
          이메일{" "}
          <input
            name="mail"
            type="text"
            value={info.mail}
            onChange={(e) => {
              changeInfo(e);
            }}
          /> <br />
      
      
      <span>희망과목</span> 
      <select
        name="subject"
        value={info.subject}
        onChange={(e) => {
          // name에 subject라는 속성값이 들어간 태그 선택할때 info.subject라는 value의 속성값이 선택한 값으로 변경
          changeInfo(e);
        }}
      >
        {sub.map((sub, i) => {
          return (
            // sub라는 변수값을 반복 시킴 value는 다른 데이터 값을 넣어줌
            <option value={sub} key={i}>
              {sub}
            </option>
          );
        })}
      </select>
      </div>

      <div className="total">
        <h3>작성내용</h3>
        <p>이름 : {info.name} </p>
        <p>연락처 : {info.tel}</p>
        <p>이메일 : {info.mail} </p>
        <p>희망과목 : {info.subject} </p>
      </div>
    </>
  );
};

export default Test1;

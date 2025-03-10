import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios_3 = () => {
  // 컴포넌트의 특정 생애주기에 기능을 구현할때 useEffect
  // 서버에서 데이터 받을 때 오래걸리기 때문에(현상) -> 그림 다 그린후 마지막에 실행(개념: focus!)
  // 서버에서 데이터 받을 때 사용 axios

  // 서버에서 넘어오는 데이터를 저장할 변수의 초기값은
  // 최종적으로 받는 데이터릐 자료형과 일치시켜서 만들어줌( 객체는 객체로 문자열은 문자열로 등등...)

  const [person, setPerson] = useState({});

  // 서버에서 데이터를 받아 person에 저장하는 함수
  const getPersonData = () => {
    // 서버에서 데이터 받기
    // get :  데이터를 받아올 서버의 주소(url)
    axios
      .get("/api/t3")
      // then :  서버 통신 성공 실행내용 /  res :  통신 성공 모든 데이터가 있는 객체 (res.data : 실제 받은 데이터)
      .then((res) => {
        console.log("통신 성공");
        console.log(res.data);
        setPerson(res.data);
      })
      // catch :  서버 통신 실패 실행내용 / error :  통신 실패 모든 데이터가 있는 객체
      .catch((error) => {
        console.log("통신 실패");
        console.log(error);
      });
  };

  return (
    <>
      {/* 버튼을 누르면 데이터 변경만*/}
      <input
        type="button"
        value={"데이터 받기"}
        onClick={(e) => {
          getPersonData(e);
        }}
      />

      {/* 화면에 출력 */}
      <div>
        <p>이름 : {person.name}</p>
        <p>나이 : {person.age}</p>
        <p>주소 : {person.addr}</p>
      </div>
    </>
  );
};

export default Axios_3;

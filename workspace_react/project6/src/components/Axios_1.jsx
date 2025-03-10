import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Axios_1 = () => {
  // 서버에서 받은 데이터를 저장할 state 변수
  const [num, setNum] = useState(0);

  // 마운트 될때만 서버에서 데이터를 받기 위해 useEffect 사용
  useEffect(() => {
    // 서버에서 데이터 받기
    // get : 데이터를 요청할 url을 작성(인터넷 주소)
    axios
      .get("/api/t2")
      // then : 통신 성공 후 실행 내용작성
      // res : 통신 성공에 대한 모든 정보가 담긴 객체
      // 성공시 num 변수에 서버에서 받아온 데이터를 저장!!
      .then((res) => {
        setNum(res.data);
      })
      // catch : 통신 실패 시 실행 내용작성
      // error : 통신 실패에 대한 모든 정보가 담긴 객체
      .catch((error) => {});
  }, []);
  return (
    <>
      <h3>데이터 받기 1</h3>
      <p> 받은 데이터 : {num}</p>
    </>
  );
};

export default Axios_1;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios_7 = () => {
  const phone = {
    brand: "samsung",
    price: 1000000,
    color: "red",
  };
  //axios.post('/api/t7',phone).then().catch()

  const student = {
    name: "kim",
    korScore: 80,
    engScore: 70,
    mathScore: 90,
  };

  const [sum, setSum] = useState(0);

  // 아래 코드의 결과 전달 되는 데이터를 자바에서 받은 후
  // 전달된 국, 영 , 수 점수의 총점을 다시 리액트로 가져와서
  // react 화면에 총점을 보여주세요

  // post 두번째 매개변수 넣는거 까먹으면 안됨
  useEffect(() => {
    axios
      // 1번 . post 실행 으로 java 로 데이터가 넘어감
      .post("/api/t8", student)
      // 2번 . java 메소드 실행 후 return 값이 돌아옴
      // 3번 . 통신성공으로 받은 데이터를 변경함수에 넣음
      .then((res) => {
        console.log(res.data);
        setSum(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  return (
    <>
      <div>Axios_7</div>
      <div> 합 : {sum}</div>
    </>
  );
};

export default Axios_7;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Axios_4.css";

const Axios_4 = () => {
// 그림 그리기 >  데이터 받아오기 > useState 실행 > 그림 다시그리기(시험문제)

  // 서버에서 넘어오는 데이터를 저장하기 위한 state 변수 생성
  const [personList, setPersonList] = useState([]);

  // 반복해서 리렌더링을 할 필요가 없음
  useEffect(() => {
    axios
      .get("/api/t4")
      .then((res) => {
        console.log(res.data);
        setPersonList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>시험문제</h2>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
          </tr>
        </thead>
        <tbody>
          {/* 유일하게 return 문 안에서 사용할 수 있는 반복문은 'map' 뿐이다.(배열과 객체만) */}
          {/* (person , i) :  (personList안의 데이터 하나, 반복되는 횟수)  */}
          {personList.map((person, i) => {
            return (
              <tr key={i}>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.addr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Axios_4;

import React, { useState } from "react";
import "./Axios_5.css";
import axios from "axios";

const Axios_5 = () => {
  // 버튼1 클릭시 사람 목록을 표로 보여주기 (t4)
  // 버튼2 클릭시 학생 목록 표로 보여주기 (t5)
  // 이름 , 국어 , 영어, 수학, 총점

  const [personList, setPersonList] = useState([]);
  const [studentList, setStudentList] = useState([]);

  // 서버에서 사람 목록 데이터 가져오는 함수
  const getPersonList = () => {
    axios
      .get("/api/t4")
      .then((res) => {
        console.log(res.data);
        setPersonList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 학생 데이터를 받아오는 함수
  const getStudentList = () => {
    axios
      .get("/api/t5")
      .then((res) => {
        console.log(res.data);
        setStudentList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Axios_5</div>
      <table className="t1">
        <colgroup>
          <col width={"50%"} />
          <col width={"50%"} />
        </colgroup>
        <tbody>
          <tr className="t1-tr">
            <td>
              <button
                type="button"
                onClick={(e) => {
                  getPersonList(e);
                }}
              >
                버튼1
              </button>
              <table className="person">
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>주소</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 삼항 연산자 사용 */}
                  {personList.length === 0 ? (
                    <tr>
                      <td colSpan={3}>궁금하면 버튼을 클릭하세용ㅎ</td>
                    </tr>
                  ) : (
                    personList.map((person, i) => {
                      return (
                        <tr key={i}>
                          <td>{person.name}</td>
                          <td>{person.age}</td>
                          <td>{person.addr}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </td>
            <td>
              {/* 버튼2를 눌렀을때 학생의 정보 출력 */}
              <button
                type="button"
                onClick={(e) => {
                  getStudentList(e);
                }}
              >
                버튼2
              </button>
              <table className="student">
                <thead>
                  <tr>
                    <th>이름</th>
                    <th>국어점수</th>
                    <th>영어점수</th>
                    <th>수학점수</th>
                    <th>총점</th>
                  </tr>
                </thead>
                <tbody>
                  {studentList.length === 0 ? (
                    <tr>
                      <td colSpan={5}>궁금하면 버튼을 클릭하세용ㅎ</td>
                    </tr>
                  ) : (
                    studentList.map((student, i) => {
                      const sum =
                        student.korScore + student.engScore + student.mathScore;
                      return (
                        <tr key={i}>
                          <td>{student.name}</td>
                          <td>{student.korScore}</td>
                          <td>{student.engScore}</td>
                          <td>{student.mathScore}</td>
                          <td>{sum}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Axios_5;

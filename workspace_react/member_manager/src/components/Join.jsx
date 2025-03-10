import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const nav = useNavigate();
  const [member, setMember] = useState({
    memId: "",
    memName: "",
    memPw: "",
    memTel: "",
    memIntro: "",
    pwConfirm: "",
  });

  // 값 입력 시 실행 할 함수
  const addMember = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };

  const validateRegdata =()=>{
      // 데이터 유효성 검사(validation)
      let isValid = true;

      if(member.memId === ''){
        alert('* ID 필수 입력 *')
        isValid = false;
      }
      if(member.memName === ''){
        alert('* 이름 필수 입력 *')
        isValid = false;
      }
      if(member.memPw === ''){
        alert('* 비밀번호 필수 입력 *')
        isValid = false;
      }
      if(member.memPw !== member.pwConfirm){
        alert('* 비밀번호가 불일치 *')
        isValid = false;
      }
    return isValid;
  }

  // 가입 버튼 클릭 시 실행 함수
  const sendMember = () => {
    if(!validateRegdata()){
      return;
    }

    axios
      .post("/api/members", member)
      .then((res) => {
        console.log(res.data);
        if(res.data !== 1){
          alert('알수 없는 이유로 오류가 발생했습니다.')
          return; // 맞는게 없으면 if문 종료됨
        }
        alert(`${member.memId} 님 가입을 축하합니다.`)
        nav("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //console.log(member);
  
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>
              <input
                type="text"
                name="memId"
                value={member.memId}
                onChange={(e) => {
                  addMember(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>이름</td>
            <td>
              <input
                type="text"
                name="memName"
                value={member.memName}
                onChange={(e) => {
                  addMember(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="memPw"
                value={member.memPw}
                onChange={(e) => {
                  addMember(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td>
              <input
                type="password"
                name="pwConfirm"
                value={member.pwConfirm}
                onChange={(e) => {
                  addMember(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <input
                type="text"
                name="memTel"
                value={member.memTel}
                onChange={(e) => {
                  addMember(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>소개</td>
            <td>
              <textarea
                name="memIntro"
                value={member.memIntro}
                onChange={(e) => {
                  addMember(e);
                }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={(e) => {
          sendMember();
        }}
      >
        가입
      </button>
      <button type="button" onClick={(e)=>{
        nav('/')
      }}>취소</button>
    </>
  );
};

export default Join;

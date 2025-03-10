import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { memId } = useParams();
  const nav = useNavigate();
  // 수정할 회원의 모든 정보를 저장할 state변수
  const [memberInfo,setMemberInfo] = useState({});

  // input 태그의 값 변경 될 때 마다 실행하는 함수
  const changeMemberInfo = (e)=>{
    setMemberInfo({
      ...memberInfo
      ,[e.target.name] : e.target.value
    })
  }
  
  // 마운트 시 spring에서 회원 정보를 조회하여, 화면에 띄워줌
  useEffect(()=>{
    axios.get(`/api/members/${memId}`)
    .then((res)=>{
      setMemberInfo(res.data)
    })
    .catch((error)=>{console.log(error);
    })
  },[])

  

    
  const validateRegdata =()=>{
    // 데이터 유효성 검사(validation)
    let isValid = true;
    if(memberInfo.memName === ''){
      alert('* 이름 필수 입력 *')
      isValid = false;
    }
    if(memberInfo.memPw === ''){
      alert('* 비밀번호 필수 입력 *')
      isValid = false;
    }
    if(memberInfo.memPw !== memberInfo.pwConfirm){
      alert('* 비밀번호가 불일치 *')
      isValid = false;
    }
  return isValid;
  }

  const updateMember = () => {
    if(!validateRegdata()){
      return;
    }
    axios
      .put(`/api/members/${memId}`, memberInfo)
      .then((res) => {
        alert('수정이 완료 되었습니다.')
        nav(`/detail/${memId}`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(memberInfo);
  
  return (
    <>
      <h3>회원 정보 수정</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td>회원 ID</td>
            <td>
              {memberInfo.memId}
            </td>
          </tr>
          <tr>
            <td>회원 이름</td>
            <td>
              <input
                type="text"
                name="memName"
                value={memberInfo.memName}
                onChange={(e) => {
                  changeMemberInfo(e)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>회원 비밀번호</td>
            <td>
              <input
                type="text"
                name="memPw"
                value={memberInfo.memPw}
                onChange={(e) => {
                  changeMemberInfo(e)
                }}
              />
            </td>
          </tr>
          <tr> 
            <td>비밀번호 확인</td>
            <td>
              <input
                type="text"
                name="pwConfirm"
                value={memberInfo.pwConfirm}
                onChange={(e) => {
                  changeMemberInfo(e)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>회원 전화번호</td>
            <td>
              <input
                type="text"
                name="memTel"
                value={memberInfo.memTel}
                onChange={(e) => {
                  changeMemberInfo(e)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>회원 소개</td>
            <td>
              <input
                type="text"
                name="memIntro"
                value={memberInfo.memIntro}
                onChange={(e) => {
                  changeMemberInfo(e)
                }}
              />
            </td>
          </tr>
          <tr>
            <td>가입일</td>
            <td>{memberInfo.joinDate}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={(e) => {
          updateMember();
        }}
      >
        완료
      </button>
      <button type="button" onClick={(e)=>{nav(`/detail/${memberInfo.memId}`)}}>취소</button>
    </>
  );
};

export default Update;

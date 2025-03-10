import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  // props는 데이터가 잘 변경되지 않을때 사용
  // select는 데이터가 잘 변경 될때 사용
  const [detailMember, setDetailMember] = useState({});
  const nav = useNavigate();
  const { memId } = useParams();

  useEffect(() => {
    axios
      .get(`/api/members/${memId}`)
      .then((res) => {
        console.log(res.data);
        setDetailMember(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [memId]);

  const deleteMember = () => {
    //삭제전 물어보기
    // confirm : 확인 >  true
    // confirm : 취소 >  false
    if(!confirm('진짜 삭제 해요?')){
      return;
    }

    axios
      .delete(`/api/members/${memId}`)
      .then((res) => {
        alert("삭제되었습니다");
        nav("/");
      })
      .catch((error) => {});
  };

  return (
    <>
      <h3>회원 상세 정보</h3>
      <table border={1}>
        <tbody>
          <tr>
            <td>회원ID</td>
            <td>{detailMember.memId}</td>
          </tr>
          <tr>
            <td>회원이름</td>
            <td>{detailMember.memName}</td>
          </tr>
          <tr>
            <td>회원비밀번호</td>
            <td>{detailMember.memPw}</td>
          </tr>
          <tr>
            <td>회원전화번호</td>
            <td>{detailMember.memTel}</td>
          </tr>
          <tr>
            <td>회원소개</td>
            <td>{detailMember.memIntro}</td>
          </tr>
          <tr>
            <td>회원가입일</td>
            <td>{detailMember.joinDate}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        onClick={(e) => {
          nav("/");
        }}
      >
        목록
      </button>
      <button
        type="button"
        onClick={(e) => {
          nav(`/update/${detailMember.memId}`);
        }}
      >
        수정
      </button>
      <button
        type="button"
        onClick={(e) => {
          deleteMember();
        }}
      >
        삭제
      </button>
    </>
  );
};

export default Detail;

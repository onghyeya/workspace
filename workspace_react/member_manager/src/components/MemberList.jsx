import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MemberList = () => {
  // 회원 목록을 테이블 형태로 출력
  // 회원 목록 테이블에 나타나는 정보
  // 행번호, 회원 id , 회원 이름, 회원 연락처, 회원 가입일 등 이다.
  const nav = useNavigate();
  const [memberList,setMemberList] = useState([]);

  useEffect(()=>{
    axios.get('/api/members')
    .then((res)=>{
      console.log(res.data);
      setMemberList(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])


  return (
    <>
      <h3>회원 목록</h3>
      <table border={1}>
        <colgroup>
          <col width={'10%'}/>
          <col width={'10%'}/>
          <col width={'15%'}/>
          <col width={'25%'}/>
          <col width={'*'}/>
        </colgroup>
        <thead>
          <tr>
            <th>NO</th>
            <th>회원ID</th>
            <th>회원이름</th>
            <th>회원연락처</th>
            <th>회원가입일</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((member,i)=>{
            return(
              <tr key={i}>
                <td>{memberList.length-i}</td>
                <td>
                  <span className="id" onClick={(e)=>{
                    // 클릭했을때 detail 화면으로 넘어가기만 하면됨.
                    nav(`/detail/${member.memId}`)
                    }}>{member.memId}</span>
                </td>
                <td>{member.memName}</td>
                <td>{member.memTel}</td>
                <td>{member.joinDate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button type="button" onClick={(e)=>{nav('/join')}}>회원가입</button>
    </>
  );
};

export default MemberList;

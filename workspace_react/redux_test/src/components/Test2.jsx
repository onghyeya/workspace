import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMemberId } from "../redux/memberSlice";

const Test2 = () => {
  const member = useSelector(state=>state.member);
  const dispatch = useDispatch();
  return (
    <div>
      <div>Test2</div>
      <div>
        <p>회원 아이디 : {member.memId}</p>
        <p>회원 나이 : {member.memAge}</p>
      </div>
      <button type="button" onClick={()=>{
        dispatch(handleMemberId("hyeya"))
      }}>회원 아이디 변경</button>
    </div>
  );
};

export default Test2;

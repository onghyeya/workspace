import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", //실제 만드는 변수 이름
  initialState: 5, // 초기 값
  reducers: {
    // 함수명 : (매개변수) => {함수의 실행내용}
    increase : (state) => {
      return state + 1; // return 되는 데이터로 state값을 변경
    }
    ,decrease : (state)=>{
      return state - 1;
    },
    // 매개변수로 들어온 데이터 만큼 counter값을 증가 (state,통상적으로 action을 씀)
    handleCounter : (state,action) =>{
      return state+action.payload
    }
  } // 상태를 변경하는 함수
});

// {외부로 빼고 싶은 함수명} = 만든 Slice 데이터.actions;
export const {increase,decrease,handleCounter} = counterSlice.actions;
export default counterSlice;

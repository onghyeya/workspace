import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "member",
  initialState: {
    memId: "hong",
    memAge: 20,
  },
  reducers: {
    handleMemberId : (state,action) => 
      // 일반 변수 바꾸듯 바꿀수 있다!! 좋노
      {state.memId = action.payload}
  }
});

export const {handleMemberId} = memberSlice.actions;

export default memberSlice;

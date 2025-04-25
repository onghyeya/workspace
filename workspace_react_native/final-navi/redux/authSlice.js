import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name : 'auth',
  initialState : {token : null, isLogin : false},
  reducers :{
    loginReducer : (state, action) => {
      state.token = action.payload; // 매개 변수에 실제 토큰 데이터를 넣어주는 코드
      state.isLogin = true; // 토큰 데이터가 들어가면 true
    },
    logoutReducer : (state) => {
      state.token = null; // 토큰 데이터가 없을 때
      state.isLogin = false; // 토큰 데이터가 없으면 false
    }
  }
});

export const {loginReducer, logoutReducer} = authSlice.actions;
export default authSlice;


import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const getToken = ()=>{
  const token =  localStorage.getItem('accessToken')

  //token에 값이 없으면 null을 리턴하여 함수 종료
  if(token == null) return null;

  // 토큰의 payload 부분을 해석해서 객체로 리턴
  const decodedtoken = jwtDecode(token)

  // 현재 날짜및 시간을 가져오는 방법(이방법으로 가져오면 초 밀리세컨드단위로 가져옴)
  const currentTime = Date.now()/1000;

  // 토큰의 만료시간이 지났으면 null을 리턴
  if(decodedtoken.exp<currentTime){
    return null
  }

  return token
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {token : getToken()},
  // 초기값은 지금 로그인 하기 전이기 때문에 null값을 가지고 있음
  reducers:{
    // 로그인 함수
    loginReducer :(state,action)=>{
      state.token = action.payload // 가지고 있는 token데이터에 바뀐 값 넣어줄게
      localStorage.setItem('accessToken',action.payload) //localStorage accessToken에 token값을 넣어줄게
    },
    // 로그아웃 함수
    logoutReducer :(state)=>{
      state.token = null // token의 값을 null로 변경
      localStorage.removeItem('accessToken'); // localStorage의 값을 없애줌
    }
  }
});

export const {loginReducer,logoutReducer} = authSlice.actions
export default authSlice
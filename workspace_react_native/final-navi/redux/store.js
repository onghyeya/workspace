import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

// 여기는 공용 저장소!
export const store = configureStore({
  reducer:{
    auth :  authSlice.reducer
  }
});
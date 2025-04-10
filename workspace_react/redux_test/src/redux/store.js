import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import nameSlice from "./nameSlice";
import memberSlice from "./memberSlice";
import cartSlice from "./cartSlice";

//slice 들을 관리 할 공용 저장소
export const store = configureStore({
  reducer:{
    counter: counterSlice.reducer//공용 저장소에서 쓸 데이터 이름
    ,myName : nameSlice.reducer 
    ,member: memberSlice.reducer
    ,cart: cartSlice.reducer
    
  }
})

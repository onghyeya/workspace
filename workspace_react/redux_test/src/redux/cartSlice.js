import { createSlice } from "@reduxjs/toolkit";
import { cartList } from "./data";

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartList,
  reducers:{
    addCart:(state,action)=>{
      //return [...state,action.payload] 와 같음
      state.push(action.payload)
    }
  }
})

export const {addCart} = cartSlice.actions;

export default cartSlice
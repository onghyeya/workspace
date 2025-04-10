import { createSlice } from "@reduxjs/toolkit";

// const [name,setName] = useState('hong');
// 이름 데이터를 저장할 slice
const nameSlice = createSlice({
  name : 'name',
  initialState : {data:'hong'},
  reducers: {
    changeName : (state,action)=> 
      state.data = state.data + action.payload
  }
});

export default nameSlice
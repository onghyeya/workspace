import axios from "axios";
import React from "react";

const Axios_6 = () => {
  // axios post() 함수의 두번째 매개변수로
  // 자바로 전달할 데이터를 작성 할 수 있다.
  // 자바로 전달할 데이터는 객체 형식으로 지정해야 함.(보통 바로 지정하지 않고 객체를 하나 만들어서 지정함)
  axios.post('/api/t6',{name: 'hong',age : 20}).then().catch();

  return (
    <>
      <div>Axios 사용하여 서버에 데이터 전달하기</div>

    </>
  );
};

export default Axios_6;

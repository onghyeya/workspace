import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios_2 = () => {
  // 서버에서 받은 데이터 저장할 state변수
  const [info,setInfo] = useState({});

  // useEffect 리렌더링 시킬 필요가 없을때엔 의존성 배열을 빈배열로 넣는다.
  useEffect(()=>{
      axios.get("/api/t3")
      .then((res)=>{
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((error)=>{
        console.log('통신 중 오류 발생');
        console.log(error);
      })
    },[]);


  return (
    <>
      <div>Axios_2</div>
      <hr />
      <div>이름 : {info.name}</div>
      <div>나이 : {info.age}</div>
      <div>주소 : {info.addr}</div>
    </>
  )
}

export default Axios_2
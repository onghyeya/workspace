import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BoardDetail = () => {
  // spring로 보내기 위해서는 axios.get('/api/detail/{itemCode}')

  // 해당 컴포넌트가 실행 될때 , itemCode라는 이름으로 데이터가 전달
  // URL Parameter로 전달되는 데이터를 받을 때는 useParams() 훅을 사용하여 받는다.
  // useParams() 훅은 URL Parameter로 전달되는 데이터를 객체 형식으로 리턴
  const params = useParams();
  const {itemCode} = useParams();// 구조 분해 할당을 쓰면 바로 사용가능!
  console.log(params);

  useEffect(()=>{
    axios.get(`/api/items/${itemCode}`)
  },[])
  
  return (
   <>
      <div>게시글 상세 페이지</div>
      <div>전달 받은 itemCode : {params.itemCode}</div>
   </>
  )
}

export default BoardDetail
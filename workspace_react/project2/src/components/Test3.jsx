import './Test3.css'
import React, { useState } from 'react'


const Test3 = () => {
  const [isShow,setIsShow] = useState(true);
  const [adName,setAdName] = useState('광고닫기')
  return (
    <>
      <div>Test3</div>
      {/* 클릭하면 광고가 꺼짐 */}
      <button className = 'bnt' type='button' onClick={() => {
        setIsShow(!isShow);
        setAdName(adName === '광고닫기'?'광고보기':'광고닫기');
      }}>{adName}</button>

      {isShow ?<div className='ad'>오늘 구매하시면 30% SALE!!!</div>:null}
    </>
  )
}

export default Test3
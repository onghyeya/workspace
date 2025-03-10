import React, { useState } from 'react'

const Input_3 = () => {
  // 초기값은 option들 중에 처음에 보여주고 싶은 데이터를
  // option태그의 value 속성값으로 지정
  const [fruit,setFruit] = useState('banana');

  // value : 구분 할수 있는 데이터, 고유한 코드
  // ex ) 홍혜원(눈에 보이는 데이터) > 주민등록번호(value)
  // value 지정을 하지 않아도 보이는 데이터 값과 value 값이 같게 나온다. 
  // but, 실무에서는 꼭 사용해야 하기 때문에 꼭 value를 사용!!!
  return (
    <>
      <select 
      value={fruit} 
      onChange={(e)=>{
        // 내가 선택한 value값이 들어가야 바뀐다.
        setFruit(e.target.value);
      }}>
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="orange">오렌지</option>
      </select>
    </>
  )
}

export default Input_3
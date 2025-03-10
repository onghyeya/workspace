import { useState } from "react";
import './Test1.css'

function Test1() {
  let [count,setCount] = useState(0);
  return (
    <>
      <div className='count'>{count}</div>
      <button type='button' onClick={() => {
        setCount(count+1)
      }
      }>클릭</button>
    </>
  )
}

export default Test1;
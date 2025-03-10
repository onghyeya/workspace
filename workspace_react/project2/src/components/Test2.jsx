import { useState } from "react";
import './Test2.css'


const Test2 = () => {
  let [click,setClick] = useState('ON');
  let [click1,setClick1] = useState('OFF');
  
  return (
    <>
      <div className="box">{click}</div>
      <button type="button" onClick={() => {
        setClick(click === 'ON'? 'OFF':'ON')
        setClick1(click1 === 'OFF'?'ON':'OFF')
      }}>{click1}</button>
    </>
  )
};
export default Test2
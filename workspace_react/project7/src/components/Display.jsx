// 현재 카운트
import React, { useState } from 'react'

const Display = ({count}) => {
 
  return (
    <>
      <p>현재 카운트</p>
      <p>{count}</p>
    </>
  )
}

export default Display
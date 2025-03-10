import React, { useState } from 'react'
import List from './List'
import Detail from './Detail'
import './Board.css'

const Board = () => {
  // 게시글 하나의 정보를 담을 state변수
  const [board,setBoard] = useState({});
  // 상세 정보가 보일지 안보일지 결정하는 state 변수
  const [isShow,setIsShow] = useState(false);

  return (
    <>
      <div className='container'>
        <div>
          <h2>게시글 목록</h2>
        </div>
        <div>
          <List setBoard={setBoard} setIsShow={setIsShow}/>
        </div>
        <div>
          <Detail board={board} isShow={isShow}/>
        </div>
      </div>
    </>
  )
}

export default Board
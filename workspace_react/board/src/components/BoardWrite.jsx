import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./BoardWrite.module.css"

const BoardWrite = () => {
  const nav = useNavigate();
  const [boardWrite,setBoardWrite] = useState({
     title:""
    , writer:""
    , content:""
  });

  const changeBoard = (e)=>{
    setBoardWrite({
      ...boardWrite
      , [e.target.name] : e.target.value
    })
  }

  const dataValidation = ()=>{
    let isValidation = true; 
    if(boardWrite.title===''){
      alert('제목 필수 입력')
      isValidation = false;
    }
    if(boardWrite.writer===''){
      alert('작성자 필수 입력')
      isValidation = false;
    }
    return isValidation;
  }

  const sendData = ()=>{
    if(!dataValidation()){
      return;
    }
    axios.post('/api/boards',boardWrite)
      .then((res)=>{alert('게시글 등록이 완료되었습니다.'); nav('/')})
      .catch((error)=>{})
  }

  return (
    <div >
    <table className={styles.writer_table}>
      <tbody>
        <tr>
          <td>제목</td>
          <td> <input type="text" placeholder='제목 입력' name='title' value={boardWrite.title} onChange={(e)=>{changeBoard(e)}} /></td>
        </tr>
        <tr>
          <td>작성자</td>
          <td> <input type="text" 
          placeholder='작성자 입력'
          name='writer' value={boardWrite.writer} onChange={(e)=>{changeBoard(e)}} /></td>
        </tr>
        <tr>
          <td>내용</td>
          <td> <input type="text" 
          placeholder='내용 입력' name='content' value={boardWrite.content} onChange={(e)=>{changeBoard(e)}} /></td>
        </tr>
      </tbody>
    </table>
    <div className='write-button'>
      <button type='button' onClick={(e)=>{sendData()}}>글등록</button>
      <button type='button' onClick={(e)=>{nav('/')}}>돌아가기</button>
    </div>
    </div>
  )
}

export default BoardWrite
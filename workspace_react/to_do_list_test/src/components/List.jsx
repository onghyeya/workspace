import React, { useEffect, useState } from 'react'
import edit from './edit.png'
import del from './delete.png'
import * as list from '../data/todoList'
import Update from './Update'
import styles from './List.module.css'


const List = () => {
  // 리스트 데이터를 가져옴
  const [toDoList,setToDoList]=useState(list.data)
  // input에 데이터 작성데이터가 list에 들어가야함
  const [joinItem,setJoinItem]=useState('');



  // 새로운 listItem 추가하는 함수
  const insertToDoList = ()=>{
    const endId = Math.max(...toDoList.map((item,i)=>{return item.id}))
    const newItem = {
      id:endId+1,
      text:joinItem
    }
    if(joinItem != ''){
      setToDoList([...toDoList,newItem])
    }
  }

  return (
    <div className={styles.container}>
      <h1>To Do List</h1>
      
      <div className={styles.input_div}>
        <input 
          type="text"
          value={joinItem}
          onChange={(e)=>{
            setJoinItem(e.target.value);
          }}
        />
        <button 
          type='button'
          onClick={(e)=>{
            insertToDoList();
            setJoinItem('')

          }}
        >등록</button>
      </div>

      <div className={styles.list_div}>

        {toDoList.map((item,i)=>{
          return (
            <Update 
              key={i} 
              item={item} 
              toDoList={toDoList} 
              setToDoList={setToDoList}
              joinItem={joinItem}
              setJoinItem={setJoinItem}
            />
          )
        })}

      </div>
  
    </div>
  )
}

export default List
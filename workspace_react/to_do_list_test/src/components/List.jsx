import React, { useEffect, useState } from 'react'
import edit from './edit.png'
import del from './delete.png'
import * as list from '../data/todoList'
import Update from './Update'


const List = () => {
  // 리스트 데이터를 가져옴
  const [toDoList,setToDoList]=useState(list.data)
  // input에 데이터 작성데이터가 list에 들어가야함
  const [joinItem,setJoinItem]=useState('');


  useEffect(()=>{
    setJoinItem('')
  },[toDoList])

  return (
    <div>
      <h2>To Do List</h2>
      
      <div>
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
            const endId = Math.max(...toDoList.map((item,i)=>{return item.id}))
            const newItem = {
              id:endId+1,
              text:joinItem
            }
            if(joinItem != ''){
              setToDoList([...toDoList,newItem])
            }
           
           
          }}
        >등록</button>
      </div>

      <div>

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
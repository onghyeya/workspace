import React, { useState } from "react";
import edit from "./edit.png";
import del from "./delete.png";

const Update = ({ item,toDoList,setToDoList,joinItem,setJoinItem }) => {
  const [isEdit,setIsEdit]=useState(false);


  const handleToDoList = (e) => {
    const copyToDoList = [...toDoList];
    const findList = toDoList.find((listItem)=>{
      return item.id === listItem.id
    })
    findList.listItem = joinItem;
    setToDoList(copyToDoList)
  };

  return (
    <>
      {
        isEdit
        ?
        <div>
          <input 
            type="text" 
            value={joinItem.text} 
            onChange={(e)=>{
            }}
          />
          <button 
            type='button'
          >확인</button>
          <button 
            type='button'
          >취소</button>
        </div>
        :
        <div>
          <p>{item.text}</p>
          <img 
            src={edit} 
            onClick={(e) => {setIsEdit(true)}} 
          />
          <img 
            src={del} 
          />
        </div>
      }
    </>
   
  );
};

export default Update;

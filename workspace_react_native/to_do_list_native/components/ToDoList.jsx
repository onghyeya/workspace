import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../data/todoList'
import ToDoListItem from './ToDoListItem'

const ToDoList = () => {
  // toDoList.js에서 가지고 온 데이터를 변수저장
  const [toDoList,setToDoList]=useState(data);
  // input에 작성된 글을 저장하는 변수
  const [joinText,setJoinText]=useState("");

  // 등록기능(id+1이 조건임)
  const newList=()=>{
    // toDoList객체 안 id중 제일 큰 수를 찾고 return 
    const newId= Math.max(...toDoList.map((item)=>{return item.id}))
    // input에 작성한 데이터와 newId+1한 값을  새로운 listitem에 넣음
    const newItem = {id:newId+1,text:joinText};
    // 위에 추가한 item을 toDoList에 반영
    setToDoList([...toDoList,newItem]);
  }

  return (
    <View>
      <Text>ToDoList</Text>
      <TextInput 
        value={joinText}
        // input에 작성한 글 뭐야
        onChangeText={(text)=>{setJoinText(text)}}
        // enter /전송버튼 눌렀을때 뭐할거야
        onSubmitEditing={(e)=>{
          newList(e)
          setJoinText('')
        }}
        style={styles.input}
        placeholder='+ Add a Task'
      />
       {/* list로 보여줘야 하니까 map 돌려야 됨 */}

      <View>
        {toDoList.map((item,i)=>{
          return(
            <ToDoListItem key={i} item={item} toDoList={toDoList} setToDoList={setToDoList}/>
          )
        })}
      </View>
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
  input:{
    borderWidth:1
  }
})
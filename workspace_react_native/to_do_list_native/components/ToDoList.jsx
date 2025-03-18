import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { data } from '../data/todoList'
import ToDoListItem from './ToDoListItem'

const ToDoList = () => {
  // toDoList.js에서 가지고 온 데이터를 변수저장
  const [toDoList,setToDoList]=useState(data);
  // input에 작성된 글을 저장하는 변수

  // 등록기능(id+1이 조건임)
  // 새로운 내용을 담아줄 변수도 필요함

  return (
    <View>
      <Text>ToDoList</Text>
      <TextInput 
        value=''
        // input에 작성한 글 뭐야
        onChangeText={(text)=>{}}
        // enter /전송버튼 눌렀을때 뭐할거야
        onSubmitEditing={()=>{}}
      />
       {/* list로 보여줘야 하니까 map 돌려야 됨 */}
      <View>
        {toDoList.map((item,i)=>{
          <ToDoListItem key={i} item={item}/>
        })}
      </View>
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({})
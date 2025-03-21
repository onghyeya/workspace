import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { data } from "../data/todoList";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  // toDoList.js에서 가지고 온 데이터를 변수저장
  const [toDoList, setToDoList] = useState(data);
  // input에 작성된 글을 저장하는 변수
  const [joinText, setJoinText] = useState("");

  // 등록기능(id+1이 조건임)
  const newList = () => {
    // toDoList객체 안 id중 제일 큰 수를 찾고 return
    const newId = Math.max(
      ...toDoList.map((item) => {
        return item.id;
      })
    );
    // input에 작성한 데이터와 newId+1한 값을  새로운 listitem에 넣음
    const newItem = { id: newId + 1, text: joinText };
    // 위에 추가한 item을 toDoList에 반영
    setToDoList([...toDoList, newItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList</Text>
      <View style={styles.input_view}>
        <TextInput
          value={joinText}
          // input에 작성한 글 뭐야
          onChangeText={(text) => {
            setJoinText(text);
          }}
          // enter /전송버튼 눌렀을때 뭐할거야
          onSubmitEditing={(e) => {
            if(joinText.trimStart() !== ''){
              alert('Add : ' + joinText)
              newList(e);
              setJoinText("");
            }
            else{
              setJoinText("");
            }
          }}
          style={styles.input}
          placeholder="+ Add a Task"
        />
      </View>
      {/* list로 보여줘야 하니까 map 돌려야 됨 */}

      <View style={styles.list_view}>
        {toDoList.map((item, i) => {
          return (
            <ToDoListItem
              key={i}
              item={item}
              toDoList={toDoList}
              setToDoList={setToDoList}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius:5,
    padding:15
  },
  container: {
    marginHorizontal: 40,
    marginTop:20,
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    // textAlign:'center'
  },
  input_view:{
    marginVertical:10
  },
  list_view:{
    gap:10,
    backgroundColor:'#336D82',
    padding:10,
    borderRadius:5
  }
});

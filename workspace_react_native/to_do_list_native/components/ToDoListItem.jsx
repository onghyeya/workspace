import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { icon } from "../constants/icons";
import { TextInput } from "react-native";

const ToDoListItem = ({ item, toDoList, setToDoList }) => {
  // 수정여부를 파악할 변수
  const [isEdit, setIsEdit] = useState(false);
  // 수정input에 변경값을 담을 변수
  const [updateText, setUpdateText] = useState("");
  // 수정 기능(find)
  const updateList = () => {
    const copyList = [...toDoList];
    const findList = toDoList.find((list) => {
      return list.id === item.id;
    });
    findList.text = updateText;
    setToDoList(copyList);
  };

  useEffect(() => {
    setUpdateText(item.text);
  }, [item]);

  // 삭제 기능(filter)
  const deleteList = ()=>{
      setToDoList(
        toDoList.filter((list)=>{
          return list.id !== item.id
        })
      )
  }

  return (
    <>
      {isEdit ? (
        //수정할때 뜨는 input 태그
       <View style={styles.input_View}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            // 포커스아웃 이벤트
            onBlur={() => {
              setIsEdit(false);
            }}
            value={updateText}
            onChangeText={(text) => {
              setUpdateText(text);
            }}
            onSubmitEditing={(e) => {
              if(updateText !== '')
              updateList(e);
            }}
          />
       </View>
      ) : (
        //수정전 보이는 란
        <View style={styles.list_view}>
          <Text style={styles.list_text}>{item.text}</Text>
          <View style={styles.icon_view}>
            <Pressable
              onPress={(e) => {
                setIsEdit(true);
              }}
            >
              <Image source={icon.ICON_EDIT}  style={styles.icons}/>
            </Pressable>
            <Pressable onPress={(e) => {deleteList(e)}}>
              <Image source={icon.ICON_DELETE} style={styles.icons}/>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:4,
    padding:10,
    backgroundColor:'white'
  },
  list_view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'lightblue',
    borderRadius:4,
    padding:10
  },
  icon_view:{
    flexDirection:'row'
  },
  input_View:{
    padding:10,
    backgroundColor:'lightblue',
    borderRadius:4
  },
  list_text:{
    fontSize: 18,
    fontWeight:'bold',
    color:'#3E3F5B'
  },
  icons:{
    width:30,
    height:30
  }
});

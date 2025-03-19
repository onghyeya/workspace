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
      ) : (
        //수정전 보이는 란
        <View>
          <Text>{item.text}</Text>
          <View>
            <Pressable
              onPress={(e) => {
                setIsEdit(true);
              }}
            >
              <Image source={icon.ICON_EDIT} />
            </Pressable>
            <Pressable onPress={(e) => {deleteList(e)}}>
              <Image source={icon.ICON_DELETE} />
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({});

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icon } from "../constants/icons";

const ToDoListItem = ({ item }) => {
  // 수정여부를 파악할 변수
  // 수정input에 변경값을 담을 변수
  // 수정 기능(find)
  // 삭제 기능(filter)

  return (
    <>
    {/* 수정전 보이는 란 */}
      <View>
        <Text>{item.text}</Text>
        <View>
          <Pressable onPress={() => {}}>
            <Image source={icon.ICON_EDIT} />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Image source={icon.ICON_DELETE} />
          </Pressable>
        </View>
      </View>
      <View>
        <Text>{item.text}</Text>
        <View></View>
      </View>
      
      {/* 수정할때 뜨는 input 태그 */}
      <TextInput
        style={styles.input}
        autoFocus={true}
        // 포커스아웃 이벤트
        onBlur={() => {}}
        onChangeText={(text) => {}}
        value={newText}
        onSubmitEditing={(e) => {}}
      />
    </>
  );
};

export default ToDoListItem;

const styles = StyleSheet.create({});

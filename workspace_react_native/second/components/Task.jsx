import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { icon } from "../constants/icons";

const Task = ({ cartItem, cartList, setCartList }) => {
  // 각 상품이 수정 상태인지, 수정 상태가 아닌지 판단하는 변수
  const [isEditing, setIsEditing] = useState(false);

  // 수정을 위해서는 input태그에 입력한 글자, id도 필요
  // 전체 데이터도 필요

  // input태그에 입력한 데이터
  // 주의! props로 전달된 데이터를 state변수의 초기값으로 주면 안됨.
  // 왜? 부모태그에서 재랜더링 되면서 Task도 재랜더링은 되지만 저장된
  //     값이 set이 실행되지 않기 때문에 적용되지 않는다.
  const [newText, setNewText] = useState("");

  // 장바구니 목록 데이터 수정(전체 데이터 가져옴)
  const handleCartList = (e) => {
    // 상품 목록에서 현재 수정중인 상품의 id를 찾아서
    // 찾은 상품의 item속성 값을 input태그에 입력한 글자로 바꿔준다

    // 2번 풀이 ---//
    const copyCartList = [...cartList];
    const findCart = cartList.find((cart) => {
      return cart.id === cartItem.id;
    });
    findCart.item = newText;
    setCartList(copyCartList);
    // 2번 풀이 끝---//
  };

  // 마운트,cartItem 값이 변경될때마다 리렌더링
  useEffect(() => {
    setNewText(cartItem.item);
  }, [cartItem]);

  

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            autoFocus={true}
            // 포커스아웃 이벤트
            onBlur={() => {
              setIsEditing(false);
              setNewText(cartItem.item);
            }}
            onChangeText={(text) => {
              setNewText(text);
            }}
            value={newText}
            onSubmitEditing={(e) => {
              handleCartList();
            }}
          />
        </>
      ) : (
        <>
          <Text style={styles.title}> {cartItem.item} </Text>
          <Pressable
            onPress={() => {
              setIsEditing(true);
            }}
          >
            <Image source={icon.ICON_EDIT} style={styles.img} />
          </Pressable>
          <Image source={icon.ICON_DELETE} />
        </>
      )}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 5,
    backgroundColor: "lightgray",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 5,
  },
  title: {
    flex: 1,
    // borderWidth:1
    fontSize: 17,
  },
  img: {
    width: 20,
    height: 20,
  },
  input: {
    borderWidth: 1,
    width: "100%",
  },
});

// 수정부분 다른 풀이
// setCartList(cartList.map((element)=>{
//   if(element.id === cartItem.id){
//     return {...cartItem,item:e.nativeEvent.text};
//   }
//   else {
//     return element
//   }
// }))

// // 1번 풀이 ---//
// const copyCartList = [...cartList];
// for(const cart of copyCartList){
//   if(cart.id === cartItem.id){
//     cartItem.item = newText;
//   }
// }
// setCartList(copyCartList);
// // 1번 풀이 끝---//

import { Image, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { icon } from '../constants/icons'
import { cartListData } from '../data/data'
import Task from './Task'


const CartList = () => {
  const [cartList, setCartList] = useState(cartListData); //data.js에서 받아온 cartListData
  const [newItem, setNewItem] = useState('');

  // find : 수정 / filter : 삭제 기능

  return (
    <View>
      <Text>CartList</Text>
      {/* <Image source={icon_edit}/>
      <Image source={icon_delete}/>
      <Image source={icon.ICON_EDIT}/> */}

      {/* input에 작성한 데이터 등록하기 */}
      <View>
        <TextInput 
          style={styles.input} 
          value={newItem} 
          onChangeText={text=>{setNewItem(text)}}
          // 키보드의 완료, enter 키를 눌렀을 때 실행하는 이벤트
          onSubmitEditing={e=>{
            // 기본적으로 사용하던 for-each
            // let max = cartList[0].id
            // for (const e of cartList){
            //   if(max<e.id){
            //     max += e.id
            //   }
            // }

            const endId = Math.max(...cartList.map((e,i)=>{return e.id}));
            // 저장할 객체 생성
            const newData = {
              id:endId + 1 ,
              item:newItem
            };
            // cartList에 저장
            setCartList([...cartList,newData]);
            setNewItem('')
          }}
        />
      </View>

      {/* 반복 되는건 컴포넌트로 제작 해보기 */}
      {cartList.map((cartItem,i)=>{
        return(
          <Task cartItem={cartItem} key={i} cartList={cartList} setCartList={setCartList}/>
        )
      })}
      
    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    margin:12,
    borderRadius:5,
    padding:10
  },

})
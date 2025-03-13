import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import * as colors from '../constants/colors'

const MyButton = ({size='normal',onPress,title='button',...props}) => {
  return (
    <Pressable 
      onPress={onPress}
      // style={[styles.btnContainer,styles[size]]} 기본적인 방법
      style={(e)=>{
        console.log(e);
        return [
          styles.btnContainer,
          styles[size],
          e.pressed && styles.pressed // 눌렀을 때 스타일 적용
        ]
      }}
      {...props}
    >
      <Text
        style={styles.btn}
        
      >{title}</Text>
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
  btnContainer:{
    borderRadius:5,
    backgroundColor:colors.COLOR.BTN_BACKGROUND_COLOR,
    justifyContent:'center',
    alignItems:'center',
    margin:'auto',
    paddingVertical:10, // 상하
    paddingHorizontal:10 // 좌우
  },
  btn:{
    color:'white',
    fontWeight:'bold'
  },
  normal:{
    width:'30%'
  },
  large:{
    width:'100%'
  },
  pressed:{
    opacity:0.8
  }
})
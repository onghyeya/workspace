import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const MyTextInput = ({placeholder='',...props}) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      // secureTextEntry // type = 'password' 와 같은 말
      returnKeyType='next' // 자판 UI의 완료를 > 다음으로 변경
      autoCapitalize='none' // 자동 대문자 변환 비활성화
      spellCheck={false} // 맞춤법 검사 비활성화 
      autoCorrect={false} // 맞춤법 자동 수정 비활성화
      {...props}
    />
  )
}

export default MyTextInput

const styles = StyleSheet.create({
  input:{
    borderWidth:1
  }
})
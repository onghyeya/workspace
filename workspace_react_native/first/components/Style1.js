import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// safeAreaView : ios의 노치영역을 제외한 부분에 생성
// textinput :  input태그와 같음
const Style1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <Text>text1</Text>
      </View>
      <View style={styles.v2}>
        <Text>text2</Text>
      </View>
      <View style={styles.v3}>
        <Text>text3</Text>
      </View>
    </SafeAreaView>
  )
}

export default Style1
/*
  react native의 컴포넌트들은 모두 flex 가 기본값
  flexDirection 기본갑이 'column' 이기 때문에 세로로 배치됨
*/
const styles = StyleSheet.create({
  container:{
    // flexDirection:'row',
    // justifyContent:'center',
  },
  v1:{
    backgroundColor : '#dddddd',
    flex:1,
    alignItems:'center', // 글자 가운데
  },
  v2:{
    backgroundColor:'darkgray',
    flex:1,
    alignItems:'center', // 글자 가운데
  },
  v3:{
    backgroundColor:'darkcyan',
    flex:1,
    alignItems:'center', // 글자 가운데
  }
})
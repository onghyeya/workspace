import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { colors } from '../../constants/colorConstant'

const CustomButton = ({label='버튼',size='large',...props}) => {
  return (
    <Pressable style={({pressed})=>[
      styles.container
      , styles[size]
      , pressed && styles.pressed
      ]}
      {...props}
      >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container:{
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.GRAY_200
  },
  large:{
    width:'100%',
    height:44
  },
  normal:{
    width:'50%',
    height:33,
    margin:'auto'
  },
  pressed:{
    opacity:0.8
  },
  buttonText:{
    color:colors.GRAY_600
  }
})
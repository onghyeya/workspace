import { Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import ToDoList from '../components/ToDoList'

const MainScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{flex:1}} >
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'darkgray'}
        />
        <ToDoList/>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default MainScreen

const styles = StyleSheet.create({})
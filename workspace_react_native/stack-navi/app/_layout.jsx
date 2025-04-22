import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => { // 얘는 구조만 잡으면 끝남 나머지 페이지들의 nav를 정해줌
  return (
    <Stack 
      screenOptions={{headerStyle:{backgroundColor:"#339f8b"}}}
    />// 같은 폴더 내의 파일들의 레이아웃구조를 stack으로 정의
  )
}

export default Layout

const styles = StyleSheet.create({})
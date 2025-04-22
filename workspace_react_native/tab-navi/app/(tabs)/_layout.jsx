import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

//Tabs폴더
const TabLayout = () => {
 
  return (
    <Tabs screenOptions={{headerShown:false}}>
      {/* 하나하나 스크린이 하나하나 tab을 의미 */}
      <Tabs.Screen
        name='index' // 탭 터치시 보여줄 파일명
        options={{
          title:'Home',
          tabBarActiveTintColor:"#339f8b",
          tabBarIcon: ()=> <Feather name="home" size={24} color="black" />
        }}

      /> 
      <Tabs.Screen
        name='myPage'
        options={{
          title:'MyPage',
          tabBarActiveTintColor:"#339f8b",
          tabBarIcon: ()=> <Feather name="user" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title:'Setting',
          tabBarActiveTintColor:"#339f8b",
          tabBarIcon: ()=> <Feather name="settings" size={24} color="black" />
        }}
      />
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import MyTextInput from "./MyTextInput";
import MyButton from "./MyButton";

const Login = () => {
  const hello = () => {
    console.log("hello");
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [data,setData]=useState({
    id:''
    ,pw:''    
  })

  const changeData = (text,name)=>{
    setData({
      ...data,
      [name]: text
    })
  }

  return (
    <View>
      <Text>Login</Text>

      {/*  useState 객체로 활용 */}
      <MyTextInput
        onChangeText={(text)=>{
          changeData(text,'id')
        }}
        value={data.id}
      />
      <MyTextInput
        onChangeText={(text)=>{
          changeData(text,'pw')
        }}
        value={data.pw}
      />


      {/* useState 각각 활용 */}
      <MyTextInput
        placeholder={"ID"}
        onChangeText={(text) => {
         setId(text);
        }}
      />
      <MyTextInput
        placeholder={"PASSWORD"}
        onChangeText={(text) => {
          setPw(text);
         }}
      />

      {/* alert 으로 안녕하세요 */}
      <MyButton
        onPress={() => {
          alert("안녕하세요");
        }}
      />

      {/* console.log로 안녕하세요 */}
      <MyButton size="large" onPress={hello} />

      {/* 기본적인 함수 사용 방법 */}
      <MyButton
        title="데이터 확인"
        onPress={() => {
          hello();
          alert(`id=${data.id}, pw=${data.pw}`)
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

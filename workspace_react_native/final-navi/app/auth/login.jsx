import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { API_LOGIN } from "../../apis/memberApi";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    memEmail: "",
    memPw: "",
  });

  const handleLoginData = (text, name) => {
    setLoginData({
      ...loginData,
      [name]: text,
    });
  };

  const sendLogin = ()=>{
    API_LOGIN(loginData)
      .then(res=>{
        alert('로그인 성공')
        const token = res.headers.authorization;
        console.log(token);
        token && router.push('/')
      })
      .catch(err=>console.log(err)
      )
  }
  return (
    <View style={styles.container}>
      <CustomInput
        label={"ID"}
        value={loginData.memEmail}
        onChangeText={(text) => handleLoginData(text, "memEmail")}
      />
      <CustomInput
        label={"PASSWORD"}
        value={loginData.memPw}
        onChangeText={(text) => handleLoginData(text, "memPw")}
      />
      <CustomButton label="로그인" onPress={sendLogin}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

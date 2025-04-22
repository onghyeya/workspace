import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View>
      <Text>첫 페이지 입니당.</Text>
      <Pressable onPress={()=>{router.push('/detail')}}>
        <Text>디테일로 이동</Text>
      </Pressable>

      <Pressable onPress={()=>{
        router.push({
          pathname:"/detail",
          params: {id:"react",age:20}
        })
        }}>
        <Text>디테일로 이동(데이터 가져가지)</Text>
      </Pressable>

     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

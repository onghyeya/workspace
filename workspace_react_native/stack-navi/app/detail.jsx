import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const DetailScreen = () => {
  const router = useRouter();
  const {id,age} = useLocalSearchParams();// router 이동시 전달되는 데이터 받기
  return (
    <View>
      <Text>detail스크린 입니다</Text>
      <Text>{id}/{age}</Text>
      <Pressable
        onPress={() => {
          router.push("/myPage");
        }}
      >
        <Text>마이페이지로 이동</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.replace("/myPage");
        }}
      >
        <Text>마이페이지로 이동</Text>
      </Pressable>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});

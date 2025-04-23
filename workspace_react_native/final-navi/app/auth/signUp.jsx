import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { API_JOIN } from "../../apis/memberApi";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();
  const [joinData, setJoinData] = useState({
    memEmail: "",
    memPw: "",
    memName: "",
  });

  const handleJoinData = (text, name) => {
    setJoinData({
      ...joinData,
      [name]: text,
    });
  };

  const sendJoinData = () => {
    API_JOIN(joinData)
      .then((res) => {
        alert("성공");
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomInput
          label={"ID"}
          value={joinData.memEmail}
          onChangeText={(text) => {
            handleJoinData(text, "memEmail");
          }}
        />
      </View>
      <View>
        <CustomInput
          label={"PASSWORD"}
          isPw={true}
          value={joinData.memPw}
          onChangeText={(text) => {
            handleJoinData(text, "memPw");
          }}
        />
      </View>
      <View>
        <CustomInput
          label={"NAME"}
          value={joinData.memName}
          onChangeText={(text) => {
            handleJoinData(text, "memName");
          }}
        />
      </View>
      <View>
        <CustomButton label={"SIGN UP"} onPress={sendJoinData} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: "auto",
    paddingHorizontal: 20,
    gap: 20,
  },
});

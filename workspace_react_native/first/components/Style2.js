import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const Style2 = () => {
  const [id, setId] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.myFont}>ID</Text>
        <TextInput
          style={styles.myInput}
          onChangeText={(text) => {
            setId(text);
          }}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.myFont}>Password</Text>
        <TextInput 
          style={styles.myInput} 
          onChangeText={(text) => {
            setId(text);
          }}
        />
      </View>
      <Pressable style={styles.myButton} onPress={(e) => {}}>
        <Text style={styles.textButton}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Style2;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면을 꽉 채움
    justifyContent: "center",
    // borderWidth: 1,
    margin: "auto",
    width: 300,
  },
  box: {
    marginBottom: 20,
  },
  myInput: {
    borderWidth: 1,
    borderColor: "darkcyan",
    borderRadius: 5,
    padding: 5,
    height: 40,
  },
  myFont: {
    fontSize: 20,
    marginBottom: 5,
  },
  myButton: {
    width: "100%",
    borderRadius: 5,
    backgroundColor: "darkcyan",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    fontSize: 20,
    padding: 5,
    color: "white",
  },
});

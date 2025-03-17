import { Keyboard, StatusBar, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Login from "../components/Login";
import CartList from "../components/CartList";

const MainScreen = () => {
  return (
    // i-phone dismiss와 다른거 하나 더 필요
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={"darkcyan"} // ios 미적용
        />
        {/* <Login/> */}
        <CartList />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  }
});


// TouchableWidthoutFeedback 터치는 감지하되, 아무 반응도 일어나지 않는 컴포넌트 주로 키보드를 감출때 사용한다.
// onPress={Keyboard.dismiss} > 키보드 숨김 코드
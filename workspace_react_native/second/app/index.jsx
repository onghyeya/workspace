import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Login from "../components/Login";
import CartList from "../components/CartList";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"darkcyan"} // ios 미적용
      />
      {/* <Login/> */}
      <CartList />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});

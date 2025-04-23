import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>FARMDAS</Text>
      <View style={styles.loginStatus}>
        <Pressable
          onPress={() => {
            router.push("/auth/login");
          }}
        >
          <Text style={styles.text}>LOGIN</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/auth/signUp");
          }}
        >
          <Text style={styles.text}>JOIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    padding:"20px",
  },
  headerTitle: {
    fontSize: 30,
    color: "white",
  },
  loginStatus: {
    flexDirection: "row",
    gap: "12px",
    marginTop: "20px",
  },
  text: {
    color: "white",
  },
});

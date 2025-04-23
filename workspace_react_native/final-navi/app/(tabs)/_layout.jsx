import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Header from '@/components/Header'
const TabsLayout = () => {
  return (
      <SafeAreaView style={{flex:1}}>
        <Header/>
        <View style={{flex:1}}>
          <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
              name="(home)"
              options={{
                title: "집",
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: "내정보",
              }}
            />
            <Tabs.Screen
              name="search"
              options={{
                title: "검색",
              }}
            />
          </Tabs>
        </View>
      </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  
});

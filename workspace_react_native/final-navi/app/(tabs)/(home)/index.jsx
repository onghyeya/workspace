import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import FeedItem from "../../../components/FeedItem";
import { dummyData } from "../../../apis/dummyData";
import { FlatList } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import {colors} from '@/constants/colorConstant';
const HomeScreen = () => {
  const data = dummyData;
  return (
    <View style={styles.container}>
      <FlatList
        data={data} // 반복할 데이터
        renderItem={({ item }) => <FeedItem item={item} />} // 하나씩 뺀거 어케 할래 (FeedItem으로 쓸래)
        keyExtractor={(item) => item.id} // map == > key같음
        contentContainerStyle={styles.listContainer}
      />
      <Pressable style={styles.writeBtn}>
        <Octicons name="pencil" size={20} color="black" />
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  listContainer: {
    backgroundColor:colors.GRAY_200,
    gap:10,
    paddingHorizontal:8,
    paddingVertical:8,
  },
  writeBtn:{
    position:'absolute',
    width:50,
    height:50,
    backgroundColor:colors.GRAY_300,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    bottom:20,
    right:20
  },
});

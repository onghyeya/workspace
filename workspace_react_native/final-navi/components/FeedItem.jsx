import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "@/constants/colorConstant";
import Profile from "./Profile";
import { Octicons } from "@expo/vector-icons";


const FeedItem = ({item}) => {
  const isLike = true;
  return (
      <View style={styles.feedContainer}>
        <Profile writer={item.wrtier} createDate={item.createDate}/>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {item.content}
        </Text>
        <View style={styles.menuContainer}>
          <Pressable style={styles.menu} >
            <Octicons name={isLike?'heart-fill':'heart'}size={20} color="red" />
            <Text style={isLike&&{color:'red'}}>{item.likeCnt}</Text>
          </Pressable>
          <Pressable style={styles.menu}>
            <FontAwesome5 name="comment" size={20} color="black" />
            <Text>{item.replyCnt}</Text>
          </Pressable>
          <Pressable style={styles.menu}>
            <FontAwesome5 name="eye-slash" size={20} color="black" />
            <Text>{item.readCnt}</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  feedContainer: {
    padding: 20,
    backgroundColor:'white',
    borderRadius:10

  },
  menuContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.GRAY_300,
  },
  menu:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:8,
    gap:5,
  },
  title:{
    fontSize:20,
    marginBottom:13
  },
  content:{
    fontSize:14,
    color:colors.GRAY_500,
    paddingBottom:13
  }
});

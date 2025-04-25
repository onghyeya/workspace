import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import face from "@/assets/images/face-01.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import {colors} from '@/constants/colorConstant'

const Profile = ({writer,createDate}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={face} style={styles.img}/>
        <View style={{gap:5}}>
          <Text style={styles.writer}>{writer}</Text>
          <Text style={styles.createDate}>{createDate}</Text>
        </View>
      </View>
      <View>
        <Ionicons name="ellipsis-vertical-sharp" size={20} color="black" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom:10
  },
  profileContainer: {
    flexDirection:'row',
    gap:20
  },
  img:{
    width:50,
    height:50,
    borderRadius:50,
    borderColor:colors.GRAY_300,
    borderWidth:0.5
  },
  writer:{
    fontSize:15,
    fontWeight:'600'
  },
  createDate:{
    fontSize:12,
    color:colors.GRAY_500
  }
});

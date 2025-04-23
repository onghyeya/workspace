import axios from "axios";
import { Platform } from "react-native";

const baseUrl = Platform.OS === 'ios'? 'http://localhost:8080': 'http://10.0.2.2:8080'

export const API_JOIN = (joinData)=>{
  const response = axios.post(`${baseUrl}/users/join`,joinData);
  return response;
}

export const API_LOGIN = (loginData)=>{
  const response = axios.post(`${baseUrl}/member/login`,loginData);
  return response;
}
import axios from "axios";
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';

export const axiosInstance = axios.create({
  baseURL: Platform.OS === 'ios'? 'http://localhost:8080': 'http://10.0.2.2:8080'
});

// 서버로 요청 보낼때 냅다 훔쳐와
axiosInstance.interceptors.request.use(
  async config => {

    config.headers.clientType = 'app'
    const token = await SecureStore.getItemAsync('accessToken');

    if(token){
      // 요청시 요청 header에 토큰을 담아 전달
      config.headers.Authorization = token;
    }
    return config;

  },
  err => Promise.reject(err)
);
import { axiosInstance } from "./axiosInstance";

export const API_JOIN = (joinData)=>{
  const response = axiosInstance.post(`/users/join`,joinData);
  return response;
}

export const API_LOGIN = (loginData)=>{
  const response = axiosInstance.post(`/member/login`,loginData);
  return response;
}
import axios from "axios";

// axios객체를 생성
// 객체를 생성 후 해당 axios객체를 사용하면
// 동일한 설정 정보를 가지고 요쳥을 보낼 수 있음
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 이젠 api를 생략해도 돼
  withCredentials: true,
});

// 요청 시 실행 할 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // token이 null이 아니면 true > token을 요청 헤더에 담음
      config.headers.Authorization = token; 
    }

    return config;
  },
  (error) => Promise.reject(error)
);

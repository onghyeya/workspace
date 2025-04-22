import { jwtDecode } from "jwt-decode";

//만료 됐는지 ? 
export const isTokenExpired = (token) => {
  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decodedToken.exp < currentTime; // 만료가 되면 true
}

//로그인 여부
export const isAuthenticated = (token) => {
    if(!token) return false;
    if(isTokenExpired(token)) {
      // 만료가 됐어도 직접 지워주지 않으면 토큰이 남아 있기에 localStorage있는 토큰을 지워준다
      localStorage.removeItem('accessToken');
      return false;
    }

    return true;
}

//로그인 및 관리자 여부
export const isAdmin = (token) => {
  if(!isAuthenticated(token)) return false;

  const decodedToken = jwtDecode(token);

  return decodedToken.role === 'ROLE_ADMIN' 
  // 권한이 ADMIN이면 TRUE반환

}
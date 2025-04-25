import { jwtDecode } from 'jwt-decode';

// 토큰에서 로그인한 회원 email 추출
// 토큰에서 email 못 빼면 리턴 null, 있으면 email반환
export const getUserSubFromToken = (token) => {
  if (!token) return null; // 토큰 없으면 null 리턴

  // 예외 처리

  /*
    falsy : null, undefined, 0, 빈문자, NaN
    기존 방식 (or연산자 사용)- 왼쪽 데이터가 falsy일때 오른쪽 데이터 실행
    const username = user.name || 'Guest';

    아래는 ''를 true로 사용
    Nullish 병합 연산자 사용  - 왼쪽 데이터가 null 또는 nudefined일때만 오른쪽 데이터 실행
    const username = user.name ?? 'Guest';  
  */

  try {
    const decoded = jwtDecode(token); // 암호화된 토큰을 해제한 객체형태로 반환
    return decoded?.sub || null; // ?: 옵셔널 체이닝 (데이터가 있으면 sub 없으면 null)
  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};

export const getUserRoleFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.role || null;
  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};
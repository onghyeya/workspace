import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { isAuthenticated } from '../redux/authCheck';

const ProtectedRoute = ({children}) => {
  const token = useSelector(state => state.auth.token);
  // 접근 가능하니? 
  const [isAccessible, setIsAccessible] = useState(null);

  useEffect(() => {
    //token이 없을때
    if(!isAuthenticated(token)) {
      alert('로그인이 필요합니다.\n첫 화면으로 이동합니다.');
      setIsAccessible(false);
    }else{
      setIsAccessible(true);
    }
  }, []);

  
  if(isAccessible === null) return null;
  return isAccessible ? children : <Navigate to={'/'}/>;
}

export default ProtectedRoute
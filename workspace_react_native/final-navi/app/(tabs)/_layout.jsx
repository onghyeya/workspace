import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'
import Octicons from '@expo/vector-icons/Octicons';

const TabLayout = () => {
  const auth = useSelector(state => state.auth);
  const router = useRouter();

  // 로그인이 필요한 탭 목록
  const protectedTabs = ['profile', 'search']; // 로그인이 필요한 탭 이름들

  // 탭 접근 권한 확인 함수
  const checkAuthForTab = (tabName) => {
    // 매개 변수로 들어온 데이터가 배열에 있으면 true
    if (protectedTabs.includes(tabName) && !auth.isLogin) {
      console.log(`${tabName} 탭은 로그인이 필요합니다`);
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabArea}>
        <Tabs screenOptions={{
           headerShown:false,
        }}>
          <Tabs.Screen 
            name='(home)'
            options={{title : '홈',tabBarIcon:()=><Octicons name="home" size={20} color="black" />}}
          />
          <Tabs.Screen 
            name='profile'
            options={{title: '프로필',tabBarIcon:()=><Octicons name="person" size={20} color="black" />}}
            listeners={{
              tabPress: (e) => {
                // 로그인 안되어있을 때 실행
                if (!checkAuthForTab('profile')) {
                  // 기본 탭 이벤트 방지
                  e.preventDefault();
                  // 로그인 페이지로 이동
                  router.push('/auth/login');
                }
              }
            }}
          />
          <Tabs.Screen 
            name='search'
            options={{title : '검색',tabBarIcon:()=><Octicons name="search" size={20} color="black" />}}
            listeners={{
              tabPress: (e) => {
                //로그인 안되어 있을때 
                if (!checkAuthForTab('search')) {
                  // 기본 탭 이벤트 방지
                  e.preventDefault();
                  // 로그인 페이지로 이동
                  router.push('/auth/login');
                }
              }
            }}
          />
        </Tabs>
      </View>
    </View>
  )
}

export default TabLayout

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  tabArea : {
    flex : 1
  }
})
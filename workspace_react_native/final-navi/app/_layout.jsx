import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // 모든 자원을 다 가져오면 실행
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* 
        - 핸드폰 상단 상태 바 
        translucent : 투명도 및 범위 설정
        true : 반투명+statusbar 범위 침범
        false : 불투명 + statusbar 범위 침범x
      */}
      <StatusBar style='auto' translucent={false} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

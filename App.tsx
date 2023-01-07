import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation";
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <PaperProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
        onLayout={onLayoutRootView}
      >
        <Navigation />
      </SafeAreaView>
      <StatusBar style="light" />
    </PaperProvider>
  );
}

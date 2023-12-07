import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import SongList from "./screens/SongList.js";
import { StyleSheet, SafeAreaView } from "react-native";



export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        
        {/* Navigation component */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />

        {/* SongList component */}
        
      </SafeAreaProvider>
    );
  }
}
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import SongList from "./screens/SongList.js";
import FullChord from "./screens/FullChords"; // Assuming you have a FullCode component
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Artists from "./screens/Artists";
import ArtistSongs from "./screens/ArtistSongs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={SongList}
      options={{ title: 'Song List' }}
    />
    <Stack.Screen
      name="FullChord"
      component={FullChord}
      options={{ title: 'Full Chords and Lyrics' }}
    />
  </Stack.Navigator>
);
const ArtistScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Artists"
      component={Artists}
      options={{ title: 'Artists' }}
    />
    <Stack.Screen
      name="ArtistSongs"
      component={ArtistSongs}
      options={{ title: 'Artist Songs' }}
    />
    <Stack.Screen
      name="FullChord"
      component={FullChord}
      options={{ title: 'Full Chords and Lyrics' }}
    />
  </Stack.Navigator>
);


export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Artists" component={ArtistScreen} />
            {/* Add more tabs as needed */}
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  }
}
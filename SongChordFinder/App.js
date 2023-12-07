import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import SongList from "./screens/SongList.js";
import FullChord from "./screens/FullChords";
import Artists from "./screens/Artists";
import ArtistSongs from "./screens/ArtistSongs";
import Tunner from "./screens/Tunner"; // Assuming you have a Tunner component
import Profile from "./screens/Profile"; // Assuming you have a Profile component
import { StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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

const App = () => {
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
            <Tab.Screen name="Tunner" component={Tunner} />
          </Tab.Navigator>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => console.log("Profile button pressed")}
          >
            <Text style={styles.profileButtonText}>Profile</Text>
          </TouchableOpacity>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  }
};

const styles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    top: 100,
    right: 0,
    padding: 10,
  },
  profileButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
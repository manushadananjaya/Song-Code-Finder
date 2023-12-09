// Dashboard.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();

  const navigateToSongList = () => {
    navigation.navigate("Songs");
  };

  const navigateToArtists = () => {
    navigation.navigate("Artists");
  };

  const navigateToTuner = () => {
    navigation.navigate("Tuner");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your App!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToSongList}>
        <Text style={styles.buttonText}>View Songs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToArtists}>
        <Text style={styles.buttonText}>View Artists</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToTuner}>
        <Text style={styles.buttonText}>Guitar Tuner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Dashboard;

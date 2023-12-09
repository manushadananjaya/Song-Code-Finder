// FullCode.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const FullCode = ({ route }) => {
  const { selectedSong } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedSong.title}</Text>
      <Text style={styles.chords}>Chords: {selectedSong.chords}</Text>
      <ScrollView style={styles.lyricsContainer}>
        <Text style={styles.lyrics}>{selectedSong.lyrics}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  chords: {
    fontSize: 18,
    marginBottom: 10,
  },
  lyricsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  lyrics: {
    fontSize: 16,
  },
});

export default FullCode;

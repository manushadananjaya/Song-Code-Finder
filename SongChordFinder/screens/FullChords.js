// FullCode.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FullCode = ({ route }) => {
  const { selectedSong } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedSong.title}</Text>
      <Text style={styles.chords}>Chords: {selectedSong.chords}</Text>
      <Text style={styles.lyrics}>Lyrics: {selectedSong.lyrics}</Text>
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
  lyrics: {
    fontSize: 16,
  },
});

export default FullCode;

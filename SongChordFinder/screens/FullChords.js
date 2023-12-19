import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FullCode = ({ route }) => {
  const { selectedSong } = route.params;
  const [selectedScale, setSelectedScale] = useState('C');
  const [isScalePanelVisible, setIsScalePanelVisible] = useState(true);

  const scaleChords = {
    // ... (your existing scale chords)
     // ... (your existing scale chords)
      // ... (your existing scale chords)
      Ab: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      A: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
      'A#': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      Bb: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      B: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      C: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      'C#': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      Db: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      D: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
      'D#': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      Eb: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      E: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
      F: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      'F#': ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      Gb: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'],
      G: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'],
      'G#': ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'],
  };

  const getChordsForScale = (scale) => {
    return scaleChords[scale] || [];
  };

  const renderScaleButtons = () => {
    const scales = Object.keys(scaleChords);

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {isScalePanelVisible && (
          <View style={styles.scaleButtonsContainer}>
            {scales.map((scale) => (
              <TouchableOpacity
                key={scale}
                style={[
                  styles.scaleButton,
                  { backgroundColor: selectedScale === scale ? 'blue' : 'gray' },
                ]}
                onPress={() => setSelectedScale(scale)}
              >
                <Text style={styles.scaleButtonText}>{scale}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedSong.title}</Text>
      {/* <Text style={styles.chords}>Chords: {getChordsForScale(selectedScale).join(', ')}</Text> */}
      <ScrollView style={styles.lyricsContainer}>
        <Text style={styles.lyrics}>{selectedSong.lyrics}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setIsScalePanelVisible(!isScalePanelVisible)}
      >
        <Text style={styles.toggleButtonText}>
          {isScalePanelVisible ? 'Hide Scales' : 'Show Scales'}
        </Text>
      </TouchableOpacity>

      {renderScaleButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    flex: 0,
    marginBottom: 4,
  },
  lyrics: {
    fontSize:16,
  },
  scaleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 70,
  },
  scaleButton: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    height: 50,
    marginBottom: 10,
  },
  scaleButtonText: {
    color: 'white',
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FullCode;

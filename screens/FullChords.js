import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FullCode = ({ route }) => {
  const { selectedSong } = route.params;
  const [selectedScale, setSelectedScale] = useState(`${selectedSong.default}`);
  const [isScalePanelVisible, setIsScalePanelVisible] = useState(false);

  // Define lyrics for each scale
  const scaleLyrics = {
    
    Ab: selectedSong.lyrics2,
    A: selectedSong.lyrics3,
    'A#': selectedSong.lyrics4,
    Bb: selectedSong.lyrics5,
    B: selectedSong.lyrics6,
    C: selectedSong.lyrics7,
    'C#': selectedSong.lyrics8,
    Db: selectedSong.lyrics9,
    D: selectedSong.lyrics10,
    'D#': selectedSong.lyrics11,
    Eb: selectedSong.lyrics12,
    E: selectedSong.lyrics13,
    F: selectedSong.lyrics14,
    'F#': selectedSong.lyrics15,
    Gb: selectedSong.lyrics16,
    G: selectedSong.lyrics17,
    'G#': selectedSong.lyrics18,
    
    // Add more scales and corresponding lyrics as needed
  };

  const getChordsForScale = (scale) => {
    // Assume this function returns chords based on the selected scale
    // You can implement this function as needed
    return [];
  };

  const renderScaleButtons = () => {
    const scales = Object.keys(scaleLyrics);

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
                onPress={() => {
                  setSelectedScale(scale);
                }}
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
        <Text style={styles.lyrics}>{scaleLyrics[selectedScale]}</Text>
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
    fontSize: 16,
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

// Karaoke.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const Karaoke = () => {
  const karaokeSongs = [
    { id: '1', title: 'Karaoke Song 1', lyrics: 'Lyrics for Karaoke Song 1', audioUrl: 'audio_url_1.mp3' },
    { id: '2', title: 'Karaoke Song 2', lyrics: 'Lyrics for Karaoke Song 2', audioUrl: 'audio_url_2.mp3' },
    // Add more karaoke songs
  ];

  const [selectedSong, setSelectedSong] = useState(null);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(karaokeSongs);
  };

  const handlePlaySong = async (song) => {
    try {
      if (selectedSong && selectedSong.id === song.id) {
        // Toggle play/pause if the same song is clicked again
        await TrackPlayer.togglePlay();
      } else {
        // Play the selected song
        await TrackPlayer.skip(song.id);
        await TrackPlayer.play();
      }

      setSelectedSong(song);
    } catch (error) {
      console.error('Error playing song:', error);
    }
  };

  useEffect(() => {
    setupTrackPlayer();

    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Karaoke Songs</Text>
      <FlatList
        data={karaokeSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => handlePlaySong(item)}
          >
            <Text style={styles.songTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedSong && (
        <View style={styles.selectedSongContainer}>
          <Text style={styles.selectedSongTitle}>{selectedSong.title}</Text>
          {/* Add audio playback controls and lyrics display here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  songItem: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedSongContainer: {
    marginTop: 20,
    borderWidth: 1,
    padding: 16,
    borderRadius: 5,
  },
  selectedSongTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Karaoke;

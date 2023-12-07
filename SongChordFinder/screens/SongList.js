import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SongList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [originalSongs, setOriginalSongs] = useState([
    { id: '1', title: 'Piyamanne', chords: 'C, G, Am, F', lyrics: 'Lyrics for Piyamanne...' },
    { id: '2', title: 'Ashwari', chords: 'D, A, Bm, G', lyrics: 'Lyrics for Ashwari...' },
    { id: '3', title: 'Song 3', chords: 'C, G, Am, F', lyrics: 'Lyrics for Song 3...' },
    { id: '4', title: 'Song 4', chords: 'D, A, Bm, G', lyrics: 'Lyrics for Song 4...' },
    // Add more songs as needed
  ]);
  const [songs, setSongs] = useState(originalSongs);

  const navigation = useNavigation();

  const searchSongs = () => {
    const filteredSongs = originalSongs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSongs(filteredSongs);
  };

  const navigateToFullChords = (selectedSong) => {
    navigation.navigate('FullChords', { selectedSong });
  };

  useEffect(() => {
    setSongs(originalSongs);
  }, [searchTerm]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for a song"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={searchSongs}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => navigateToFullChords(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.chords}>Chords: {item.chords}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  searchButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songItem: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  chords: {
    fontSize: 16,
  },
});

export default SongList;

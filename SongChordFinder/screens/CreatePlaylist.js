// CreatePlaylist.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CreatePlaylist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const navigation = useNavigation();

  const mockSongs = [
    { id: '1', title: 'Song 1' },
    { id: '2', title: 'Song 2' },
    { id: '3', title: 'Song 3' },
    // Add more mock songs
  ];

  const handleSearch = () => {
    const filteredSongs = mockSongs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredSongs);
  };

  const handleAddToPlaylist = (song) => {
    setSelectedSongs((prevSongs) => [...prevSongs, song]);
  };

  const handleCreatePlaylist = () => {
    if (playlistName.trim() === '' || selectedSongs.length === 0) {
      Alert.alert('Error', 'Please enter a playlist name and add songs to create a playlist.');
      return;
    }

    const newPlaylist = { name: playlistName, songs: selectedSongs };

    // TODO: Handle saving the playlist in your application's state, context, or server

    // Navigate to the Playlists screen or any other screen after creating the playlist
    navigation.navigate('Playlists', { newPlaylist });
  };

  useEffect(() => {
    // Optional: Clear the form fields and search results after creating the playlist
    setPlaylistName('');
    setSelectedSongs([]);
    setSearchResults([]);
    setSearchTerm('');
  }, []); // Empty dependency array to avoid re-renders caused by this useEffect

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Playlist</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter playlist name"
        value={playlistName}
        onChangeText={setPlaylistName}
      />
      <TextInput
        style={styles.input}
        placeholder="Search for a song"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => handleAddToPlaylist(item)}
          >
            <Text style={styles.songTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.createButton} onPress={handleCreatePlaylist}>
        <Text style={styles.createButtonText}>Create Playlist</Text>
      </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
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
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: 'green',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreatePlaylist;

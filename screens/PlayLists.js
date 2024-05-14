// Playlists.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Playlists = ({ route }) => {
  const [playlists, setPlaylists] = useState([]);
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate fetching user's playlists (replace this with your actual logic)
    const fetchPlaylists = async () => {
      // Simulate an API call or any asynchronous operation
      const response = await fetch('https://your-api-endpoint/playlists');
      const data = await response.json();
      // Assuming the response contains an array of playlists
      setPlaylists(data.playlists || []);
    };

    fetchPlaylists();
  }, [isFocused, route.params]);

  const navigateToPlaylistDetail = (playlist) => {
    // Implement navigation to the playlist screen with songs
    // You can pass the selected playlist and its songs as params
    navigation.navigate('PlaylistDetail', { playlist });
  };

  const navigateToCreatePlaylist = () => {
    // Navigate to the screen where users can create a new playlist
    navigation.navigate('CreatePlaylist');
  };

  // Check if there is a new playlist added and update the playlists
  if (route.params && route.params.newPlaylist) {
    setPlaylists((prevPlaylists) => [...prevPlaylists, route.params.newPlaylist]);
  }

  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.playlistItem}
      onPress={() => navigateToPlaylistDetail(item)}
    >
      <Text style={styles.playlistTitle}>{item.title}</Text>
      {/* You can display additional information about the playlist */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Playlists</Text>
      <TouchableOpacity style={styles.createButton} onPress={navigateToCreatePlaylist}>
        <Text style={styles.createButtonText}>Create Playlist</Text>
      </TouchableOpacity>
      {playlists.length > 0 ? (
        <FlatList
          data={playlists}
          keyExtractor={(item) => item.id}
          renderItem={renderPlaylistItem}
        />
      ) : (
        <Text>No playlists available</Text>
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
  createButton: {
    backgroundColor: 'blue',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  playlistItem: {
    marginBottom: 16,
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Playlists;

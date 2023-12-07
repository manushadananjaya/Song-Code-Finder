import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ArtistSongs = ({ route }) => {
  const { artistName, artistSongs } = route.params;
  const navigation = useNavigation();

  const navigateToFullChords = (selectedSong) => {
    navigation.navigate('FullChord', { selectedSong });
  };

  return (
    <View>
      <Text style={styles.title}>Songs by {artistName}</Text>
      <FlatList
        data={artistSongs}
        keyExtractor={(item) => item.id}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default ArtistSongs;

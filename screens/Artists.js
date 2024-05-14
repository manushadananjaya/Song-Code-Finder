import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const Artists = ({ route }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalSongs, setOriginalSongs] = useState([
    // ... (your existing data)
    {
      id: "1",
      title: "Piyamanne",
      artist: "Artist 1",
      chords: "C, G, Am, F",
      lyrics: "Lyrics for Piyamanne...",
    },
    {
      id: "2",
      title: "Ashwari",
      artist: "Artist 2",
      chords: "D, A, Bm, G",
      lyrics: "Lyrics for Ashwari...",
    },
    {
      id: "3",
      title: "Song 3",
      artist: "Artist 1",
      chords: "C, G, Am, F",
      lyrics: "Lyrics for Song 3...",
    },
    {
      id: "4",
      title: "Song 4",
      artist: "Artist 3",
      chords: "D, A, Bm, G",
      lyrics: "Lyrics for Song 4...",
    },
    // Add more songs as needed
  ]);
  const [artists, setArtists] = useState([]);
  const navigation = useNavigation();

  const searchArtists = () => {
    const uniqueArtists = [...new Set(originalSongs.map((song) => song.artist))];
    const filteredArtists = uniqueArtists.filter((artist) =>
      artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setArtists(filteredArtists);
  };

  const navigateToArtistSongs = (artistName) => {
    const artistSongs = originalSongs.filter((song) => song.artist === artistName);
    navigation.navigate("ArtistSongs", { artistName, artistSongs });
  };

  useEffect(() => {
    setArtists([...new Set(originalSongs.map((song) => song.artist))]);
  }, [originalSongs]); // Make sure to include originalSongs in the dependency array

  useFocusEffect(
    React.useCallback(() => {
      setSearchTerm(""); // Reset search term when the screen gains focus
    }, [])
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for an artist"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={searchArtists}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={artists}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.artistItem}
            onPress={() => navigateToArtistSongs(item)}
          >
            <Text style={styles.artist}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  searchButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistItem: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  artist: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default Artists;

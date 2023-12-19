// SongList.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { songs } from "../components/SongData";

const SongList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalSongs, setOriginalSongs] = useState([...songs]);
  const [filteredSongs, setFilteredSongs] = useState([...songs]);
  const navigation = useNavigation();

  const searchSongs = () => {
    const term = searchTerm.toLowerCase();
    const filtered = originalSongs.filter(
      (song) =>
        song.title.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term)
    );
    setFilteredSongs(filtered);
  };

  const navigateToFullChords = (selectedSong) => {
    navigation.navigate("FullChord", { selectedSong });
  };

  useEffect(() => {
    searchSongs();
  }, [searchTerm]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for a song or artist"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <TouchableOpacity style={styles.searchButton} onPress={searchSongs}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => navigateToFullChords(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            {item.artist && (
              <Text style={styles.artist}>Artist: {item.artist}</Text>
            )}
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
  songItem: {
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  artist: {
    fontSize: 16,
  },
  chords: {
    fontSize: 16,
  },
});

export default SongList;

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

const SongList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [originalSongs, setOriginalSongs] = useState([
    {
      id: "1",
      title: "Piyamanne",
      artist: "Artist 1",
      chords: "Gm, F, Cm, Gm, Bb, Cm, Eb, F, Bb, Gm, Cm, Eb, F, Bb, Cm, Gm, Cm, D, D7",
      lyrics: `Inter:
      Gm | - | - | - |
      F  | - | - | - |
      Cm | - | F | - |
      Gm | - | - | - |
      
      Verse 1:
      
      Gm       Bb       Cm
      Piyamanne  ai da ese
          Eb   F                Bb
      Ridawa...la oba masitha mese
              Gm       Cm
      Dura gawwe, ma inne
           Eb      F               Bb
      Mathake renduna piya sithuwille
                   Cm
      Sewaneli mawathe
             Gm
      Andi e jiwithe
                 Cm           D
      Reli matha sagare mathu wewa
                D7
      Sada piya sihine
      
      Chorus:
      
      Gm
      Siyumeli oba watha rendi e
              F
      Dekapul kii katha
       Cm       F             Gm
      Ase sawan purawa mage deane
                                    F
      Athwel bandagena welle andi e ru rata
        Cm      F              Gm
      Maki giya rellen isana reye
      
      Verse 2:
      
      Gm       Bb
      Sitha gatthe
                Cm
      Nethuwa nowe
          Eb         F       Bb
      Semada elesa bala ai inne
              Gm           Cm
      Hada arane redunu senehe
          Eb          F         Bb
      Pubuda soyanu mene hasarelle
                Cm
      Nethuwath me bawwe
                Gm
      Mathu ena jiwithe
             Cm
      Semada age senehe
              D
      Sathu wewa
           D7
      Sada landune`,
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
  const [songs, setSongs] = useState(originalSongs);
  const navigation = useNavigation();

  const searchSongs = () => {
    const filteredSongs = originalSongs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSongs(filteredSongs);
  };

  const navigateToFullChords = (selectedSong) => {
    navigation.navigate("FullChord", { selectedSong });
  };

  useEffect(() => {
    setSongs(originalSongs);
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
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => navigateToFullChords(item)}
          >
            <Text style={styles.title}>{item.title}</Text>
            {item.artist && <Text style={styles.artist}>Artist: {item.artist}</Text>}
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

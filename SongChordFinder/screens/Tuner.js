import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const Tuner = () => {
  const [recording, setRecording] = useState();
  const [isTuning, setIsTuning] = useState(false);

  useEffect(() => {
    prepareAudio();
    return () => {
      if (recording) {
        recording.stopAndUnloadAsync();
      }
    };
  }, []);

  const prepareAudio = async () => {
    const { status } = await Audio.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Permission to access audio was denied');
      return;
    }

    const recordingInstance = new Audio.Recording();
    await recordingInstance.prepareToRecordAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );

    setRecording(recordingInstance);
  };

  const startTuning = async () => {
    if (!recording) {
      console.warn('Recording not initialized');
      return;
    }

    try {
      await recording.startAsync();
      setIsTuning(true);
    } catch (error) {
      console.error('Failed to start recording', error);
      // Handle the error here, e.g., show an alert or log it
    }
  };

  const stopTuning = async () => {
    if (!recording) {
      return;
    }

    try {
      await recording.stopAndUnloadAsync();
      setIsTuning(false);
    } catch (error) {
      console.error('Failed to stop recording', error);
      // Handle the error here, e.g., show an alert or log it
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guitar Tuner</Text>
      <Text style={styles.status}>{isTuning ? 'Tuning...' : 'Not Tuning'}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={startTuning}
          disabled={isTuning}
        >
          <Text style={styles.buttonText}>Start Tuning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={stopTuning}
          disabled={!isTuning}
        >
          <Text style={styles.buttonText}>Stop Tuning</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  status: {
    fontSize: 18,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Tuner;

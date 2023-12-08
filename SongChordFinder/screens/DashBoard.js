import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tunner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DashBoard Screen</Text>
      {/* Add tunner content here */}
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
});

export default Tunner;

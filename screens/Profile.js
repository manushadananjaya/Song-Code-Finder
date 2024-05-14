// Profile.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>JohnDoe123</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>john.doe@example.com</Text>
        {/* Add more user profile information here */}
      </View>
      <View style={styles.settings}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Notification:</Text>
          <Text style={styles.settingValue}>Enabled</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Theme:</Text>
          <Text style={styles.settingValue}>Light</Text>
        </View>
        {/* Add more app settings here */}
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')} // Replace 'Login' with your login screen name
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles
});

export default Profile;

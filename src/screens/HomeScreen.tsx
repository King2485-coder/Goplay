import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  const handleEnterDashboard = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GoPlay</Text>
      <Text style={styles.subtitle}>Safe, fun playdates for kids</Text>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleEnterDashboard}
      >
        <Text style={styles.primaryButtonText}>Enter Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 999,
  },
  primaryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

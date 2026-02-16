// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

type Kid = {
  id: string;
  name: string;
  age: number;
  allergies?: string;
  notes?: string;
};

type RouteParams = {
  kid?: Kid;
};

export default function ProfileScreen() {
  const route = useRoute<any>();
  const kid: Kid =
    route.params?.kid || ({
      id: 'fallback',
      name: 'Child',
      age: 0,
      allergies: 'None',
      notes: 'Profile details coming soon.',
    } as Kid);

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {kid.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.name}>{kid.name}</Text>
      <Text style={styles.age}>{kid.age} years old</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergies</Text>
        <Text style={styles.sectionText}>
          {kid.allergies && kid.allergies.trim().length > 0
            ? kid.allergies
            : 'No known allergies'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notes for other parents</Text>
        <Text style={styles.sectionText}>
          {kid.notes && kid.notes.trim().length > 0
            ? kid.notes
            : 'You can add notes about personality, favorite games, or anything to know before a playdate.'}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety settings</Text>
        <Text style={styles.sectionText}>
          In a later version, you’ll be able to toggle who can see this profile,
          verify emergency contacts, and share medical info securely.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  avatar: {
    alignSelf: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '700',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#111827',
  },
  age: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 24,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 13,
    color: '#4B5563',
  },
});

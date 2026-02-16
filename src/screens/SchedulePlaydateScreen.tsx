// src/screens/SchedulePlaydateScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePlaydates } from '../context/PlaydatesContext';

const SchedulePlaydateScreen = () => {
  const navigation = useNavigation<any>();
  const { addPlaydate } = usePlaydates();

  const [childName, setChildName] = useState('');
  const [title, setTitle] = useState('Playdate at the park');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = async () => {
    if (!childName || !location || !date || !time) {
      Alert.alert(
        'Missing info',
        'Please fill child name, location, date, and time.'
      );
      return;
    }

    await addPlaydate({
      childName,
      title,
      location,
      date,
      time,
      notes,
      status: 'pending',
    });

    // Go back to Playdates tab
    navigation.navigate('MainTabs', { screen: 'Playdates' });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Schedule a playdate</Text>
      <Text style={styles.subtitle}>
        Fill in the details so other parents know what to expect.
      </Text>

      <View style={styles.field}>
        <Text style={styles.label}>Child name</Text>
        <TextInput
          style={styles.input}
          placeholder="Which kid is this for?"
          value={childName}
          onChangeText={setChildName}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Playdate title"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Park, playground, etc."
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.row}>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="2025-12-05"
            value={date}
            onChangeText={setDate}
          />
        </View>
        <View style={[styles.field, styles.half]}>
          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="3:30 PM"
            value={time}
            onChangeText={setTime}
          />
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Snacks, allergies, meeting point…"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>Create playdate</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SchedulePlaydateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 24,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 14,
  },
  notesInput: {
    height: 90,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButton: {
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  secondaryButtonText: {
    color: '#6B7280',
    fontSize: 14,
  },
});

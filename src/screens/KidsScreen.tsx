// src/screens/KidsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type Kid = {
  id: string;
  name: string;
  age: number;
  allergies?: string;
  notes?: string;
};

const kids: Kid[] = [
  {
    id: '1',
    name: 'Aiden',
    age: 6,
    allergies: 'Peanuts',
    notes: 'Very outgoing, loves the slide.',
  },
  {
    id: '2',
    name: 'Maya',
    age: 4,
    allergies: 'None',
    notes: 'Shy at first, warms up quickly.',
  },
];

export default function KidsScreen() {
  const navigation = useNavigation<any>();

  const openProfile = (kid: Kid) => {
    navigation.navigate('Profile', { kid });
  };

  const renderKid = ({ item }: { item: Kid }) => (
    <TouchableOpacity style={styles.card} onPress={() => openProfile(item)}>
      <View style={styles.headerRow}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.age}>{item.age} yrs</Text>
      </View>
      {item.allergies ? (
        <Text style={styles.meta}>Allergies: {item.allergies}</Text>
      ) : (
        <Text style={styles.meta}>Allergies: None</Text>
      )}
      {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My kids</Text>
      <Text style={styles.subtitle}>
        Manage profiles so other parents know who’s coming to play.
      </Text>

      <FlatList
        data={kids}
        keyExtractor={item => item.id}
        renderItem={renderKid}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.footerNote}>
        <Text style={styles.footerNoteText}>
          In a real version, you’ll be able to add / edit kid profiles here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    shadowColor: '#111827',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  age: {
    fontSize: 13,
    fontWeight: '500',
    color: '#2563EB',
  },
  meta: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 4,
  },
  notes: {
    fontSize: 12,
    color: '#6B7280',
  },
  separator: {
    height: 12,
  },
  footerNote: {
    marginTop: 8,
  },
  footerNoteText: {
    fontSize: 11,
    color: '#9CA3AF',
  },
});

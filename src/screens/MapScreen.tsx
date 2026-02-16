// src/screens/MapScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

type Park = {
  id: string;
  name: string;
  distance: string;
  kidsPlaying: number;
  checkedInFamilies: number;
  activities: string[];
};

const nearbyParks: Park[] = [
  {
    id: '1',
    name: 'Sunset Park',
    distance: '0.3 mi',
    kidsPlaying: 5,
    checkedInFamilies: 3,
    activities: ['Tag', 'Slides', 'Scooters'],
  },
  {
    id: '2',
    name: 'Ridgeview Playground',
    distance: '0.8 mi',
    kidsPlaying: 2,
    checkedInFamilies: 1,
    activities: ['Swings', 'Sandbox'],
  },
  {
    id: '3',
    name: 'Oakwood Community Park',
    distance: '1.4 mi',
    kidsPlaying: 7,
    checkedInFamilies: 4,
    activities: ['Basketball', 'Soccer', 'Bike riding'],
  },
];

export default function MapScreen() {
  const renderPark = ({ item }: { item: Park }) => (
    <TouchableOpacity style={styles.parkCard}>
      <View style={styles.parkHeader}>
        <Text style={styles.parkName}>{item.name}</Text>
        <Text style={styles.parkDistance}>{item.distance}</Text>
      </View>

      <View style={styles.parkStatsRow}>
        <View style={styles.statPill}>
          <Text style={styles.statNumber}>{item.kidsPlaying}</Text>
          <Text style={styles.statLabel}>kids playing</Text>
        </View>
        <View style={styles.statPill}>
          <Text style={styles.statNumber}>{item.checkedInFamilies}</Text>
          <Text style={styles.statLabel}>families checked in</Text>
        </View>
      </View>

      <View style={styles.chipsRow}>
        {item.activities.map((activity, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{activity}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby parks</Text>
      <Text style={styles.subtitle}>
        See where families are checked in and what kids are playing.
      </Text>

      {/* Map placeholder – real map can be added later with a map library */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>Map coming soon</Text>
        <Text style={styles.mapPlaceholderSub}>
          This will show real-time check-ins on a live map.
        </Text>
      </View>

      <FlatList
        data={nearbyParks}
        keyExtractor={item => item.id}
        renderItem={renderPark}
        contentContainerStyle={styles.listContent}
      />
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
    marginBottom: 12,
  },
  mapPlaceholder: {
    backgroundColor: '#DBEAFE',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapPlaceholderText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1D4ED8',
  },
  mapPlaceholderSub: {
    fontSize: 12,
    color: '#1E3A8A',
    marginTop: 4,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 24,
  },
  parkCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#111827',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  parkHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  parkName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  parkDistance: {
    fontSize: 12,
    color: '#6B7280',
  },
  parkStatsRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  statPill: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  statLabel: {
    fontSize: 11,
    color: '#6B7280',
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  chip: {
    borderRadius: 999,
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    fontSize: 11,
    color: '#1D4ED8',
  },
});

// src/screens/PlayDetailsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { usePlaydates } from '../context/PlaydatesContext';

const PlayDetailsScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { playdates } = usePlaydates() as { playdates: any[] };

  const { playdateId } = route.params ?? {};
  const playdate = playdates.find((p: any) => p.id === playdateId);

  if (!playdate) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Playdate not found</Text>
        <Text style={styles.subtitle}>
          We couldn&apos;t find that playdate. It may have been removed.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate('MainTabs', { screen: 'Playdates' })
          }
        >
          <Text style={styles.primaryButtonText}>Back to playdates</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const {
    title,
    childName,
    location,
    date,
    time,
    notes,
    status,
  } = playdate as any;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>Playdate details</Text>
      <Text style={styles.title}>{title || 'Playdate'}</Text>

      <View style={styles.chipRow}>
        {childName ? (
          <View style={styles.chip}>
            <Text style={styles.chipText}>{childName}</Text>
          </View>
        ) : null}
        {status ? (
          <View style={styles.chip}>
            <Text style={styles.chipText}>
              {status === 'pending' ? 'Pending' : status}
            </Text>
          </View>
        ) : null}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>When</Text>
        <Text style={styles.cardValue}>
          {date || 'Date TBD'} · {time || 'Time TBD'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Where</Text>
        <Text style={styles.cardValue}>{location || 'Location TBD'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Notes for parents</Text>
        <Text style={styles.cardValue}>
          {notes || 'No extra notes shared yet.'}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() =>
          navigation.navigate('MainTabs', { screen: 'Playdates' })
        }
      >
        <Text style={styles.primaryButtonText}>Back to playdates</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PlayDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  kicker: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#6B7280',
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 8,
  },
  chip: {
    borderRadius: 999,
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },
});

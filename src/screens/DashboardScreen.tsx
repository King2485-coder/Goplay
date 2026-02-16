// src/screens/DashboardScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePlaydates } from '../context/PlaydatesContext';

type DashboardTileProps = {
  title: string;
  subtitle: string;
  color: string;
  onPress: () => void;
};

const DashboardTile = ({
  title,
  subtitle,
  color,
  onPress,
}: DashboardTileProps) => {
  return (
    <TouchableOpacity style={[styles.tile, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.tileTitle}>{title}</Text>
      <Text style={styles.tileSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const DashboardScreen = () => {
  const navigation = useNavigation<any>();
  const { playdates } = usePlaydates() as { playdates: any[] };

  const totalPlaydates = playdates.length;
  const pendingRequests = playdates.filter(p => p.status === 'pending').length;
  const upcomingPlaydates = playdates.filter(p => p.status === 'confirmed').length;

  const goToPlaydatesTab = () => {
    navigation.navigate('MainTabs', { screen: 'Playdates' });
  };

  const goToSchedulePlaydate = () => {
    navigation.navigate('SchedulePlaydate');
  };

  const goToMapTab = () => {
    navigation.navigate('MainTabs', { screen: 'Map' });
  };

  const goToMessagesTab = () => {
    navigation.navigate('MainTabs', { screen: 'Messages' });
  };

  const goToAccountTab = () => {
    navigation.navigate('MainTabs', { screen: 'Account' });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Your GoPlay Dashboard</Text>

      <View style={styles.overviewRow}>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>{totalPlaydates}</Text>
          <Text style={styles.overviewLabel}>Playdates</Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>{pendingRequests}</Text>
          <Text style={styles.overviewLabel}>Requests</Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={styles.overviewNumber}>{upcomingPlaydates}</Text>
          <Text style={styles.overviewLabel}>Upcoming</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Quick actions</Text>

      <View style={styles.tilesGrid}>
        <DashboardTile
          title="Find playmates"
          subtitle="See who's nearby & at the park"
          color="#4F8EF7"
          onPress={goToPlaydatesTab}
        />
        <DashboardTile
          title="Schedule playdate"
          subtitle="Plan a future meetup"
          color="#34C759"
          onPress={goToSchedulePlaydate}
        />
        <DashboardTile
          title="My kids"
          subtitle="View & edit kid profiles"
          color="#FFCC00"
          onPress={goToAccountTab}
        />
        <DashboardTile
          title="Messages"
          subtitle="Chat with other parents"
          color="#AF52DE"
          onPress={goToMessagesTab}
        />
        <DashboardTile
          title="Safety settings"
          subtitle="Manage safety & checks"
          color="#FF3B30"
          onPress={goToAccountTab}
        />
        <DashboardTile
          title="Map"
          subtitle="See nearby families & parks"
          color="#32ADE6"
          onPress={goToMapTab}
        />
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>Tip for today</Text>
        <Text style={styles.tipText}>
          Check in to a nearby park so other families can see that your kids are
          ready to play.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;

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
    marginBottom: 16,
    color: '#111827',
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  overviewItem: {
    flex: 1,
    alignItems: 'center',
  },
  overviewNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  overviewLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  tilesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  tile: {
    width: '48%',
    borderRadius: 16,
    padding: 12,
  },
  tileTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  tileSubtitle: {
    fontSize: 11,
    color: '#E5E7EB',
  },
  tipBox: {
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
    padding: 16,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  tipText: {
    fontSize: 12,
    color: '#4B5563',
  },
});

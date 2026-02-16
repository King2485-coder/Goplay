// src/screens/PlaydatesScreen.tsx

import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { usePlaydates, Playdate } from "../context/PlaydatesContext";

export default function PlaydatesScreen() {
  const navigation = useNavigation<any>();
  const { playdates } = usePlaydates();

  const renderItem = ({ item }: { item: Playdate }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PlayDetails", { playdate: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardTime}>{item.time}</Text>
      </View>
      <Text style={styles.cardMeta}>
        {item.date} · {item.location || "Location TBA"}
      </Text>
      {!!item.hostName && (
        <Text style={styles.cardHost}>Host: {item.hostName}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {playdates.length === 0 ? (
        <View className="emptyState">
          <Text style={styles.emptyTitle}>No playdates yet</Text>
          <Text style={styles.emptySubtitle}>
            Tap “Schedule playdate” on the dashboard to create your first one.
          </Text>
        </View>
      ) : (
        <FlatList
          data={playdates}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },
  listContent: {
    padding: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
  cardTime: {
    fontSize: 14,
    color: "#4B5563",
  },
  cardMeta: {
    fontSize: 13,
    color: "#6B7280",
  },
  cardHost: {
    marginTop: 4,
    fontSize: 13,
    color: "#4B5563",
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#111827",
    textAlign: "center",
    marginTop: 40,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    paddingHorizontal: 32,
  },
});

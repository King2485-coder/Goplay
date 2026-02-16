import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { PlaydatesContext } from "../context/PlaydatesContext";
import { useNavigation } from "@react-navigation/native";

export default function CreatePlaydateScreen() {
  const { addPlaydate } = useContext(PlaydatesContext);
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  function handleSave() {
    if (!title || !location || !date) return;

    addPlaydate({
      id: Date.now().toString(),
      title,
      location,
      date,
    });

    navigation.goBack(); // return to playdates list
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Playdate</Text>

      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Playdate title (example: Park meetup)"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Where will it be?"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Example: March 10, 2025"
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Playdate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  label: { marginTop: 15, color: "#555", fontSize: 14 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
  },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "600" },
});
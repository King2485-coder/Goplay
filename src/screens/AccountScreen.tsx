// src/screens/AccountScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function AccountScreen() {
  // Fake local state for safety toggles
  const [onlyFriendsCanInvite, setOnlyFriendsCanInvite] = useState(true);
  const [requireApprovalForCheckIns, setRequireApprovalForCheckIns] =
    useState(true);
  const [shareKidProfileLimited, setShareKidProfileLimited] = useState(true);
  const [locationApproximate, setLocationApproximate] = useState(true);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Parent header */}
      <View style={styles.headerRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>P</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.parentName}>Parent account</Text>
          <Text style={styles.parentEmail}>you@example.com</Text>
        </View>
      </View>

      {/* Section: Account overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account overview</Text>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Kids connected</Text>
          <Text style={styles.value}>2 kids</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Friends</Text>
          <Text style={styles.value}>5 parents</Text>
        </View>

        <View style={styles.rowBetween}>
          <Text style={styles.label}>Playdates created</Text>
          <Text style={styles.value}>8 total</Text>
        </View>
      </View>

      {/* Section: Kids summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kids</Text>

        <View style={styles.kidCard}>
          <View style={styles.kidAvatar}>
            <Text style={styles.kidAvatarText}>A</Text>
          </View>
          <View style={styles.kidInfo}>
            <Text style={styles.kidName}>Aiden · 6</Text>
            <Text style={styles.kidMeta}>Allergies: Peanuts</Text>
          </View>
        </View>

        <View style={styles.kidCard}>
          <View style={[styles.kidAvatar, { backgroundColor: "#EC4899" }]}>
            <Text style={styles.kidAvatarText}>M</Text>
          </View>
          <View style={styles.kidInfo}>
            <Text style={styles.kidName}>Maya · 4</Text>
            <Text style={styles.kidMeta}>Allergies: None</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Manage kid profiles (coming soon)</Text>
        </TouchableOpacity>
      </View>

      {/* Section: Safety settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Safety & privacy</Text>
        <Text style={styles.sectionSubtitle}>
          Control who can see your family, send invites, and view park activity.
        </Text>

        {/* Toggle 1 */}
        <View style={styles.toggleRow}>
          <View style={styles.toggleTextBlock}>
            <Text style={styles.toggleTitle}>Only friends can invite us</Text>
            <Text style={styles.toggleDescription}>
              Block playdate requests from people who aren’t on your friends list.
            </Text>
          </View>
          <Switch
            value={onlyFriendsCanInvite}
            onValueChange={setOnlyFriendsCanInvite}
          />
        </View>

        {/* Toggle 2 */}
        <View style={styles.toggleRow}>
          <View style={styles.toggleTextBlock}>
            <Text style={styles.toggleTitle}>Approve kid check-ins</Text>
            <Text style={styles.toggleDescription}>
              Get a notification when your child is checked in at a park and tap
              to approve.
            </Text>
          </View>
          <Switch
            value={requireApprovalForCheckIns}
            onValueChange={setRequireApprovalForCheckIns}
          />
        </View>

        {/* Toggle 3 */}
        <View style={styles.toggleRow}>
          <View style={styles.toggleTextBlock}>
            <Text style={styles.toggleTitle}>Limit kid profile visibility</Text>
            <Text style={styles.toggleDescription}>
              Show full kid details only to approved friends. Others see a basic
              profile.
            </Text>
          </View>
          <Switch
            value={shareKidProfileLimited}
            onValueChange={setShareKidProfileLimited}
          />
        </View>

        {/* Toggle 4 */}
        <View style={styles.toggleRow}>
          <View style={styles.toggleTextBlock}>
            <Text style={styles.toggleTitle}>Use approximate location</Text>
            <Text style={styles.toggleDescription}>
              Show your family within a general area instead of exact GPS
              location.
            </Text>
          </View>
          <Switch
            value={locationApproximate}
            onValueChange={setLocationApproximate}
          />
        </View>
      </View>

      {/* Section: App settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App settings</Text>

        <TouchableOpacity style={styles.rowBetween}>
          <Text style={styles.label}>Notifications</Text>
          <Text style={styles.value}>On</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowBetween}>
          <Text style={styles.label}>About GoPlay</Text>
          <Text style={styles.link}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowBetween}>
          <Text style={styles.label}>Legal & privacy</Text>
          <Text style={styles.link}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Sign out placeholder */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign out (placeholder)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "700",
  },
  headerText: {
    flex: 1,
  },
  parentName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  parentEmail: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 2,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 6,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 10,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  label: {
    fontSize: 13,
    color: "#4B5563",
  },
  value: {
    fontSize: 13,
    color: "#111827",
    fontWeight: "500",
  },
  link: {
    fontSize: 13,
    color: "#2563EB",
    fontWeight: "500",
  },
  kidCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  kidAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#10B981",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  kidAvatarText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  kidInfo: {
    flex: 1,
  },
  kidName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  kidMeta: {
    fontSize: 12,
    color: "#6B7280",
  },
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "500",
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  toggleTextBlock: {
    flex: 1,
    paddingRight: 12,
  },
  toggleTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111827",
  },
  toggleDescription: {
    fontSize: 11,
    color: "#6B7280",
    marginTop: 2,
  },
  signOutButton: {
    marginTop: 4,
    alignItems: "center",
  },
  signOutText: {
    fontSize: 13,
    color: "#EF4444",
    fontWeight: "500",
  },
});

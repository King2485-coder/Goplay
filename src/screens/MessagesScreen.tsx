// src/screens/MessagesScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type MessageThread = {
  id: string;
  parentName: string;
  childName: string;
  lastMessage: string;
  lastTime: string;
  unreadCount: number;
};

const initialThreads: MessageThread[] = [
  {
    id: '1',
    parentName: 'Ava’s mom',
    childName: 'Ava',
    lastMessage: 'We’ll be at the playground in 5 minutes!',
    lastTime: '3:12 PM',
    unreadCount: 2,
  },
  {
    id: '2',
    parentName: 'Liam’s dad',
    childName: 'Liam',
    lastMessage: 'Saturday at 10 works great 👍',
    lastTime: 'Yesterday',
    unreadCount: 0,
  },
  {
    id: '3',
    parentName: 'Sofia’s mom',
    childName: 'Sofia',
    lastMessage: 'Let me know about any nut allergies.',
    lastTime: 'Mon',
    unreadCount: 1,
  },
];

const MessagesScreen = () => {
  const navigation = useNavigation<any>();
  const [search, setSearch] = useState('');
  const [threads] = useState<MessageThread[]>(initialThreads);

  const filteredThreads = threads.filter(thread => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      thread.parentName.toLowerCase().includes(q) ||
      thread.childName.toLowerCase().includes(q)
    );
  });

  const openThread = (thread: MessageThread) => {
    // For now we just show a placeholder – you can later create a MessageThreadScreen
    navigation.navigate('Messages'); // keeps you on this tab
  };

  const renderThread = ({ item }: { item: MessageThread }) => (
    <TouchableOpacity style={styles.thread} onPress={() => openThread(item)}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.parentName.charAt(0).toUpperCase()}
        </Text>
      </View>
      <View style={styles.threadContent}>
        <View style={styles.threadHeader}>
          <Text style={styles.threadTitle}>{item.parentName}</Text>
          <Text style={styles.threadTime}>{item.lastTime}</Text>
        </View>
        <Text style={styles.threadSubtitle}>for {item.childName}</Text>
        <View style={styles.threadFooter}>
          <Text
            style={styles.threadLastMessage}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.lastMessage}
          </Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.subtitle}>
        Chat with other parents about upcoming playdates.
      </Text>

      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search parents or kids"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredThreads}
        keyExtractor={item => item.id}
        renderItem={renderThread}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default MessagesScreen;

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
    marginBottom: 4,
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },
  searchBox: {
    marginBottom: 8,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    fontSize: 14,
  },
  listContent: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  thread: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  threadContent: {
    flex: 1,
  },
  threadHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  threadTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  threadTime: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  threadSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
    marginBottom: 4,
  },
  threadFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  threadLastMessage: {
    flex: 1,
    fontSize: 13,
    color: '#4B5563',
    marginRight: 8,
  },
  unreadBadge: {
    minWidth: 20,
    borderRadius: 10,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginLeft: 52,
  },
});

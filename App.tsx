// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// ---- Context ----
import { PlaydatesProvider } from './src/context/PlaydatesContext';

// ---- Screens ----
import HomeScreen from './src/screens/HomeScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import PlaydatesScreen from './src/screens/PlaydatesScreen';
import MapScreen from './src/screens/MapScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AccountScreen from './src/screens/AccountScreen';
import SchedulePlaydateScreen from './src/screens/SchedulePlaydateScreen';
import PlayDetailsScreen from './src/screens/PlayDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ---------------------------------------------------
//  Bottom tab navigator (Dashboard / Playdates / Map / Messages / Account)
// ---------------------------------------------------
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
      />

      <Tab.Screen
        name="Playdates"
        component={PlaydatesScreen}
      />

      <Tab.Screen
        name="Map"
        component={MapScreen}
      />

      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

// ---------------------------------------------------
//  Root stack navigator
//  Home  ➜  MainTabs  ➜  SchedulePlaydate / PlayDetails
// ---------------------------------------------------
export default function App() {
  return (
    <PlaydatesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Landing screen with the big "GoPlay / Enter Dashboard" button */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />

          {/* Main tabbed app (Dashboard, Playdates, Map, Messages, Account) */}
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />

          {/* Full schedule playdate flow */}
          <Stack.Screen
            name="SchedulePlaydate"
            component={SchedulePlaydateScreen}
            options={{ title: 'Schedule playdate' }}
          />

          {/* Details for a specific playdate */}
          <Stack.Screen
            name="PlayDetails"
            component={PlayDetailsScreen}
            options={{ title: 'Playdate details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PlaydatesProvider>
  );
}

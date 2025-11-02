// app/(home)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeTabsLayout() {
  return (
    <Tabs
      initialRouteName="tab1"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      {/* ✅ TAB 1 */}
      <Tabs.Screen
        name="tab1"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ TAB 2 */}
      <Tabs.Screen
        name="tab2"
        options={{
          title: 'Productos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ TAB 3 */}
      <Tabs.Screen
        name="tab3"
        options={{
          title: 'Canchas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" size={size} color={color} />
          ),
        }}
      />

      {/* 🚫 Hide index.tsx so it does NOT appear as a tab */}
      <Tabs.Screen
        name="index"
        options={{ href: null }}
      />
    </Tabs>
  );
}

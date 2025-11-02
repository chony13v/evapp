// app/_layout.tsx
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { useAuthStore } from '@/presentation/auth/store/useAuthStore';

// Keep splash visible until assets load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');
  const router = useRouter();
  const segments = useSegments();

  // Fonts
  const [loaded] = useFonts({
    KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  });

  // Read *whatever* your auth store exposes and coerce to a boolean safely
  // Tip: if you DO have a canonical flag (e.g., state.isAuthenticated), replace this with that line.
  const authState = useAuthStore(); // typed to your AuthState
  const isAuthenticated = useMemo(() => {
    // cast to any to probe optional fields without TS errors
    const a = authState as unknown as Record<string, unknown>;
    return Boolean(
      a.isAuthenticated ?? a.loggedIn ?? a.user ?? a.token ?? a.session ?? false
    );
  }, [authState]);

  // Hide splash when ready
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Route guard
  useEffect(() => {
    if (!loaded) return; // wait for fonts/splash
    const inAuthGroup = segments[0] === 'auth';

    if (!isAuthenticated && !inAuthGroup) {
      // Not signed in → send to login
      router.replace('/auth/login');
    } else if (isAuthenticated && inAuthGroup) {
      // Signed in but on /auth → send to home tabs (tab1 as entry)
      router.replace('/(home)/tab1');
    }
  }, [segments, isAuthenticated, loaded, router]);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* Renders current route tree (auth or home) */}
        <Slot />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

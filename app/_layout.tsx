import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/theme/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    KanitRegular: require('@/assets/fonts/Kanit-Regular.ttf'),
    KanitBold: require('@/assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('@/assets/fonts/Kanit-Thin.ttf')
  });
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
      screenOptions={{
        headerShown: false,
      }}
      >
        
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}


// app/(home)/tab3/index.tsx
import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { globalStyles } from '@/presentation/theme/theme';

export default function Tab3Screen() {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>

      <ThemedText style={{ fontFamily: 'KanitBold', color: primary }}>
        Canchas (Tab 3)
      </ThemedText>

      <ThemedText style={{ fontFamily: 'KanitRegular', marginTop: 8 }}>
        Encuentra y administra canchas deportivas
      </ThemedText>

      {/* Button to go to canchas screen */}
      <Pressable
        style={[globalStyles.primaryButton, { marginTop: 20 }]}
        onPress={() => router.push('/(home)/tab3')}
      >
        <ThemedText style={globalStyles.buttonText}>
          Ver Canchas
        </ThemedText>
      </Pressable>

    </View>
  );
}

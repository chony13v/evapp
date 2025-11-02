// app/(home)/tab2/index.tsx
import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { globalStyles } from '@/presentation/theme/theme';

export default function Tab2Screen() {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>

      <ThemedText style={{ fontFamily: 'KanitBold', color: primary }}>
        Productos (Tab 2)
      </ThemedText>

      <ThemedText style={{ fontFamily: 'KanitRegular', marginTop: 8 }}>
        Lista de productos disponibles
      </ThemedText>

      {/* Button to go to Productos details */}
      <Pressable
        style={[globalStyles.primaryButton, { marginTop: 20 }]}
        onPress={() => router.push('/(home)/tab2')}
      >
        <ThemedText style={globalStyles.buttonText}>
          Ver Productos
        </ThemedText>
      </Pressable>

    </View>
  );
}

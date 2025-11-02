import { View, Pressable } from 'react-native';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { globalStyles } from '@/presentation/theme/theme';
import { router } from 'expo-router';

export default function Tab1Screen() {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>

      {/* Título */}
      <ThemedText style={{ fontFamily: 'KanitBold', color: primary }}>
        HomeScreen (Tab 1)
      </ThemedText>

      <ThemedText style={{ fontFamily: 'KanitRegular', marginTop: 8 }}>
        Aquí comienza tu Tab 1
      </ThemedText>

      {/* Botón — Navega dentro de Tab1 usando stack interno */}
      <Pressable
        style={[globalStyles.primaryButton, { marginTop: 20 }]}
        onPress={() => router.push('/')}
      >
        <ThemedText style={globalStyles.buttonText}>
          Ir a Detalle
        </ThemedText>
      </Pressable>

    </View>
  );
}

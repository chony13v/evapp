import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/presentation/theme/components/themed-text';

export default function InicioScreen() {
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>
      
      {/* Flecha back */}
      <Pressable onPress={() => router.back()} style={{ marginBottom: 16 }}>
        <ThemedText style={{ fontSize: 28 }}>←</ThemedText>
      </Pressable>

      <ThemedText style={{ fontFamily: 'KanitBold' }}>
        Pantalla Detalle dentro de Tab 1
      </ThemedText>
    </View>
  );
}

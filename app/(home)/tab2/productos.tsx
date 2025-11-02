// app/(home)/tab2/Productos.tsx
import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/presentation/theme/components/themed-text';

export default function ProductosScreen() {
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>

      {/* Back arrow */}
      <Pressable onPress={() => router.back()} style={{ marginBottom: 16 }}>
        <ThemedText style={{ fontSize: 28 }}>←</ThemedText>
      </Pressable>

      <ThemedText style={{ fontFamily: 'KanitBold' }}>
        Lista de Productos
      </ThemedText>

      <ThemedText style={{ fontFamily: 'KanitRegular', marginTop: 12 }}>
        Aquí puedes mostrar cards, categorías o productos reales.
      </ThemedText>

    </View>
  );
}

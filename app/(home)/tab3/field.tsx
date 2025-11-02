// app/(home)/tab3/canchas.tsx
import { View, Pressable } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/presentation/theme/components/themed-text';

export default function FieldScreen() {
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>

      {/* Back arrow */}
      <Pressable onPress={() => router.back()} style={{ marginBottom: 16 }}>
        <ThemedText style={{ fontSize: 28 }}>←</ThemedText>
      </Pressable>

      <ThemedText style={{ fontFamily: 'KanitBold' }}>
        Canchas disponibles
      </ThemedText>

      <ThemedText style={{ fontFamily: 'KanitRegular', marginTop: 12 }}>
        Aquí puedes mostrar canchas, ubicaciones, horarios o categorías.
      </ThemedText>

    </View>
  );
}

import { Stack } from 'expo-router';

export default function ChantierLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, title: 'Chantier' }} />
      <Stack.Screen name="consulter_chantier" options={{ title: 'Consulter Chantier' }} />
      <Stack.Screen name="creer_chantier" options={{ title: 'Créer Chantier' }} />
    </Stack>
  );
}

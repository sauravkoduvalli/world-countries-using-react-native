import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index" >
      <Stack.Screen name="index" options={{title: 'Home', headerShown: true }} />
      <Stack.Screen name="details" options={{title: 'Details', headerShown: true }} />
      <Stack.Screen name="search" options={{title: 'Search', headerShown: true }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

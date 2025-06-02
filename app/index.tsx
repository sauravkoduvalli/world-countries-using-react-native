import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "black" }}>Home Screen</Text>
      <Button
        title="Goto details"
        onPress={() => router.navigate("/details")}
      />
      <Button title="Goto search" onPress={() => router.navigate("/search")} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

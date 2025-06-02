import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "black" }}>Details Screen</Text>
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

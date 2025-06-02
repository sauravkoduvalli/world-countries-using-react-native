import { StyleSheet, Text, View } from "react-native";

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: "black" }}>Search Screen</Text>
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

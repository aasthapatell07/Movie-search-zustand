import { View, Text, StyleSheet } from "react-native";

export default function RecentlyViewed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕒 Recently Viewed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
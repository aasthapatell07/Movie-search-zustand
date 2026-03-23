import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import useMovieStore from "../../store/movieStore";

export default function FavoritesScreen() {
  const favorites = useMovieStore((state) => state.favorites);

  return (
    <View style={styles.container}>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.title}>{item.Title}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  card: {
    flexDirection: "row",
    marginBottom: 10,
  },

  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },

  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
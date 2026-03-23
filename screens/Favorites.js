import { FlatList, StyleSheet, Text, View } from "react-native";
import useMovieStore from "../store/movieStore";
import MovieCard from "../components/MovieCard";

export default function Favorites() {

  const favorites = useMovieStore((state) => state.favorites);

  // Show message if no favorites
  if (favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No favorite movies yet ❤️
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <MovieCard movie={item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#222",
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
  },

  poster: {
    width: "100%",
    height: 210,
    borderRadius: 12,
  },

  title: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "600",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  emptyText: {
    fontSize: 16,
    color: "gray",
  },
});
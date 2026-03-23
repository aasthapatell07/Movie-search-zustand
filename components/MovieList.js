// import { FlatList } from "react-native";
// import useMovieStore from "../store/movieStore";
// import MovieCard from "./MovieCard";

// export default function MovieList() {
//   const movies = useMovieStore((state) => state.searchResults);

//   return (
//     <FlatList
//       data={movies}
//       keyExtractor={(item) => item.imdbID}
//       renderItem={({ item }) => <MovieCard movie={item} />}
//     />
//   );
// }
import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import useMovieStore from "../store/movieStore";
import MovieCard from "./MovieCard";

export default function MovieList() {

  const movies = useMovieStore((state) => state.searchResults);
  const { width } = useWindowDimensions();

  // responsive grid
  const numColumns = width > 900 ? 5 : width > 600 ? 3 : 2;

  return (
    <FlatList
      data={movies}
      key={numColumns}
      numColumns={numColumns}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <MovieCard movie={item} grid />
      )}
      contentContainerStyle={styles.container}
      style={styles.list}   // 👈 add this
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  list: {
    scrollbarWidth: "none", // Firefox
  },
});
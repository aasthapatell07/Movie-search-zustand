import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HeroBanner() {

  const router = useRouter();

  const movie = {
    title: "Avengers: Endgame",
    plot: "After the devastating events of Avengers: Infinity War, the universe is in ruins.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDQ0OTc0OF5BMl5BanBnXkFtZTgwMzI1NjQ2NzM@._V1_.jpg",
    imdbID: "tt4154796"
  };

  return (
    <ImageBackground
      source={{ uri: movie.poster }}
      style={styles.banner}
    >
      <View style={styles.overlay}>

        <Text style={styles.title}>
          {movie.title}
        </Text>

        <Text style={styles.plot} numberOfLines={3}>
          {movie.plot}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push(`/movie/${movie.imdbID}`)}
        >
          <Text style={styles.buttonText}>
            ▶ Watch Now
          </Text>
        </Pressable>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  banner: {
    height: 420,
    justifyContent: "flex-end",
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 20,
  },

  title: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
  },

  plot: {
    color: "white",
    marginVertical: 10,
  },

  button: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 6,
    width: 140,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

});
// // import {
// //   View,
// //   Image,
// //   Text,
// //   StyleSheet,
// //   Pressable,
// //   Animated
// // } from "react-native";
// // import { useRef } from "react";
// // import useMovieStore from "../store/movieStore";

// // export default function MovieCard({ movie }) {

// //   const scale = useRef(new Animated.Value(1)).current;
// //   const { favorites, addFavorite } = useMovieStore();

// //   const isFav = favorites.some(
// //     (m) => m.imdbID === movie.imdbID
// //   );

// //   const animateIn = () => {
// //     Animated.spring(scale, {
// //       toValue: 1.02,
// //       useNativeDriver: true
// //     }).start();
// //   };

// //   const animateOut = () => {
// //     Animated.spring(scale, {
// //       toValue: 1,
// //       useNativeDriver: true
// //     }).start();
// //   };

// //   return (
// //     <Pressable
// //       onHoverIn={animateIn}   // desktop
// //       onHoverOut={animateOut} // desktop
// //       onPressIn={animateIn}   // mobile
// //       onPressOut={animateOut} // mobile
// //     >
// //       <Animated.View
// //         style={[
// //           styles.card,
// //           { transform: [{ scale }] }
// //         ]}
// //       >

// //         <Image
// //           source={{ uri: movie.Poster }}
// //           style={styles.poster}
// //         />

// //         <View style={styles.info}>
// //           <Text style={styles.title}>
// //             {movie.Title}
// //           </Text>
// //         </View>

// //         <Text
// //           style={styles.heart}
// //           onPress={() => addFavorite(movie)}
// //         >
// //           {isFav ? "❤️" : "🤍"}
// //         </Text>

// //       </Animated.View>
// //     </Pressable>
// //   );
// // }

// // const styles = StyleSheet.create({

// //   card: {
// //     flexDirection: "row",
// //     backgroundColor: "white",
// //     marginVertical: 6,
// //     marginHorizontal: 10,
// //     padding: 10,
// //     borderRadius: 12,
// //     alignItems: "center",
// //   },

// //   poster: {
// //     width: 70,
// //     height: 100,
// //     borderRadius: 8,
// //   },

// //   info: {
// //     flex: 1,
// //     marginLeft: 12,
// //   },

// //   title: {
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },

// //   heart: {
// //     fontSize: 22,
// //   },
// // });

// import {
//   View,
//   Image,
//   Text,
//   StyleSheet,
//   Pressable,
//   Animated
// } from "react-native";
// import { useRef } from "react";
// import { useRouter } from "expo-router";
// import useMovieStore from "../store/movieStore";

// export default function MovieCard({ movie }) {

//   const router = useRouter();
//   const scale = useRef(new Animated.Value(1)).current;

//   const { favorites, addFavorite } = useMovieStore();

//   const isFav = favorites.some(
//     (m) => m.imdbID === movie.imdbID
//   );

//   const animateIn = () => {
//     Animated.spring(scale, {
//       toValue: 1.02,
//       useNativeDriver: true
//     }).start();
//   };

//   const animateOut = () => {
//     Animated.spring(scale, {
//       toValue: 1,
//       useNativeDriver: true
//     }).start();
//   };

//   return (
//     <Pressable
//       onHoverIn={animateIn}
//       onHoverOut={animateOut}
//       onPressIn={animateIn}
//       onPressOut={animateOut}
//       onPress={() => router.push(`/movie/${movie.imdbID}`)}
//     >
//       <Animated.View
//         style={[
//           styles.card,
//           { transform: [{ scale }] }
//         ]}
//       >

//         <Image
//           source={{
//             uri:
//               movie.Poster !== "N/A"
//                 ? movie.Poster
//                 : "https://via.placeholder.com/150"
//           }}
//           style={styles.poster}
//         />

//         <View style={styles.info}>
//           <Text
//             numberOfLines={2}
//             style={styles.title}
//           >
//             {movie.Title}
//           </Text>

//           <Text style={styles.year}>
//             {movie.Year}
//           </Text>
//         </View>

//         <Text
//           style={styles.heart}
//           onPress={(e) => {
//             e.stopPropagation();
//             addFavorite(movie);
//           }}
//         >
//           {isFav ? "❤️" : "🤍"}
//         </Text>

//       </Animated.View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({

//   card: {
//     flexDirection: "row",
//     backgroundColor: "white",
//     marginVertical: 8,
//     marginHorizontal: 12,
//     padding: 10,
//     borderRadius: 14,
//     alignItems: "center",

//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },

//     elevation: 4,
//   },

//   poster: {
//     width: 70,
//     height: 100,
//     borderRadius: 8,
//   },

//   info: {
//     flex: 1,
//     marginLeft: 12,
//   },

//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   year: {
//     marginTop: 4,
//     color: "#666",
//   },

//   heart: {
//     fontSize: 22,
//   },

// });
import {
  View,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Animated
} from "react-native";
import { useRef } from "react";
import { useRouter } from "expo-router";
import useMovieStore from "../store/movieStore";

export default function MovieCard({ movie, grid }) {

  const router = useRouter();
  const scale = useRef(new Animated.Value(1)).current;

  const { favorites, addFavorite } = useMovieStore();

  const isFav = favorites.some(
    (m) => m.imdbID === movie.imdbID
  );

  const animateIn = () => {
    Animated.spring(scale, {
      toValue: grid ? 1.05 : 1.01,
      useNativeDriver: true
    }).start();
  };

  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true
    }).start();
  };

  return (
    <Pressable
      onHoverIn={animateIn}
      onHoverOut={animateOut}
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={() => router.push(`/movie/${movie.imdbID}`)}
      style={grid && styles.gridContainer}
    >
      <Animated.View
        style={[
          grid ? styles.gridCard : styles.card,
          { transform: [{ scale }] }
        ]}
      >

        <Image
          source={{
            uri:
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/150"
          }}
          style={grid ? styles.gridPoster : styles.poster}
        />

        {!grid && (
          <View style={styles.info}>
            <Text numberOfLines={2} style={styles.title}>
              {movie.Title}
            </Text>

            <Text style={styles.year}>
              {movie.Year}
            </Text>
          </View>
        )}

        {grid && (
          <Text numberOfLines={2} style={styles.gridTitle}>
            {movie.Title}
          </Text>
        )}

        <Text
          style={styles.heart}
          onPress={(e) => {
            e.stopPropagation();
            addFavorite(movie);
          }}
        >
          {isFav ? "❤️" : "🤍"}
        </Text>

      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  /* LIST STYLE (OLD) */

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 14,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    elevation: 4,
  },

  poster: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  year: {
    marginTop: 4,
    color: "#666",
  },

  /* GRID STYLE (NETFLIX) */

  gridContainer: {
    flex: 1,
    margin: 8,
  },

  gridCard: {
    alignItems: "center",
  },

  gridPoster: {
    width: "100%",
    height: 220,
    borderRadius: 10,
  },

  gridTitle: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  heart: {
    position: "absolute",
    top: 6,
    right: 6,
    fontSize: 20,
  },

});
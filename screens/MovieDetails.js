// // import { useEffect, useState } from "react";
// // import { View, Text, Image, StyleSheet } from "react-native";
// // import useMovieStore from "../store/movieStore";

// // export default function MovieDetails() {
// //   const selectedMovie = useMovieStore((state) => state.selectedMovie);
// //   const [details, setDetails] = useState(null);

// //   useEffect(() => {
// //     if (!selectedMovie) return;

// //     fetch(
// //       `https://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=d467653e`
// //     )
// //       .then((res) => res.json())
// //       .then((data) => setDetails(data));
// //   }, [selectedMovie]);

// //   if (!details) return null;

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         source={{ uri: details.Poster }}
// //         style={styles.poster}
// //       />

// //       <Text style={styles.title}>{details.Title}</Text>

// //       <Text style={styles.rating}>
// //         ⭐ Rating: {details.imdbRating}
// //       </Text>

// //       <Text style={styles.plot}>
// //         {details.Plot}
// //       </Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 15,
// //     backgroundColor: "white",
// //   },

// //   poster: {
// //     width: "100%",
// //     height: 350,
// //     borderRadius: 10,
// //   },

// //   title: {
// //     fontSize: 22,
// //     fontWeight: "bold",
// //     marginTop: 10,
// //   },

// //   rating: {
// //     fontSize: 16,
// //     marginVertical: 5,
// //   },

// //   plot: {
// //     fontSize: 14,
// //     color: "#444",
// //   },
// // });
// import { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   useWindowDimensions,
// } from "react-native";
// import useMovieStore from "../store/movieStore";

// export default function MovieDetails() {
//   const selectedMovie = useMovieStore((state) => state.selectedMovie);
//   const [details, setDetails] = useState(null);

//   const { width } = useWindowDimensions();
//   const isDesktop = width > 900;

//   useEffect(() => {
//     if (!selectedMovie) return;

//     fetch(
//       `https://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=d467653e`
//     )
//       .then((res) => res.json())
//       .then((data) => setDetails(data));
//   }, [selectedMovie]);

//   if (!details) return null;

//   return (
//     <ScrollView contentContainerStyle={styles.page}>
//       <View
//         style={[
//           styles.container,
//           isDesktop && styles.desktopContainer,
//         ]}
//       >
//         {/* Poster */}
//         <Image
//           source={{ uri: details.Poster }}
//           style={[
//             styles.poster,
//             isDesktop && styles.desktopPoster,
//           ]}
//         />

//         {/* Movie Info */}
//         <View
//           style={[
//             styles.infoContainer,
//             isDesktop && styles.desktopInfo,
//           ]}
//         >
//           <Text style={styles.title}>{details.Title}</Text>

//           <Text style={styles.rating}>
//             ⭐ IMDb Rating: {details.imdbRating}
//           </Text>

//           <Text style={styles.info}>
//             {details.Year} • {details.Genre}
//           </Text>

//           <Text style={styles.info}>
//             Director: {details.Director}
//           </Text>

//           <Text style={styles.info}>
//             Actors: {details.Actors}
//           </Text>

//           <Text style={styles.plot}>{details.Plot}</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   page: {
//     flexGrow: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 20,
//     alignItems: "center",
//   },

//   container: {
//     width: "100%",
//     maxWidth: 900,   // prevents stretching on laptop
//   },

//   poster: {
//     width: "100%",
//     height: 400,     // fixed banner height
//     borderRadius: 12,
//     resizeMode: "cover",
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginTop: 15,
//   },

//   rating: {
//     fontSize: 18,
//     marginTop: 8,
//     color: "#f5a623",
//     fontWeight: "600",
//   },

//   plot: {
//     fontSize: 16,
//     color: "#333",
//     marginTop: 15,
//     lineHeight: 22,
//   },
// });
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import useMovieStore from "../store/movieStore";

export default function MovieDetails() {
  const selectedMovie = useMovieStore((state) => state.selectedMovie);
  const [details, setDetails] = useState(null);

  const { width } = useWindowDimensions();
  const isDesktop = width > 800;

  useEffect(() => {
    if (!selectedMovie) return;

    fetch(
      `https://www.omdbapi.com/?i=${selectedMovie.imdbID}&apikey=d467653e`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [selectedMovie]);

  if (!details) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View
        style={[
          styles.container,
          isDesktop && styles.desktopContainer,
        ]}
      >
        {/* Poster */}
        <Image
          source={{
            uri:
              details.Poster !== "N/A"
                ? details.Poster
                : "https://via.placeholder.com/300x450",
          }}
          style={[
            styles.poster,
            isDesktop && styles.desktopPoster,
          ]}
        />

        {/* Movie Details */}
        <View
          style={[
            styles.infoContainer,
            isDesktop && styles.desktopInfo,
          ]}
        >
          <Text style={styles.title}>{details.Title}</Text>

          <Text style={styles.rating}>
            ⭐ IMDb Rating: {details.imdbRating}
          </Text>

          <Text style={styles.info}>
            {details.Year} • {details.Genre}
          </Text>

          <Text style={styles.info}>
            Director: {details.Director}
          </Text>

          <Text style={styles.info}>
            Actors: {details.Actors}
          </Text>

          <Text style={styles.plot}>{details.Plot}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },

  container: {
    width: "100%",
    maxWidth: 1000,
  },

  desktopContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
  },

  poster: {
    width: "100%",
    height: 400,
    borderRadius: 12,
    resizeMode: "contain",
  },

  desktopPoster: {
    width: 300,
    height: 450,
  },

  infoContainer: {
    marginTop: 15,
  },

  desktopInfo: {
    flex: 1,
    marginTop: 0,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  rating: {
    fontSize: 18,
    marginTop: 10,
    color: "#f5a623",
    fontWeight: "600",
  },

  info: {
    fontSize: 15,
    color: "#555",
    marginTop: 6,
  },

  plot: {
    fontSize: 16,
    color: "#333",
    marginTop: 15,
    lineHeight: 22,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 
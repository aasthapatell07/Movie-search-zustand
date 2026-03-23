// // import { Stack, useLocalSearchParams } from "expo-router";
// // import { View, Text, Image, StyleSheet } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import { useEffect, useState } from "react";

// // interface Movie {
// //   Title: string;
// //   Poster: string;
// //   imdbRating: string;
// //   Plot: string;
// // }

// // export default function MovieDetails() {
// //   const { id } = useLocalSearchParams();
// //   const [movie, setMovie] = useState<Movie | null>(null);

// //   useEffect(() => {
// //     fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
// //       .then((res) => res.json())
// //       .then(setMovie);
// //   }, []);

// //   if (!movie) return null;

// //   return (
// //     <>
// //       <Stack.Screen options={{ title: movie.Title }} />

// //       <SafeAreaView style={styles.container}>
// //         <Image source={{ uri: movie.Poster }} style={styles.poster} />

// //         <Text style={styles.title}>{movie.Title}</Text>

// //         <Text>⭐ Rating: {movie.imdbRating}</Text>

// //         <Text style={styles.plot}>{movie.Plot}</Text>
// //       </SafeAreaView>
// //     </>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 15,
// //     backgroundColor: "white",
// //     paddingTop: 30,
// //    paddingHorizontal: 15,
// //   },

// //   poster: {
// //     width: "100%",
// //     height: 500,
// //     borderRadius: 10,
// //   },

// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     marginVertical: 10,
// //   },

// //   plot: {
// //     marginTop: 10,
// //     color: "#444",
// //   },
// // });
// import { Stack, useLocalSearchParams, useRouter } from "expo-router";
// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   ScrollView,
//   Pressable
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useEffect, useState } from "react";

// interface Movie {
//   Title: string;
//   Poster: string;
//   imdbRating: string;
//   Plot: string;
//   Year: string;
//   Genre: string;
//   Rated: string;
//   Actors: string;
//   Director: string;
//   Runtime: string;
// }

// export default function MovieDetails() {
//   const { id } = useLocalSearchParams();
//   const router = useRouter();

//   const [movie, setMovie] = useState<Movie | null>(null);

//   useEffect(() => {
//     fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
//       .then((res) => res.json())
//       .then(setMovie);
//   }, []);

//   if (!movie) return null;

//   return (
//     <>
//       <Stack.Screen options={{ headerShown: false }} />

//       <SafeAreaView style={styles.container}>

//         {/* Banner Poster */}
//         <ImageBackground
//           source={{ uri: movie.Poster }}
//           style={styles.banner}
//         >
//           <Pressable
//             style={styles.close}
//             onPress={() => router.back()}
//           >
//             <Text style={styles.closeText}>✕</Text>
//           </Pressable>

//           <View style={styles.overlay}>
//             <Text style={styles.title}>{movie.Title}</Text>

//             <View style={styles.tags}>
//               <Text style={styles.tag}>{movie.Year}</Text>
//               <Text style={styles.tag}>{movie.Rated}</Text>
//               <Text style={styles.tag}>{movie.Genre}</Text>
//             </View>

//             <Text style={styles.rating}>
//               ⭐ IMDb {movie.imdbRating}
//             </Text>
//           </View>
//         </ImageBackground>

//         {/* Movie Details */}
//         <ScrollView style={styles.info}>

//           <Text style={styles.plot}>
//             {movie.Plot}
//           </Text>

//           <Text style={styles.meta}>
//             🎬 Director: {movie.Director}
//           </Text>

//           <Text style={styles.meta}>
//             🎭 Actors: {movie.Actors}
//           </Text>

//           <Text style={styles.meta}>
//             ⏱ Runtime: {movie.Runtime}
//           </Text>

//         </ScrollView>

//       </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },

//   banner: {
//     height: 420,
//     justifyContent: "flex-end",
//   },

//   overlay: {
//     backgroundColor: "rgba(0,0,0,0.6)",
//     padding: 20,
//   },

//   close: {
//     position: "absolute",
//     top: 20,
//     right: 20,
//     zIndex: 10,
//   },

//   closeText: {
//     color: "white",
//     fontSize: 26,
//   },

//   title: {
//     color: "white",
//     fontSize: 28,
//     fontWeight: "bold",
//   },

//   tags: {
//     flexDirection: "row",
//     marginTop: 8,
//   },

//   tag: {
//     backgroundColor: "#444",
//     color: "white",
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 5,
//     marginRight: 6,
//     fontSize: 12,
//   },

//   rating: {
//     color: "#FFD700",
//     marginTop: 8,
//     fontSize: 16,
//   },

//   info: {
//     padding: 20,
//   },

//   plot: {
//     color: "white",
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 20,
//   },

//   meta: {
//     color: "#ccc",
//     marginBottom: 8,
//     fontSize: 14,
//   }

// });
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";

interface Movie {
  Title: string;
  Poster: string;
  imdbRating: string;
  Plot: string;
  Year: string;
  Genre: string;
  Rated: string;
  Actors: string;
  Director: string;
  Runtime: string;
}

export default function MovieDetails() {

  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
      .then((res) => res.json())
      .then(setMovie);
  }, []);

  if (!movie) return null;

  const genres = movie.Genre ? movie.Genre.split(",") : [];

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>

        {/* Banner Poster */}
        <ImageBackground
          source={{ uri: movie.Poster }}
          style={styles.banner}
        >

          <Pressable
            style={styles.close}
            onPress={() => router.back()}
          >
            <Text style={styles.closeText}>✕</Text>
          </Pressable>

          <View style={styles.overlay}>

            <Text style={styles.title}>{movie.Title}</Text>

            {/* Tags */}
            <View style={styles.tags}>
              <Text style={styles.tag}>{movie.Year}</Text>
              <Text style={styles.tag}>{movie.Rated}</Text>
              <Text style={styles.tag}>{movie.Runtime}</Text>
            </View>

            {/* Genre badges */}
            <View style={styles.genreRow}>
              {genres.map((g, i) => (
                <Text key={i} style={styles.genre}>
                  {g.trim()}
                </Text>
              ))}
            </View>

            <Text style={styles.rating}>
              ⭐ IMDb {movie.imdbRating}
            </Text>

          </View>

        </ImageBackground>

        {/* Movie Details */}
        <ScrollView style={styles.info}>

          <Text style={styles.sectionTitle}>
            Story
          </Text>

          <Text style={styles.plot}>
            {movie.Plot}
          </Text>

          <Text style={styles.meta}>
            🎬 Director: {movie.Director}
          </Text>

          <Text style={styles.meta}>
            🎭 Actors: {movie.Actors}
          </Text>

          <Text style={styles.meta}>
            ⏱ Runtime: {movie.Runtime}
          </Text>

        </ScrollView>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"black"
  },

  banner:{
    height:420,
    justifyContent:"flex-end"
  },

  overlay:{
    backgroundColor:"rgba(0,0,0,0.6)",
    padding:20
  },

  close:{
    position:"absolute",
    top:20,
    right:20,
    zIndex:10
  },

  closeText:{
    color:"white",
    fontSize:26
  },

  title:{
    color:"white",
    fontSize:28,
    fontWeight:"bold"
  },

  tags:{
    flexDirection:"row",
    marginTop:8
  },

  tag:{
    backgroundColor:"#444",
    color:"white",
    paddingHorizontal:8,
    paddingVertical:4,
    borderRadius:5,
    marginRight:6,
    fontSize:12
  },

  genreRow:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:10
  },

  genre:{
    backgroundColor:"#222",
    color:"white",
    paddingHorizontal:10,
    paddingVertical:4,
    borderRadius:20,
    marginRight:6,
    marginBottom:6,
    fontSize:12
  },

  rating:{
    color:"#FFD700",
    marginTop:10,
    fontSize:16
  },

  info:{
    padding:20
  },

  sectionTitle:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
    marginBottom:10
  },

  plot:{
    color:"white",
    fontSize:16,
    lineHeight:22,
    marginBottom:20
  },

  meta:{
    color:"#ccc",
    marginBottom:8,
    fontSize:14
  }

});
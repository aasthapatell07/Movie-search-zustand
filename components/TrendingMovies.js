// // // // // import { useEffect, useState } from "react";
// // // // // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // // // // export default function TrendingMovies() {

// // // // //   const [movies, setMovies] = useState([]);

// // // // //   useEffect(() => {

// // // // //     const keywords = ["marvel", "batman", "avengers", "salman", "shahrukh", "bollywood"];

// // // // //     Promise.all(
// // // // //       keywords.map((word) =>
// // // // //         fetch(`https://www.omdbapi.com/?s=${word}&apikey=d467653e`)
// // // // //           .then((res) => res.json())
// // // // //       )
// // // // //     ).then((results) => {

// // // // //       let combined = [];

// // // // //       results.forEach((data) => {
// // // // //         if (data.Search) combined = [...combined, ...data.Search];
// // // // //       });

// // // // //       setMovies(combined.slice(0, 12));
// // // // //     });

// // // // //   }, []);

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <Text style={styles.heading}>🔥 Trending Movies</Text>

// // // // //       <FlatList
// // // // //         horizontal
// // // // //         data={movies}
// // // // //         keyExtractor={(item) => item.imdbID}
// // // // //         showsHorizontalScrollIndicator={false}
// // // // //         renderItem={({ item }) => (
// // // // //           <View style={styles.card}>
// // // // //             <Image source={{ uri: item.Poster }} style={styles.poster} />
// // // // //             <Text numberOfLines={1}>{item.Title}</Text>
// // // // //           </View>
// // // // //         )}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // }

// // // // // const styles = StyleSheet.create({
// // // // //   container:{marginVertical:15},
// // // // //   heading:{fontSize:20,fontWeight:"bold",marginLeft:10},
// // // // //   card:{width:120,marginHorizontal:8},
// // // // //   poster:{width:"100%",height:170,borderRadius:8}
// // // // // });\
// // // // import { useEffect, useState } from "react";
// // // // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // // // export default function TrendingMovies() {

// // // //   const [movies, setMovies] = useState([]);

// // // //   useEffect(() => {
// // // //     fetch("https://www.omdbapi.com/?s=bollywood&apikey=d467653e")
// // // //       .then((res) => res.json())
// // // //       .then((data) => {
// // // //         if (data.Search) {
// // // //           setMovies(data.Search);
// // // //         }
// // // //       })
// // // //       .catch((err) => console.log(err));
// // // //   }, []);

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <Text style={styles.heading}>🔥 Trending Movies</Text>

// // // //       <FlatList
// // // //         horizontal
// // // //         data={movies}
// // // //         keyExtractor={(item) => item.imdbID}
// // // //         renderItem={({ item }) => (

// // // //           <View style={styles.card}>
// // // //             <Image
// // // //               source={{
// // // //                 uri:
// // // //                   item.Poster !== "N/A"
// // // //                     ? item.Poster
// // // //                     : "https://via.placeholder.com/120x170"
// // // //               }}
// // // //               style={styles.poster}
// // // //             />
// // // //             <Text numberOfLines={1}>{item.Title}</Text>
// // // //           </View>

// // // //         )}
// // // //       />

// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //   container: { marginVertical: 15 },
// // // //   heading: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },
// // // //   card: { width: 120, marginHorizontal: 8 },
// // // //   poster: { width: "100%", height: 170, borderRadius: 8 },
// // // // });
// // // import { useEffect, useState } from "react";
// // // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // // export default function TrendingMovies() {

// // //   const [movies, setMovies] = useState([]);

// // //   useEffect(() => {

// // //     // const keywords = ["bollywood", "salman", "shahrukh", "marvel", "batman"];
// // //     const keywords = [
// // //   "bollywood",
// // //   "shahrukh",
// // //   "salman",
// // //   "aamir",
// // //   "marvel",
// // //   "batman",
// // //   "avengers",
// // //   "hollywood"
// // // ];

// // //     Promise.all(
// // //       keywords.map((word) =>
// // //         fetch(`https://www.omdbapi.com/?s=${word}&apikey=d467653e`)
// // //           .then((res) => res.json())
// // //       )
// // //     ).then((results) => {

// // //       let combined = [];

// // //       results.forEach((data) => {
// // //         if (data.Search) {
// // //           combined = [...combined, ...data.Search];
// // //         }
// // //       });

// // //       // remove duplicates
// // //       const unique = Array.from(
// // //         new Map(combined.map((m) => [m.imdbID, m])).values()
// // //       );

// // //       setMovies(unique.slice(0, 15));
// // //     });

// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.heading}>🔥 Trending Movies</Text>

// // //       <FlatList
// // //         horizontal
// // //         data={movies}
// // //         keyExtractor={(item) => item.imdbID}
// // //         showsHorizontalScrollIndicator={false}
// // //         renderItem={({ item }) => (
// // //           <View style={styles.card}>
// // //             <Image
// // //               source={{
// // //                 uri:
// // //                   item.Poster !== "N/A"
// // //                     ? item.Poster
// // //                     : "https://via.placeholder.com/120x170",
// // //               }}
// // //               style={styles.poster}
// // //             />
// // //             <Text numberOfLines={1}>{item.Title}</Text>
// // //           </View>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: { marginVertical: 15 },
// // //   heading: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },
// // //   card: { width: 120, marginHorizontal: 8 },
// // //   poster: { width: "100%", height: 170, borderRadius: 8 },
// // // });
// // import { useEffect, useState } from "react";
// // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // export default function TrendingMovies() {

// //   const [movies, setMovies] = useState([]);

// //   useEffect(() => {

// //     const ids = [
// //   "tt10295212", // Shershaah
// //   "tt6452574", // Sanju
// //   "tt0405508", // Dhoom 2
// //   "tt3495026", // Dil Dhadakne Do
// //   "tt7700730", // Kabir Singh
// //   "tt3863552", // Sultan
// //   "tt6108090", // Raazi
// //   "tt2395469", // Queen
// //   "tt0449994", // Don
// //   "tt1188996", // My Name Is Khan
// //   "tt4129428", // Chhichhore
// //   "tt1934231", // Ek Tha Tiger
// //   "tt0371735", // Swades
// //   "tt3175038", // Badhaai Ho
// //   "tt3322420", // Piku
// //   "tt4434004", // Pink
// //   "tt7485048", // Article 15
// //   "tt8108202", // Stree
// //   // "tt9042878", // Luka Chuppi
// //   "tt7212726"  // Simmba
// // ];

// //     Promise.all(
// //       ids.map((id) =>
// //         fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
// //           .then((res) => res.json())
// //       )
// //     ).then((data) => {
// //       setMovies(data);
// //     });

// //   }, []);

// //   return (
// //     <View style={styles.container}>

// //       <Text style={styles.heading}>🔥 Trending Bollywood</Text>

// //       <FlatList
// //         data={movies}
// //         horizontal
// //         showsHorizontalScrollIndicator={false}
// //         keyExtractor={(item) => item.imdbID}
// //         contentContainerStyle={{ paddingHorizontal: 10 }}

// //         renderItem={({ item }) => (

// //           <View style={styles.card}>

// //             <Image
// //               source={{
// //                 uri:
// //                   item.Poster !== "N/A"
// //                     ? item.Poster
// //                     : "https://via.placeholder.com/130x190"
// //               }}
// //               style={styles.poster}
// //             />

// //             <Text numberOfLines={1} style={styles.title}>
// //               {item.Title}
// //             </Text>

// //           </View>

// //         )}
// //       />

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({

// //   container: {
// //     marginVertical: 15,
// //   },

// //   heading: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginLeft: 10,
// //     marginBottom: 10,
// //   },

// //   card: {
// //     width: 130,
// //     marginRight: 12,
// //   },

// //   poster: {
// //     width: "100%",
// //     height: 190,
// //     borderRadius: 10,
// //   },

// //   title: {
// //     marginTop: 5,
// //     fontSize: 12,
// //   },

// // });
// import { useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import MovieCard from "./MovieCard";

// export default function TrendingMovies() {

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {

//     const ids = [
//       "tt10295212", // Shershaah
//       "tt6452574", // Sanju
//       "tt0405508", // Dhoom 2
//       "tt3495026", // Dil Dhadakne Do
//       "tt7700730", // Kabir Singh
//       "tt3863552", // Sultan
//       "tt6108090", // Raazi
//       "tt2395469", // Queen
//       "tt0449994", // Don
//       "tt1188996", // My Name Is Khan
//       "tt4129428", // Chhichhore
//       "tt1934231", // Ek Tha Tiger
//       "tt0371735", // Swades
//       "tt3175038", // Badhaai Ho
//       "tt3322420", // Piku
//       "tt4434004", // Pink
//       "tt7485048", // Article 15
//       "tt8108202", // Stree
//       "tt7212726"  // Simmba
//     ];

//     Promise.all(
//       ids.map((id) =>
//         fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
//           .then((res) => res.json())
//       )
//     ).then((data) => {
//       setMovies(data);
//     });

//   }, []);

//   return (
//     <View style={styles.container}>

//       <Text style={styles.heading}>🔥 Trending Bollywood</Text>

//       <FlatList
//         data={movies}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.imdbID}
//         contentContainerStyle={{ paddingHorizontal: 10 }}

//         renderItem={({ item }) => (
//           <MovieCard movie={item} grid />
//         )}
//       />

//     </View>
//   );
// }

// // const styles = StyleSheet.create({

// //   container: {
// //     marginVertical: 15,
// //   },

// //   heading: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //     marginLeft: 10,
// //     marginBottom: 10,
// //   },

// // });
// const styles = StyleSheet.create({

//   container: {
//     marginVertical: 15,
//   },

//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 10,
//     marginBottom: 10,
//   },

//   card: {
//     width: 130,
//     marginRight: 12,
//   },

//   poster: {
//     width: "100%",
//     height: 190,
//     borderRadius: 10,
//   },

//   title: {
//     marginTop: 5,
//     fontSize: 12,
//   },

// });
import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import useMovieStore from "../store/movieStore";

export default function TrendingMovies() {

  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const { favorites, addFavorite } = useMovieStore();

  useEffect(() => {

    const ids = [
      "tt10295212",
      "tt6452574",
      "tt0405508",
      "tt3495026",
      "tt7700730",
      "tt3863552",
      "tt6108090",
      "tt2395469",
      "tt0449994",
      "tt1188996",
      "tt4129428",
      "tt1934231",
      "tt0371735",
      "tt3175038",
      "tt3322420",
      "tt4434004",
      "tt7485048",
      "tt8108202",
      "tt7212726"
    ];

    Promise.all(
      ids.map((id) =>
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=d467653e`)
          .then((res) => res.json())
      )
    ).then((data) => {
      setMovies(data);
    });

  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>🔥 Trending Bollywood</Text>

      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.imdbID}
        contentContainerStyle={{ paddingHorizontal: 10 }}

        renderItem={({ item }) => {

          const isFav = favorites.some(
            (m) => m.imdbID === item.imdbID
          );

          return (

            <Pressable
              onPress={() => router.push(`/movie/${item.imdbID}`)}
            >

              <View style={styles.card}>

                <Image
                  source={{
                    uri:
                      item.Poster !== "N/A"
                        ? item.Poster
                        : "https://via.placeholder.com/130x190"
                  }}
                  style={styles.poster}
                />

                <Text numberOfLines={1} style={styles.title}>
                  {item.Title}
                </Text>

                <Text
                  style={styles.heart}
                  onPress={(e) => {
                    e.stopPropagation();
                    addFavorite(item);
                  }}
                >
                  {isFav ? "❤️" : "🤍"}
                </Text>

              </View>

            </Pressable>

          );

        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginVertical: 15,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
  },

  card: {
    width: 130,
    marginRight: 12,
  },

  poster: {
    width: "100%",
    height: 190,
    borderRadius: 10,
  },

  title: {
    marginTop: 5,
    fontSize: 12,
  },

  heart: {
    position: "absolute",
    top: 6,
    right: 6,
    fontSize: 20,
  },

});
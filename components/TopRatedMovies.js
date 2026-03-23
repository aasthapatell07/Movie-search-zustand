// // // import { useEffect, useState } from "react";
// // // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // // export default function TopRatedMovies() {

// // //   const [movies, setMovies] = useState([]);

// // //   useEffect(() => {
// // //     fetch("https://www.omdbapi.com/?s=nolan&apikey=d467653e")
// // //       .then(res => res.json())
// // //       .then(data => {
// // //         if (data.Search) setMovies(data.Search);
// // //       });
// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.heading}>⭐ Top Rated Movies</Text>

// // //       <FlatList
// // //         horizontal
// // //         showsHorizontalScrollIndicator={false}
// // //         data={movies}
// // //         keyExtractor={(item) => item.imdbID}
// // //         renderItem={({ item }) => (
// // //           <View style={styles.card}>
// // //             <Image source={{ uri: item.Poster }} style={styles.poster} />
// // //             <Text numberOfLines={1}>{item.Title}</Text>
// // //           </View>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container:{marginVertical:15},
// // //   heading:{fontSize:20,fontWeight:"bold",marginLeft:10},
// // //   card:{width:120,marginHorizontal:8},
// // //   poster:{width:"100%",height:170,borderRadius:8}
// // // });
// // // import { useEffect, useState } from "react";
// // // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // // export default function TopRatedMovies() {

// // //   const [movies, setMovies] = useState([]);

// // //   useEffect(() => {

// // //     const keywords = ["nolan", "oscar", "bollywood", "aamir", "hollywood"];

// // //     Promise.all(
// // //       keywords.map((word) =>
// // //         fetch(`https://www.omdbapi.com/?s=${word}&apikey=d467653e`)
// // //           .then((res) => res.json())
// // //       )
// // //     ).then((results) => {

// // //       let combined = [];

// // //       results.forEach((data) => {
// // //         if (data.Search) combined = [...combined, ...data.Search];
// // //       });

// // //       setMovies(combined.slice(0, 12));
// // //     });

// // //   }, []);

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.heading}>⭐ Top Rated Movies</Text>

// // //       <FlatList
// // //         horizontal
// // //         data={movies}
// // //         keyExtractor={(item) => item.imdbID}
// // //         showsHorizontalScrollIndicator={false}
// // //         renderItem={({ item }) => (
// // //           <View style={styles.card}>
// // //             <Image source={{ uri: item.Poster }} style={styles.poster} />
// // //             <Text numberOfLines={1}>{item.Title}</Text>
// // //           </View>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container:{marginVertical:15},
// // //   heading:{fontSize:20,fontWeight:"bold",marginLeft:10},
// // //   card:{width:120,marginHorizontal:8},
// // //   poster:{width:"100%",height:170,borderRadius:8}
// // // });
// // import { useEffect, useState } from "react";
// // import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// // export default function TopRatedMovies() {

// //   const [movies, setMovies] = useState([]);

// //   useEffect(() => {
// //     fetch("https://www.omdbapi.com/?s=hollywood&apikey=d467653e")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.Search) {
// //           setMovies(data.Search);
// //         }
// //       })
// //       .catch((err) => console.log(err));
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>⭐ Top Rated Movies</Text>

// //       <FlatList
// //         horizontal
// //         data={movies}
// //         keyExtractor={(item) => item.imdbID}
// //         renderItem={({ item }) => (

// //           <View style={styles.card}>
// //             <Image
// //               source={{
// //                 uri:
// //                   item.Poster !== "N/A"
// //                     ? item.Poster
// //                     : "https://via.placeholder.com/120x170"
// //               }}
// //               style={styles.poster}
// //             />
// //             <Text numberOfLines={1}>{item.Title}</Text>
// //           </View>

// //         )}
// //       />

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: { marginVertical: 15 },
// //   heading: { fontSize: 20, fontWeight: "bold", marginLeft: 10 },
// //   card: { width: 120, marginHorizontal: 8 },
// //   poster: { width: "100%", height: 170, borderRadius: 8 },
// // });
// import { useEffect, useState } from "react";
// import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// export default function TopRatedMovies() {

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {

//     const ids = [
//   "tt1187043", // 3 Idiots
//   "tt5074352", // Dangal
//   "tt0169102", // Lagaan
//   "tt2338151", // PK
//   "tt12844910", // Pathaan
//   "tt0073707", // Sholay
//   "tt0238936", // Devdas
//   "tt0374887", // Munna Bhai MBBS
//   "tt0453729", // Rang De Basanti
//   "tt2082197", // Barfi
//   "tt0986264", // Taare Zameen Par
//   "tt3390572", // Bajrangi Bhaijaan
//   "tt1292703", // Oye Lucky Lucky Oye
//   "tt4430212", // Drishyam
//   "tt1821480", // Kahaani
//   "tt8108198", // Andhadhun
//   "tt7098658", // Gully Boy
//   "tt8291224", // Uri: The Surgical Strike
//   "tt1280558", // Jodhaa Akbar
//   "tt2176013"  // Yeh Jawaani Hai Deewani
// ];

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

//       <Text style={styles.heading}>⭐ Top Rated Movies</Text>

//       <FlatList
//         data={movies}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.imdbID}
//         contentContainerStyle={{ paddingHorizontal: 10 }}

//         renderItem={({ item }) => (

//           <View style={styles.card}>

//             <Image
//               source={{
//                 uri:
//                   item.Poster !== "N/A"
//                     ? item.Poster
//                     : "https://via.placeholder.com/130x190"
//               }}
//               style={styles.poster}
//             />

//             <Text numberOfLines={1} style={styles.title}>
//               {item.Title}
//             </Text>

//           </View>

//         )}
//       />

//     </View>
//   );
// }

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

export default function TopRatedMovies() {

  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const { favorites, addFavorite } = useMovieStore();

  useEffect(() => {

    const ids = [
      "tt1187043", // 3 Idiots
      "tt5074352", // Dangal
      "tt0169102", // Lagaan
      "tt2338151", // PK
      "tt12844910", // Pathaan
      "tt0073707", // Sholay
      "tt0238936", // Devdas
      "tt0374887", // Munna Bhai MBBS
      "tt0453729", // Rang De Basanti
      "tt2082197", // Barfi
      "tt0986264", // Taare Zameen Par
      "tt3390572", // Bajrangi Bhaijaan
      "tt1292703", // Oye Lucky Lucky Oye
      "tt4430212", // Drishyam
      "tt1821480", // Kahaani
      "tt8108198", // Andhadhun
      "tt7098658", // Gully Boy
      "tt8291224", // Uri: The Surgical Strike
      "tt1280558", // Jodhaa Akbar
      "tt2176013"  // Yeh Jawaani Hai Deewani
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

      <Text style={styles.heading}>⭐ Top Rated Movies</Text>

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
// // // // import { View, TextInput, StyleSheet } from "react-native";
// // // // import { useState } from "react";
// // // // import useMovieStore from "../store/movieStore";

// // // // export default function SearchBar() {

// // // //   const [query, setQuery] = useState("");
// // // //   const setSearchResults = useMovieStore(
// // // //     (state) => state.setSearchResults
// // // //   );

// // // //   const searchMovies = async (text) => {
// // // //     setQuery(text);

// // // //     if (text.length < 3) return;

// // // //     const res = await fetch(
// // // //       `https://www.omdbapi.com/?s=${text}&apikey=d467653e`
// // // //     );

// // // //     const data = await res.json();

// // // //     if (data.Search) {
// // // //       setSearchResults(data.Search);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View style={styles.container}>

// // // //       <TextInput
// // // //         placeholder="Search movies..."
// // // //         value={query}
// // // //         onChangeText={searchMovies}
// // // //         style={styles.input}
// // // //       />

// // // //     </View>
// // // //   );
// // // // }

// // // // const styles = StyleSheet.create({

// // // //   container: {
// // // //     padding: 10,
// // // //   },

// // // //   input: {
// // // //     backgroundColor: "white",
// // // //     padding: 12,
// // // //     borderRadius: 10,
// // // //   },
// // // // });
// // // import { View, TextInput, StyleSheet } from "react-native";
// // // import { useState } from "react";
// // // import useMovieStore from "../store/movieStore";

// // // export default function SearchBar() {

// // //   const [query, setQuery] = useState("");

// // //   const setSearchResults = useMovieStore(
// // //     (state) => state.setSearchResults
// // //   );

// // //   const searchMovies = async (text) => {

// // //     setQuery(text);

// // //     // clear results if input empty
// // //     if (text.length < 3) {
// // //       setSearchResults([]);
// // //       return;
// // //     }

// // //     try {

// // //       const res = await fetch(
// // //         `https://www.omdbapi.com/?s=${text}&apikey=d467653e`
// // //       );

// // //       const data = await res.json();

// // //       if (data.Search) {
// // //         setSearchResults(data.Search);
// // //       } else {
// // //         setSearchResults([]);
// // //       }

// // //     } catch (error) {
// // //       console.log("Search error:", error);
// // //     }

// // //   };

// // //   return (
// // //     <View style={styles.container}>

// // //       <TextInput
// // //         placeholder="Search movies..."
// // //         value={query}
// // //         onChangeText={searchMovies}
// // //         style={styles.input}
// // //       />

// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({

// // //   container: {
// // //     padding: 10,
// // //   },

// // //   input: {
// // //     backgroundColor: "white",
// // //     padding: 12,
// // //     borderRadius: 10,
// // //     fontSize: 16,
// // //   },

// // // });
// // import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
// // import { useState } from "react";
// // import useMovieStore from "../store/movieStore";

// // export default function SearchBar() {

// //   const [query, setQuery] = useState("");
// //   const [type, setType] = useState("");
// //   const [year, setYear] = useState("");

// //   const setSearchResults = useMovieStore(
// //     (state) => state.setSearchResults
// //   );

// //   const searchMovies = async (text, selectedType = type, selectedYear = year) => {
// //     setQuery(text);

// //     if (text.length < 3) return;

// //     let url = `https://www.omdbapi.com/?apikey=d467653e&s=${text}`;

// //     if (selectedType) {
// //       url += `&type=${selectedType}`;
// //     }

// //     if (selectedYear) {
// //       url += `&y=${selectedYear}`;
// //     }

// //     const res = await fetch(url);
// //     const data = await res.json();

// //     if (data.Search) {
// //       setSearchResults(data.Search);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>

// //       <TextInput
// //         placeholder="Search movies..."
// //         value={query}
// //         onChangeText={(text) => searchMovies(text)}
// //         style={styles.input}
// //       />

// //       {/* TYPE FILTER */}
// //       <View style={styles.filterRow}>
// //         <Text style={styles.label}>Type:</Text>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setType("");
// //             searchMovies(query, "", year);
// //           }}
// //         >
// //           <Text>All</Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setType("movie");
// //             searchMovies(query, "movie", year);
// //           }}
// //         >
// //           <Text>Movies</Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setType("series");
// //             searchMovies(query, "series", year);
// //           }}
// //         >
// //           <Text>Series</Text>
// //         </Pressable>

// //       </View>

// //       {/* YEAR FILTER */}
// //       <View style={styles.filterRow}>
// //         <Text style={styles.label}>Year:</Text>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setYear("2024");
// //             searchMovies(query, type, "2024");
// //           }}
// //         >
// //           <Text>2024</Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setYear("2023");
// //             searchMovies(query, type, "2023");
// //           }}
// //         >
// //           <Text>2023</Text>
// //         </Pressable>

// //         <Pressable
// //           style={styles.filterBtn}
// //           onPress={() => {
// //             setYear("");
// //             searchMovies(query, type, "");
// //           }}
// //         >
// //           <Text>All</Text>
// //         </Pressable>

// //       </View>

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({

// //   container: {
// //     padding: 10,
// //   },

// //   input: {
// //     backgroundColor: "white",
// //     padding: 12,
// //     borderRadius: 10,
// //   },

// //   filterRow: {
// //     flexDirection: "row",
// //     alignItems: "center",
// //     marginTop: 10,
// //   },

// //   label: {
// //     marginRight: 10,
// //     fontWeight: "bold",
// //   },

// //   filterBtn: {
// //     backgroundColor: "#eee",
// //     paddingHorizontal: 10,
// //     paddingVertical: 6,
// //     borderRadius: 8,
// //     marginRight: 8,
// //   },

// // });

// import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
// import { useState } from "react";
// import useMovieStore from "../store/movieStore";

// export default function SearchBar() {

// const [query, setQuery] = useState("");
// const [type, setType] = useState("");
// const [year, setYear] = useState("");
// const [genre, setGenre] = useState("");

// const setSearchResults = useMovieStore(
// (state) => state.setSearchResults
// );

// const searchMovies = async (
// text,
// selectedType = type,
// selectedYear = year,
// selectedGenre = genre
// ) => {

// setQuery(text);

// if (text.length < 3) return;

// let url = `https://www.omdbapi.com/?apikey=d467653e&s=${text}`;

// if (selectedType) {
//   url += `&type=${selectedType}`;
// }

// if (selectedYear) {
//   url += `&y=${selectedYear}`;
// }

// const res = await fetch(url);
// const data = await res.json();

// if (data.Search) {

//   let results = data.Search;

//   // GENRE FILTER (needs detailed movie fetch)
//   if (selectedGenre) {

//     const detailedMovies = await Promise.all(
//       results.map(async (m) => {
//         const r = await fetch(
//           `https://www.omdbapi.com/?apikey=d467653e&i=${m.imdbID}`
//         );
//         return r.json();
//       })
//     );

//     results = detailedMovies.filter((m) =>
//       m.Genre?.includes(selectedGenre)
//     );
//   }

//   setSearchResults(results);
// }


// };

// return ( <View style={styles.container}>


//   {/* SEARCH INPUT */}
//   <TextInput
//     placeholder="Search movies..."
//     value={query}
//     onChangeText={(text) => searchMovies(text)}
//     style={styles.input}
//   />

//   {/* TYPE FILTER */}
//   <View style={styles.filterRow}>
//     <Text style={styles.label}>Type:</Text>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setType("");
//         searchMovies(query, "", year, genre);
//       }}
//     >
//       <Text>All</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setType("movie");
//         searchMovies(query, "movie", year, genre);
//       }}
//     >
//       <Text>Movies</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setType("series");
//         searchMovies(query, "series", year, genre);
//       }}
//     >
//       <Text>Series</Text>
//     </Pressable>
//   </View>

//   {/* YEAR FILTER */}
//   <View style={styles.filterRow}>
//     <Text style={styles.label}>Year:</Text>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setYear("2024");
//         searchMovies(query, type, "2024", genre);
//       }}
//     >
//       <Text>2024</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setYear("2023");
//         searchMovies(query, type, "2023", genre);
//       }}
//     >
//       <Text>2023</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setYear("");
//         searchMovies(query, type, "", genre);
//       }}
//     >
//       <Text>All</Text>
//     </Pressable>
//   </View>

//   {/* GENRE FILTER */}
//   <View style={styles.filterRow}>
//     <Text style={styles.label}>Genre:</Text>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setGenre("");
//         searchMovies(query, type, year, "");
//       }}
//     >
//       <Text>All</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setGenre("Action");
//         searchMovies(query, type, year, "Action");
//       }}
//     >
//       <Text>Action</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setGenre("Drama");
//         searchMovies(query, type, year, "Drama");
//       }}
//     >
//       <Text>Drama</Text>
//     </Pressable>

//     <Pressable
//       style={styles.filterBtn}
//       onPress={() => {
//         setGenre("Comedy");
//         searchMovies(query, type, year, "Comedy");
//       }}
//     >
//       <Text>Comedy</Text>
//     </Pressable>
//   </View>

// </View>


// );
// }

// const styles = StyleSheet.create({

// container: {
// padding: 10,
// },

// input: {
// backgroundColor: "white",
// padding: 12,
// borderRadius: 10,
// },

// filterRow: {
// flexDirection: "row",
// alignItems: "center",
// marginTop: 10,
// flexWrap: "wrap"
// },

// label: {
// marginRight: 10,
// fontWeight: "bold",
// },

// filterBtn: {
// backgroundColor: "#eee",
// paddingHorizontal: 10,
// paddingVertical: 6,
// borderRadius: 8,
// marginRight: 8,
// marginBottom: 6
// },

// });
import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import useMovieStore from "../store/movieStore";

export default function SearchBar() {

const [query, setQuery] = useState("");
const [type, setType] = useState("");
const [year, setYear] = useState("");
const [genre, setGenre] = useState("");

const setSearchResults = useMovieStore(
(state) => state.setSearchResults
);

const searchMovies = async () => {

if (query.length < 3) return;

let url = `https://www.omdbapi.com/?apikey=d467653e&s=${query}`;

if (type) url += `&type=${type}`;
if (year) url += `&y=${year}`;

const res = await fetch(url);
const data = await res.json();

if (data.Search) {

  let results = data.Search;

  // GENRE FILTER (needs detailed fetch)
  if (genre) {

    const detailedMovies = await Promise.all(
      results.map(async (m) => {
        const r = await fetch(
          `https://www.omdbapi.com/?apikey=d467653e&i=${m.imdbID}`
        );
        return r.json();
      })
    );0

    results = detailedMovies.filter((m) =>
      m.Genre?.includes(genre)
    );
  }

  setSearchResults(results);
}

};

const resetFilters = () => {
setType("");
setYear("");
setGenre("");
};

return ( <View style={styles.container}>

  {/* SEARCH INPUT */}
  <TextInput
    placeholder="Search movies..."
    value={query}
    onChangeText={setQuery}
    style={styles.input}
  />

  {/* TYPE FILTER */}
  <View style={styles.filterRow}>
    <Text style={styles.label}>Type:</Text>

    <Pressable style={styles.filterBtn} onPress={() => setType("movie")}>
      <Text>Movie</Text>
    </Pressable>

    <Pressable style={styles.filterBtn} onPress={() => setType("series")}>
      <Text>Series</Text>
    </Pressable>
  </View>

  {/* YEAR FILTER */}
  <View style={styles.filterRow}>
    <Text style={styles.label}>Year:</Text>

    <Pressable style={styles.filterBtn} onPress={() => setYear("2024")}>
      <Text>2024</Text>
    </Pressable>

    <Pressable style={styles.filterBtn} onPress={() => setYear("2023")}>
      <Text>2023</Text>
    </Pressable>
  </View>

  {/* GENRE FILTER */}
  <View style={styles.filterRow}>
    <Text style={styles.label}>Genre:</Text>

    <Pressable style={styles.filterBtn} onPress={() => setGenre("Action")}>
      <Text>Action</Text>
    </Pressable>

    <Pressable style={styles.filterBtn} onPress={() => setGenre("Drama")}>
      <Text>Drama</Text>
    </Pressable>

    <Pressable style={styles.filterBtn} onPress={() => setGenre("Comedy")}>
      <Text>Comedy</Text>
    </Pressable>
  </View>

  {/* ACTION BUTTONS */}
  <View style={styles.actionRow}>

    <Pressable style={styles.applyBtn} onPress={searchMovies}>
      <Text style={styles.applyText}>Apply Filters</Text>
    </Pressable>

    <Pressable style={styles.resetBtn} onPress={resetFilters}>
      <Text>Reset</Text>
    </Pressable>

  </View>

</View>

);
}

const styles = StyleSheet.create({

container:{
padding:10
},

input:{
backgroundColor:"white",
padding:12,
borderRadius:10
},

filterRow:{
flexDirection:"row",
alignItems:"center",
marginTop:10,
flexWrap:"wrap"
},

label:{
marginRight:10,
fontWeight:"bold"
},

filterBtn:{
backgroundColor:"#eee",
paddingHorizontal:10,
paddingVertical:6,
borderRadius:8,
marginRight:8
},

actionRow:{
flexDirection:"row",
marginTop:15
},

applyBtn:{
backgroundColor:"#2196F3",
padding:10,
borderRadius:8,
marginRight:10
},

applyText:{
color:"white",
fontWeight:"bold"
},

resetBtn:{
backgroundColor:"#ddd",
padding:10,
borderRadius:8
}

});

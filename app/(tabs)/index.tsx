// // import { useState } from "react";
// // import { View, StyleSheet } from "react-native";
// // import Navbar from "../../components/Navbar";
// // import SearchBar from "../../components/SearchBar";
// // import MovieList from "../../components/MovieList";
// // import Favorites from "../../screens/Favorites";
// // import useMovieStore from "../../store/movieStore";
// // import { useEffect } from "react";
// // export default function Home() {
// //   const [showFavorites, setShowFavorites] = useState(false);
    
// //        const loadFavorites = useMovieStore(
// //   (state) => state.loadFavorites
// // );

// // useEffect(() => {
// //   loadFavorites();
// // }, []);
// //   return (
// //     <View style={styles.container}>
// //       <Navbar
// //         showFavorites={showFavorites}
// //         setShowFavorites={setShowFavorites}
// //       />

// //       {!showFavorites ? (
// //         <>
// //           <SearchBar />
// //           <MovieList />
// //         </>
// //       ) : (
// //         <Favorites />
// //       )}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#f5f5f5",
// //   },
// // });
// import { useState, useEffect } from "react";
// import { View, StyleSheet } from "react-native";

// import Navbar from "../../components/Navbar";
// import SearchBar from "../../components/SearchBar";
// import MovieList from "../../components/MovieList";
// import Favorites from "../../screens/Favorites";
// import TrendingMovies from "../components/TrendingMovies";
// import useMovieStore from "../../store/movieStore";

// export default function Index() {
//   const [showFavorites, setShowFavorites] = useState(false);

//   const loadFavorites = useMovieStore((state) => state.loadFavorites);

//   useEffect(() => {
//     loadFavorites();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Navbar
//         showFavorites={showFavorites}
//         setShowFavorites={setShowFavorites}
//       />

//       {!showFavorites ? (
//         <>
//           <SearchBar />
//           <MovieList />
//         </>
//       ) : (
//         <Favorites />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
// });
import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import MovieList from "../../components/MovieList";
import Favorites from "../../screens/Favorites";
import TrendingMovies from "../../components/TrendingMovies";
import TopRatedMovies from "../../components/TopRatedMovies";
import RecentlyViewed from "../../components/RecentlyViewed";

import useMovieStore from "../../store/movieStore";

export default function Index() {

  const [showFavorites, setShowFavorites] = useState(false);

  const loadFavorites = useMovieStore((state) => state.loadFavorites);
  const searchResults = useMovieStore((state) => state.searchResults);

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>

      <Navbar
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />

      {!showFavorites ? (

        <ScrollView showsVerticalScrollIndicator={false}>

          <SearchBar />

          {/* When no search results show home sections */}
          {searchResults.length === 0 && (
            <>
              <TrendingMovies />
              {/* <SurpriseMovie /> */}
              <TopRatedMovies />
              <RecentlyViewed />
            </>
          )}

          {/* When searching show results */}
          {searchResults.length > 0 && (
            <MovieList />
          )}

        </ScrollView>

      ) : (
        <Favorites />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import useThemeStore from "../store/themeStore";
// export default function Navbar({ showFavorites, setShowFavorites }) {
//   return (
//     <View style={styles.navbar}>
//       <Text style={styles.logo}>🎬 Movies</Text>

//       <TouchableOpacity
//         onPress={() => setShowFavorites(!showFavorites)}
//       >
//         <Text style={styles.favBtn}>
//           {showFavorites ? "All Movies" : "Favorites"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
// function Navbar(){
//   const toggleTheme = useThemeStore((state)=> state.toggleTheme);
//   return (
//     <button onClick={toggleTheme}>
//       Toggle Theme
//     </button>
//   );
// }
// // export default Navbar;

// const styles = StyleSheet.create({
//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 15,
//     backgroundColor: "#111",
//   },

//   logo: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },

//   favBtn: {
//     color: "#ff4757",
//     fontWeight: "bold",
//   },
// });
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import useThemeStore from "../store/themeStore";

// // export default function Navbar({ showFavorites, setShowFavorites }) {

// //   const toggleTheme = useThemeStore((state) => state.toggleTheme);

// //   return (
// //     <View style={styles.navbar}>
      
// //       <Text style={styles.logo}>🎬 Movies</Text>

// //       <TouchableOpacity onPress={() => setShowFavorites(!showFavorites)}>
// //         <Text style={styles.favBtn}>
// //           {showFavorites ? "All Movies" : "Favorites"}
// //         </Text>
// //       </TouchableOpacity>

// //       {/* Theme Toggle Button */}
// //       <TouchableOpacity onPress={toggleTheme}>
// //         <Text style={styles.themeBtn}>🌙</Text>
// //       </TouchableOpacity>

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   navbar: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     padding: 15,
// //     backgroundColor: "#111",
// //   },

// //   logo: {
// //     color: "white",
// //     fontSize: 20,
// //     fontWeight: "bold",
// //   },

// //   favBtn: {
// //     color: "#ff4757",
// //     fontWeight: "bold",
// //   },

// //   themeBtn: {
// //     color: "white",
// //     fontSize: 18,
// //   },
// // });
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Navbar({ showFavorites, setShowFavorites }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>🎬 Movies</Text>

      <TouchableOpacity
        onPress={() => setShowFavorites(!showFavorites)}
      >
        <Text style={styles.favBtn}>
          {showFavorites ? "All Movies" : "Favorites"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#111",
  },

  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  favBtn: {
    color: "#ff4757",
    fontWeight: "bold",
  },
});
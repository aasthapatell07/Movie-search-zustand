import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useMovieStore = create((set, get) => ({

  // search results
  searchResults: [],

  // selected movie for details page
  selectedMovie: null,

  // favorite movies
  favorites: [],


  // set search results
  setSearchResults: (movies) =>
    set({ searchResults: movies }),


  // set selected movie
  setSelectedMovie: (movie) =>
    set({ selectedMovie: movie }),


  // add/remove favorites
  addFavorite: async (movie) => {

    const { favorites } = get();

    const exists = favorites.find(
      (m) => m.imdbID === movie.imdbID
    );

    let updatedFavorites;

    if (exists) {
      // remove favorite
      updatedFavorites = favorites.filter(
        (m) => m.imdbID !== movie.imdbID
      );
    } else {
      // add favorite
      updatedFavorites = [...favorites, movie];
    }

    set({ favorites: updatedFavorites });

    await AsyncStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  },


  // load favorites from storage
  loadFavorites: async () => {
    const data = await AsyncStorage.getItem("favorites");

    if (data) {
      set({ favorites: JSON.parse(data) });
    }
  }

}));

export default useMovieStore;
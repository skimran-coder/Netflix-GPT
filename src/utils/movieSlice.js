import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: [],
    mainMovieTrailer: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: []
  },
  reducers: {
    addNowPlaying (state, action) {
      state.nowPlaying = action.payload
    },
    addMainMovieTrailer (state, action) {
      state.mainMovieTrailer = action.payload
    },
    addPopularMovies (state, action) {
      state.popularMovies = action.payload
    },
    addTopRatedMovies (state, action) {
      state.topRatedMovies = action.payload
    },
    addUpcomingMovies (state, action) {
      state.upcomingMovies = action.payload
    }
  }
})

export const {addNowPlaying, addMainMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer
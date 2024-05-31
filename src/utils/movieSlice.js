import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: [],
    mainMovieTrailer: []
  },
  reducers: {
    addNowPlaying (state, action) {
      state.nowPlaying = action.payload
    },
    addMainMovieTrailer (state, action) {
      state.mainMovieTrailer = action.payload
    }
  }
})

export const {addNowPlaying, addMainMovieTrailer} = movieSlice.actions
export default movieSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isSignIn: false
  },
  reducers: {
    addUser (state, action) {
      state.user = action.payload
    },
    removeUser (state) {
     state.user = null
    },
    toggleIsSignIn (state) {
      state.isSignIn = !state.isSignIn
    }
  }
})

export const {addUser, removeUser, toggleIsSignIn} = userSlice.actions
export default userSlice.reducer

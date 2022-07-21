import { createSlice } from "@reduxjs/toolkit";

export const albums = createSlice({
  name: "albums",
  initialState: {
    albums: [],
  },
  reducers: {
    setalbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setalbums } = albums.actions;

export default albums.reducer;

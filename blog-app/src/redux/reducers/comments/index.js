import { createSlice } from "@reduxjs/toolkit";

export const comments = createSlice({
  name: "comments",
  initialState: {
    comments: [],
  },
   reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
      console.log(action.payload,"ttttt")
    }}
});

export const {setComments} = comments.actions;

export default comments.reducer;


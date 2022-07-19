import { createSlice } from "@reduxjs/toolkit";

export const users = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {

    
    getAllusers: (state, action) => {
      state.users = action.payload;
    },
    





    
  },
});

export const { getAllusers } = users.actions;

export default users.reducer;

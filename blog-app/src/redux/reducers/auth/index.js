import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    token: {},
    isLoggedIn: localStorage.getItem("token") ? true : false,
    name: localStorage.getItem("name") ? localStorage.getItem("name") : "",
    id: localStorage.getItem("id") ? localStorage.getItem("id") : "",

    profile: JSON.parse(localStorage.getItem("user")) || {},
  },
  reducers: {
    setlogin: (state, action) => {
      state.token = true;
      localStorage.setItem("token", state.token);
      state.isLoggedIn = true;

      state.id = action.payload.id;
      console.log(action.payload, "ffffffff");
      localStorage.setItem("id", state.id);
      state.name = action.payload.name;
      localStorage.setItem("name", state.name);
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },

    getUserInfo: (state, action) => {
    

      state.profile = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
     
    },
  },
});

export const { setlogin, logout, getUserInfo } = auth.actions;

export default auth.reducer;

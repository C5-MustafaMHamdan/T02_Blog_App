import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    token:false,
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
     
      localStorage.setItem("id", state.id);
      state.name = action.payload.name;
      localStorage.setItem("name", state.name);

      state.profile = action.payload;
      localStorage.setItem("profile", JSON.stringify(action.payload));
      console.log(action);
     
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    localStorage.clear()
    },

    getUserInfo: (state, action) => {
      state.profile = action.payload;
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify(action.payload));

    },
    updateUserInfo: (state, action) => {
      state.profile = action.payload;
      console.log(action.payload);
      localStorage.setItem("profile", JSON.stringify(action.payload));
state.name=action.payload.name
    }


  },
});

export const { setlogin, logout, getUserInfo,updateUserInfo } = auth.actions;

export default auth.reducer;

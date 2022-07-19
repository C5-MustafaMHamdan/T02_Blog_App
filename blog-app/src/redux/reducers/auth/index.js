import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    token:{},
    isLoggedIn: localStorage.getItem("token")?true:false,
    name: localStorage.getItem("name")?localStorage.getItem("name"):"",
    id:localStorage.getItem("id")?localStorage.getItem("id"):"",
    profile:{}
  },
  reducers: {
    setlogin: (state, action) => {

      state.token=true
      localStorage.setItem("token",state.token)
      state.isLoggedIn = true;
console.log(action.payload);
state.name=action.payload.name;
localStorage.setItem("name",state.name)
state.id=action.payload.id;
localStorage.setItem("id",state.id)
state.profile=action.payload



    },
    logout: (state, action) => {
    
      state.isLoggedIn = false;
    },
  },
});

export const { setlogin, logout } = auth.actions;

export default auth.reducer;

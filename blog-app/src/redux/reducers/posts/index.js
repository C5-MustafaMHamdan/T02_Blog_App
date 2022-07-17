import { createSlice } from "@reduxjs/toolkit";

export const posts = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {

    setPosts: (state, action) => {
        state.posts = action.payload;
      },
      addPost: (state, action) => {
        state.posts.push(action.payload);
      },
      updatePost: (state, action) => {
         
        state.posts = state.posts.map((element) => {
          if (element.id === action.payload.id) {
            return (element = action.payload);
          } else {
            return element;
          }
        });
      },
      deletePosts: (state, action) => {
        state.posts = state.posts.filter((element) => {
          return element.id != action.payload;
        });
      },





    
  },
});


export const { setPosts, addPost, updatePost, deletePosts } =
  posts.actions;

export default posts.reducer;
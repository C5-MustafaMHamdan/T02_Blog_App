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
      state.posts.unshift(action.payload);
      console.log(action.payload ,"ttttttttttttttttttttttttttt")
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((element) => {
        console.log(action.payload,"mustafaupdate");
        if (element.id === action.payload.id) {

          element.body = action.payload.body || element.body
                    element.title = action.payload.title || element.title
                    return element
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

export const { setPosts, addPost, updatePost, deletePosts } = posts.actions;

export default posts.reducer;
 
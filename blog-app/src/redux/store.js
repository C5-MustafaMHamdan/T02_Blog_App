import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import postReducer from "./reducers/posts";
import commentsReducer from "./reducers/comments";

export default configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,

    comments: commentsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import postReducer from "./reducers/posts";
import commentsReducer from "./reducers/comments";
import userReducer from "./reducers/users";
import albumsReducer from "./reducers/albums"
export default configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
users:userReducer,
    comments: commentsReducer,
    albums:albumsReducer
  },
});

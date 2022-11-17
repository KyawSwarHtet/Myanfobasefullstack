import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/posts/postSlice";
import favReducer from "../features/favourite/favSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    favourites: favReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import history from "./history";
import fish from "./fish";
import posts from "./posts";
import user from "./user";

export default configureStore({
  reducer: {
    history : history.reducer,
    fish : fish.reducer,
    posts: posts.reducer,
    user: user.reducer,
  }
})
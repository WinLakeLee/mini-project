import { configureStore } from "@reduxjs/toolkit";
import history from "./history";
import fish from "./fish";

export default configureStore({
  reducer: {
    history : history.reducer,
    fish : fish.reducer
  }
})
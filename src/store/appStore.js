import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import movieReducer from "./slices/movieSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import movieReducer from "./slices/movieSlice.js";
import aiReducer from "./slices/aiSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    ai: aiReducer,
  },
});

export default appStore;

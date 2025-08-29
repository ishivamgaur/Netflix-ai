import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import movieReducer from "./slices/movieSlice.js";
import AiSearchToggleReducer from "./slices/aiSearchToggleSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    aiToggle: AiSearchToggleReducer,
  },
});

export default appStore;

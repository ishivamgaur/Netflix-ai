import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "aiSearchToggle",
  initialState: {
    showAiSearch: false,
    aiMoviesSuggestions: null,
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
    addAiSuggestions: (state, action) => {
      state.aiMoviesSuggestions = action.payload;
    },
  },
});

export const { toggleAiSearchView, addAiSuggestions } = aiSlice.actions;
export default aiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
  name: "aiSearchToggle",
  initialState: {
    showAiSearch: false,
  },
  reducers: {
    toggleAiSearchView: (state) => {
      state.showAiSearch = !state.showAiSearch;
    },
  },
});

export const { toggleAiSearchView } = aiSlice.actions;
export default aiSlice.reducer;

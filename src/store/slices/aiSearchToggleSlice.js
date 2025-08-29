import { createSlice } from "@reduxjs/toolkit";

const aiSearchToggleSlice = createSlice({
  name: "aiSearchToggle",
  initialState: {
    isAiSearch: false,
  },
  reducers: {
    toggleAiSearch: (state) => {
      state.isAiSearch = !state.isAiSearch;
    },
  },
});

export const { toggleAiSearch } = aiSearchToggleSlice.actions;
export default aiSearchToggleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    isButtonVisible: false, // Initialize as false
  },
  reducers: {
    setButtonVisibility: (state, action) => {
      state.isButtonVisible = action.payload;
    },
  },
});

export const { setButtonVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;

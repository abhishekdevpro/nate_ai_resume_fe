// templateSlice.js
import { createSlice } from "@reduxjs/toolkit";

const templateSlice = createSlice({
  name: "template",
  initialState: {
    selectedTemplate: 1, // Set the default template to 1
  },
  reducers: {
    selectTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
  },
});

export const { selectTemplate } = templateSlice.actions;
export default templateSlice.reducer;

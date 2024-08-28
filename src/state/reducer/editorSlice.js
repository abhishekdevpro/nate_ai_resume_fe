import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editorValue: "",
};

const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setEditorValue: (state, action) => {
      state.editorValue = action.payload;
    },
  },
});

export const { setEditorValue } = editorSlice.actions;

export default editorSlice.reducer;

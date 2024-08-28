import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editorValue: "",
};

const employeeEditorSlice = createSlice({
  name: "employeeEditorSlice",
  initialState,
  reducers: {
    setEditorValue: (state, action) => {
      state.editorValue = action.payload;
    },
  },
});

export const { setEditorValue } = employeeEditorSlice.actions;

export default employeeEditorSlice.reducer;

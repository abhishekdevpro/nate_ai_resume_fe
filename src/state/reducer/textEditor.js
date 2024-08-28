import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import setEditorValue from "./editorSlice";
const initialState = {
  textEditorValue: "  ",
};
const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    setTextEditorValue: (state, action) => {
      state.textEditorValue = action.payload;
    },
    appendEditorValue: (state, action) => {
      state.textEditorValue += " " + action.payload;
    },
  },
});

export const { appendEditorValue, setTextEditorValue } =
  textEditorSlice.actions;

export default textEditorSlice.reducer;

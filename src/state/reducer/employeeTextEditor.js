import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import setEditorValue from "./editorSlice";
const initialState = {
  textEditorValue: "",
};
const employeeTextEditorSlice = createSlice({
  name: "employeeTextEditorSlice",
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
  employeeTextEditorSlice.actions;

export default employeeTextEditorSlice.reducer;

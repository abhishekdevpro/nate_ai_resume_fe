import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  textEditorValue: "jklasdhadj",
  educationTextEditor: "",
  employmentTextEditor: "",
  customSectionTextEditor: "",
};

const userTextEditorSlice = createSlice({
  name: "userTextEditorSlice",
  initialState,
  reducers: {
    setTextEditorValue: (state, action) => {
      state.textEditorValue = action.payload;
    },
    setEducationTextEditor: (state, action) => {
      state.educationTextEditor = action.payload;
    },
    setEmploymentTextEditor: (state, action) => {
      state.employmentTextEditor = action.payload;
    },
    setCustomSectionTextEditor: (state, action) => {
      state.customSectionTextEditor = action.payload;
    },
  },
});

export const {
  setTextEditorValue,
  setEducationTextEditor,
  setEmploymentTextEditor,
  setCustomSectionTextEditor,
} = userTextEditorSlice.actions;
export default userTextEditorSlice.reducer;

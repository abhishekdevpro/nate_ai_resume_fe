import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  chooseTemplate: false,
};

const chooseTemplateSlice = createSlice({
  name: "chooseTemplate",
  initialState,
  reducers: {
    setChooseTemplate: (state, action) => {
      state.chooseTemplate = action.payload;
    },
  },
});
export const { setChooseTemplate } = chooseTemplateSlice.actions;
export default chooseTemplateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const websiteInputsSlice = createSlice({
  name: "websiteInputs",
  initialState: {
    labelInput: "",
    linkInput: "",
  },
  reducers: {
    setLabel: (state, action) => {
      state.labelInput = action.payload;
    },
    setLink: (state, action) => {
      state.linkInput = action.payload;
    },
  },
});

export const { setLabel, setLink } = websiteInputsSlice.actions;

export default websiteInputsSlice.reducer;

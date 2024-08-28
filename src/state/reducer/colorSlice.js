import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorValue: "",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setColorValue: (state, action) => {
      state.colorValue = action.payload;
    },
  },
});

export const { setColorValue } = colorSlice.actions;

export default colorSlice.reducer;

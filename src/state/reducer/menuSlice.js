import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  offCanvas: false,
};

const menuSlice = createSlice({
  name: "offCanvas",
  initialState,
  reducers: {
    setOffCanvas: (state, action) => {
      state.offCanvas = action.payload;
    },
  },
});

export const { setOffCanvas } = menuSlice.actions;

export default menuSlice.reducer;

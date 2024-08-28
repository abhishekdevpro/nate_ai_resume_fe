import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employerLoginValues: {
    email: "",
    password: "",
  },
};

const employerLoginSlice = createSlice({
  name: "employerLogin",
  initialState,
  reducers: {
    setEmployerLoginValues: (state, action) => {
      state.employerLoginValues = action.payload;
    },
  },
});

export const { setEmployerLoginValues } = employerLoginSlice.actions;

export default employerLoginSlice.reducer;

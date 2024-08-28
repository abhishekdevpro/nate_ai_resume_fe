import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employerForgotValues: {
    password: "",
    confirm_password: "",
  },
};

const employerForgotPasswordSlice = createSlice({
  name: "employerForgotPasswordSlice",
  initialState,
  reducers: {
    setEmployerForgotValues: (state, action) => {
      state.employerForgotValues = action.payload;
    },
  },
});

export const { setEmployerForgotValues } = employerForgotPasswordSlice.actions;

export default employerForgotPasswordSlice.reducer;

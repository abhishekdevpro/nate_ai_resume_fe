import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  employerSignUpValues: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  },
};

const employerSignUpSlice = createSlice({
  name: "employerSignUp",
  initialState,
  reducers: {
    setEmployerSignUpValues: (state, action) => {
      state.employerSignUpValues = action.payload;
    },
  },
});

export const { setEmployerSignUpValues } = employerSignUpSlice.actions;
export default employerSignUpSlice.reducer;

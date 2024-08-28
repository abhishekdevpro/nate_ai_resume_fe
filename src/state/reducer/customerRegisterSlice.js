import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerSignUpValues: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  },
};

const customerSignUpSlice = createSlice({
  name: "customerSignUp",
  initialState,
  reducers: {
    setCustomerSignUpValues: (state, action) => {
      state.customerSignUpValues = action.payload;
    },
  },
});

export const { setCustomerSignUpValues } = customerSignUpSlice.actions;
export default customerSignUpSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customerLoginValues: {
    email: "",
    password: "",
  },
};

const customerLoginSlice = createSlice({
  name: "customerLogin",
  initialState,
  reducers: {
    setCustomerLoginValues: (state, action) => {
      state.customerLoginValues = action.payload;
    },
  },
});

export const { setCustomerLoginValues } = customerLoginSlice.actions;

export default customerLoginSlice.reducer;

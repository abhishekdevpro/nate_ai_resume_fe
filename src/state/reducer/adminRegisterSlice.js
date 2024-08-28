import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  adminRegisterValues: {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  },
};

const adminRegisterValuesSlice = createSlice({
  name: "adminRegisterValuesSlice",
  initialState,
  reducers: {
    setAdminRegisterValues: (state, action) => {
      state.adminRegisterValues = action.payload;
    },
  },
});

export const { setAdminRegisterValues } = adminRegisterValuesSlice.actions;
export default adminRegisterValuesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  adminLoginValues: {
    email: "admin@gmail.com",
    password: "Joy123#",
  },
};

const adminLoginValuesSlice = createSlice({
  name: "adminLoginValuesSlice",
  initialState,
  reducers: {
    setAdminLoginValues: (state, action) => {
      state.adminLoginValues = action.payload;
    },
  },
});

export const { setAdminLoginValues } = adminLoginValuesSlice.actions;
export default adminLoginValuesSlice.reducer;

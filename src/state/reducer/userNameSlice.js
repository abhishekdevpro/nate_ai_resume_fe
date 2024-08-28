import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  admin: "",
  employee: "",
};

const userNameSlice = createSlice({
  name: "userNameSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setEmployee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { setUser, setEmployee, setAdmin } = userNameSlice.actions;

export default userNameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  adminSidebar: "",
  adminActiveTab: "",
  employeeSidebar: "",
  userSidebar: "",
};
const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setAdminSidebar: (state, action) => {
      state.adminSidebar = action.payload;
    },
    setAdminActiveTab: (state, action) => {
      state.adminActiveTab = action.payload;
    },
    setEmployeeSidebar: (state, action) => {
      state.employeeSidebar = action.payload;
    },
    setUserSidebar: (state, action) => {
      state.userSidebar = action.payload;
    },
  },
});

export const {
  setAdminSidebar,
  setEmployeeSidebar,
  setUserSidebar,
  setAdminActiveTab,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;

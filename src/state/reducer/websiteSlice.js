import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  websiteValues: {
    label: "",
    link: "",
  },
  websiteData: [],
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {
    setWebsiteValues: (state, action) => {
      state.websiteValues = action.payload;
    },
    setWebsiteData: (state, action) => {
      state.websiteData = action.payload;
    },
    deleteWebsite: (state, action) => {
      state.websiteData = state.websiteData.filter(
        (_, index) => index !== action.payload
      );
    },
    addItem: (state, action) => {
      state.websiteData.push(action.payload);
    },
  },
});

export const { setWebsiteValues, setWebsiteData, deleteWebsite, addItem } =
  websiteSlice.actions;

export default websiteSlice.reducer;

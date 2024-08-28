import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  customSectionValues: {
    sectionTitle: "",
    activity: "",
    customSectionCity: "",
    customStartDate: "",
    customEndDate: "",
    customDescription: "",
  },
  customSectionData: [],
};

const customSection = createSlice({
  name: "customSection",
  initialState,
  reducers: {
    setCustomSectionValues: (state, action) => {
      state.customSectionValues = action.payload;
    },
    setCustomSectionData: (state, action) => {
      state.customSectionData = action.payload;
    },
    deleteCustomSection: (state, action) => {
      state.customSectionData = state.customSectionData.filter(
        (_, index) => index !== action.payload
      );
    },
    setEducationCustomDescription: (state, action) => {
      state.customSectionValues.customDescription += action.payload;
    },
  },
});

export const {
  setCustomSectionValues,
  setCustomSectionData,
  deleteCustomSection,
  setEducationCustomDescription,
} = customSection.actions;

export default customSection.reducer;

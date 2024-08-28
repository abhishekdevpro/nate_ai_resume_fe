import { createSlice } from "@reduxjs/toolkit";

export const untitledInputsSlice = createSlice({
  name: "untitledInputs",
  initialState: {
    sectionTitleInput: "",
    activityInput: "",
    customSectionCityInput: "",
    customStartDateInput: "",
    customEndDateInput: "",
    customDescriptionInput: " ",
  },
  reducers: {
    setSectionTitle: (state, action) => {
      state.sectionTitleInput = action.payload;
    },
    setActivity: (state, action) => {
      state.activityInput = action.payload;
    },
    setCustomStartDate: (state, action) => {
      state.customStartDateInput = action.payload;
    },
    setCustomEndDate: (state, action) => {
      state.customEndDateInput = action.payload;
    },
    setCustomSectionCity: (state, action) => {
      state.customSectionCityInput = action.payload;
    },
    setCustomDescription: (state, action) => {
      state.customDescriptionInput = action.payload;
    },
    appendCustomDescription: (state, action) => {
      state.customDescriptionInput += action.payload; // Append the new text to the current content
    },
  },
});

export const {
  setSectionTitle,
  setActivity,
  setCustomStartDate,
  setCustomEndDate,
  setCustomSectionCity,
  setCustomDescription,
  appendCustomDescription,
} = untitledInputsSlice.actions;

export default untitledInputsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employmentValues: {
    jobtitle1: "",
    employer: "",
    jobstart: "",
    jobend: "",
    jobcity: "",
    jobdescription: " ",
  },
  employmentData: [],
};

const employmentSlice = createSlice({
  name: "employment",
  initialState,
  reducers: {
    setEmploymentValues: (state, action) => {
      state.employmentValues = action.payload;
      console.log("here");
    },
    setEmploymentData: (state, action) => {
      state.employmentData = action.payload;
    },
    deleteEmployee: (state, action) => {
      state.employmentData = state.employmentData.filter(
        (_, index) => index !== action.payload
      );
    },
    addItem: (state, action) => {
      state.employmentData.push(action.payload);
    },
    editItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.employmentData[index] = newValue;
    },
    setEmploymentJobdescription: (state, action) => {
      state.employmentValues.jobdescription = action.payload;
      console.log("here");
    },
  },
});

export const {
  setEmploymentValues,
  setEmploymentData,
  deleteEmployee,
  addItem,
  editItem,
  setEmploymentJobdescription,
} = employmentSlice.actions;

export default employmentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  educationValues: {
    school: "",
    degree: "",
    start: "",
    end: "",
    city1: "",
    edudescription: "",
  },
  educationData: [],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEducationValues: (state, action) => {
      state.educationValues = action.payload;
    },
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    deleteEducation: (state, action) => {
      state.educationData = state.educationData.filter(
        (_, index) => index !== action.payload
      );
    },
    addEducation: (state, action) => {
      state.educationData.push(action.payload);
    },
    editItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.educationData[index] = newValue;
    },
    setEducationJobdescription: (state, action) => {
      state.educationValues.edudescription += action.payload;
    },
  },
});

export const {
  setEducationValues,
  setEducationData,
  deleteEducation,
  addEducation,
  editItem,
  setEducationJobdescription,
} = educationSlice.actions;

export default educationSlice.reducer;

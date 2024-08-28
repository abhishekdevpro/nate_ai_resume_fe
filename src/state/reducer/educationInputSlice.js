import { createSlice } from "@reduxjs/toolkit";

export const educationInputsSlice = createSlice({
  name: "educationInputs",
  initialState: {
    schoolInput: "ddddd",
    degreeInput: "",
    startInput: "",
    endInput: "",
    city1Input: "",
    edudescriptionInput: " ",
  },
  reducers: {
    setSchoolInput: (state, action) => {
      state.schoolInput = action.payload;
    },
    setdegreeInput: (state, action) => {
      state.degreeInput = action.payload;
    },
    setstartInput: (state, action) => {
      state.startInput = action.payload;
    },
    setendInput: (state, action) => {
      state.endInput = action.payload;
    },
    setCity1Input: (state, action) => {
      state.city1Input = action.payload;
    },
    setEdudescriptionInput: (state, action) => {
      state.edudescriptionInput = action.payload;
    },
    appendEdudescriptionInput: (state, action) => {
      state.edudescriptionInput += action.payload; // Append the new text to the current content
    },
  },
});

export const {
  setSchoolInput,
  setdegreeInput,
  setstartInput,
  setendInput,
  setCity1Input,
  setEdudescriptionInput,
  appendEdudescriptionInput,
} = educationInputsSlice.actions;

export default educationInputsSlice.reducer;

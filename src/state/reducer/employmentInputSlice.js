import { createSlice } from "@reduxjs/toolkit";
import { setEmploymentValues } from "./employmentSlice";
import { useSelector, useDispatch } from "react-redux";

export const employemntInputsSlice = createSlice({
  name: "employemntInputs",
  initialState: {
    jobtitle1Input: "",
    employerInput: "",
    jobstartInput: "",
    jobendInput: "",
    jobcityInput: "",
    jobdescriptionInput: " ",
  },
  reducers: {
    setJobtitle1Input: (state, action) => {
      state.jobtitle1Input = action.payload;
    },
    setEmployerInput: (state, action) => {
      state.employerInput = action.payload;
    },
    setJobstart: (state, action) => {
      state.jobstartInput = action.payload;
    },
    setJobend: (state, action) => {
      state.jobendInput = action.payload;
    },
    setJobcity: (state, action) => {
      state.jobcityInput = action.payload;
    },
    setJobdescription: (state, action) => {
      state.jobdescriptionInput = action.payload;
    },
    appendJobdescription: (state, action) => {
      state.jobdescriptionInput += action.payload;
    },
  },
});

export const {
  setJobtitle1Input,
  setEmployerInput,
  setJobstart,
  setJobend,
  setJobcity,
  setJobdescription,
  appendJobdescription,
} = employemntInputsSlice.actions;

export default employemntInputsSlice.reducer;

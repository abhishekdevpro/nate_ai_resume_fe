import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalInfoValues: {
    docname: "",
    jobTitle: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    address: "",
    postalcode: "",
    drivinglicense: "",
    nationality: "",
    placeofbirth: "",
    dateofbirth: "",
    clearance: "",
    image: "",
  },
};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setPersonalInfoValues: (state, action) => {
      state.personalInfoValues = action.payload;
    },
    setPersonalInfoData: (state, action) => {
      state.personalInfoData = action.payload;
    },
  },
});

export const { setPersonalInfoValues, setPersonalInfoData } =
  personalInfoSlice.actions;

export default personalInfoSlice.reducer;

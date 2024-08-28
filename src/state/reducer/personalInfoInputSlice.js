// inputsSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const inputsSlice = createSlice({
  name: "inputs",
  initialState: {
    docname: "",
    jobTitle: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalcode: "",
    drivinglicense: "",
    nationality: "",
    placeofbirth: "",
    dateofbirth: "",
    clearance: "",
    image: "",
  },
  reducers: {
    setDocname: (state, action) => {
      state.docname = action.payload;
    },
    setJobTitle: (state, action) => {
      state.jobTitle = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddressInput: (state, action) => {
      state.address = action.payload;
    },
    setDrivinglicense: (state, action) => {
      state.drivinglicense = action.payload;
    },
    setNationality: (state, action) => {
      state.nationality = action.payload;
    },
    setPlaceofbirth: (state, action) => {
      state.placeofbirth = action.payload;
    },
    setDateofbirth: (state, action) => {
      state.dateofbirth = action.payload;
    },
    setClearance: (state, action) => {
      state.clearance = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setPostalcodeInput: (state, action) => {
      state.postalcode = action.payload;
    },

    // Add more reducers for additional inputs
  },
});

export const {
  setDocname,
  setJobTitle,
  setFirstName,
  setLastName,
  setCity,
  setCountry,
  setEmail,
  setPhoneNumber,
  setAddressInput,
  setPostalcodeInput,
  setDrivinglicense,
  setNationality,
  setPlaceofbirth,
  setDateofbirth,
  setClearance,
  setImage,
} = inputsSlice.actions;

export default inputsSlice.reducer;

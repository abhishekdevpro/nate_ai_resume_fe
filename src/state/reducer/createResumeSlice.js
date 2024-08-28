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
  educationValues: {
    school: "",
    degree: "",
    start: "",
    end: "",
    city1: "",
    eduDescription: "",
  },
  educationDescription: "",
  employmentDescription: "",
  customSectionDescription: "",
  educationData: [],
  employmentValues: {
    jobtitle1: "",
    employer: "",
    jobstart: "",
    jobend: "",
    jobcity: "",
    jobdescription: " ",
  },
  employmentData: [],
  imageValue: "",
  editorValue: "",
  skillsValues: {
    skills: "",
  },
  skillsData: [],
  certificationValues: {
    certifications: "",
  },
  certificationData: [],
  websiteValues: {
    label: "",
    link: "",
  },
  websiteData: [],
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

const createResumeSlice = createSlice({
  name: "createResumeSlice",
  initialState,
  reducers: {
    setPersonalInfoValues: (state, action) => {
      state.personalInfoValues = action.payload;
    },
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
      state.educationValues.eduDescription += action.payload;
    },
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
    addEmploymentItem: (state, action) => {
      state.employmentData.push(action.payload);
    },
    editEmploymentItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.employmentData[index] = newValue;
    },
    setEmploymentJobdescription: (state, action) => {
      state.employmentValues.jobdescription = action.payload;
      console.log("here");
    },
    setImageValue: (state, action) => {
      state.imageValue = action.payload;
    },
    setEditorValue: (state, action) => {
      state.editorValue = action.payload;
    },
    setSkillsValues: (state, action) => {
      state.skillsValues = action.payload;
    },
    setSkillsData: (state, action) => {
      state.skillsData = action.payload;
    },
    setCertificationValues: (state, action) => {
      state.certificationValues = action.payload;
    },
    setCertificationData: (state, action) => {
      state.certificationData = action.payload;
    },
    deleteCertification: (state, action) => {
      state.certificationData = state.certificationData.filter(
        (_, index) => index !== action.payload
      );
    },
    deleteSkill: (state, action) => {
      state.skillsData = state.skillsData.filter(
        (_, index) => index !== action.payload
      );
    },
    addSkillItem: (state, action) => {
      state.skillsData.push(action.payload);
    },
    editSkillItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.skillsData[index] = newValue;
    },
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
    addWebsiteItem: (state, action) => {
      state.websiteData.push(action.payload);
    },
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
    setEducationDescription: (state, action) => {
      state.educationDescription = action.payload;
    },
    setEmploymentDescription: (state, action) => {
      state.employmentDescription = action.payload;
    },
    setCustomSectionDescription: (state, action) => {
      state.customSectionDescription = action.payload;
    },
  },
});

export const {
  setPersonalInfoValues,
  setEducationValues,
  setEducationData,
  deleteEducation,
  addEducation,
  editItem,
  setEducationJobdescription,
  setEducationDescription,
  setEmploymentDescription,
  setCustomSectionDescription,
  setEmploymentValues,
  setEmploymentData,
  deleteEmployee,
  addEmploymentItem,
  editEmploymentItem,
  setEmploymentJobdescription,
  setImageValue,
  setEditorValue,
  setSkillsValues,
  setSkillsData,
  deleteSkill,
  addSkillItem,
  editSkillItem,
  setWebsiteValues,
  setWebsiteData,
  deleteWebsite,
  addWebsiteItem,
  setCustomSectionValues,
  setCustomSectionData,
  deleteCustomSection,
  setEducationCustomDescription,
  setCertificationValues,
  setCertificationData,
  deleteCertification,
} = createResumeSlice.actions;

export default createResumeSlice.reducer;

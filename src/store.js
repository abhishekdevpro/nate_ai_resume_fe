import { configureStore } from "@reduxjs/toolkit";
import employerLoginSlice from "./state/reducer/employerLoginSlice";
import CustomerLoginSlice from "./state/reducer/customerLoginSlice";
import employerRegisterSlice from "./state/reducer/employerRegisterSlice";
import customerRegisterSlice from "./state/reducer/customerRegisterSlice";
import menuSlice from "./state/reducer/menuSlice";
import educationSlice from "./state/reducer/educationSlice";
import employmentSlice from "./state/reducer/employmentSlice";
import skillSlice from "./state/reducer/skillSlice";
import personalInfoSlice from "./state/reducer/personalInfoSlice";
import websiteSlice from "./state/reducer/websiteSlice";
import editorSlice from "./state/reducer/editorSlice";
import imageSlice from "./state/reducer/imageSlice";
import resumeimageSlice from "./state/reducer/resumeimageSlice";
import textEditorSlice from "./state/reducer/textEditor";
import personalInfoInputSlice from "./state/reducer/personalInfoInputSlice";
import educationInputsSlice from "./state/reducer/educationInputSlice";
import employemntInputsSlice from "./state/reducer/employmentInputSlice";
import untitledInputsSlice from "./state/reducer/untitledInputSlice";
import websiteInputsSlice from "./state/reducer/websitesInputSlice";
import skillInputsSlice from "./state/reducer/skillsInputSlice";
import customSectionSlice from "./state/reducer/customsectionSlice";
import templateSlice from "./state/reducer/templateSlice";
import visibilitySlice from "./state/reducer/visibilitySlice";
import createResumeSlice from "./state/reducer/createResumeSlice";
import adminLoginSlice from "./state/reducer/adminLoginSlice";
import adminRegisterSlice from "./state/reducer/adminRegisterSlice";
import employerForgotPasswordSlice from "./state/reducer/employerForgotPasswordSlice";
import employeeCreateResumeSlice from "./state/reducer/employeeCreateResumeSlice";
import employeeTextEditorSlice from "./state/reducer/employeeTextEditor";
import employeeEditorSlice from "./state/reducer/employeeEditor";
import userTextEditorSlice from "./state/reducer/userTextEditorSlice";
import sidebarSlice from "./state/reducer/sidebarSlice";
import userNameSlice from "./state/reducer/userNameSlice";
const rootReducer = {
  employerLogin: employerLoginSlice,
  customerLogin: CustomerLoginSlice,
  employerSign: employerRegisterSlice,
  customerSign: customerRegisterSlice,
  menuSlice: menuSlice,
  education: educationSlice,
  employment: employmentSlice,
  skills: skillSlice,
  personal: personalInfoSlice,
  website: websiteSlice,
  editor: editorSlice,
  image: imageSlice,
  resumeImage: resumeimageSlice,
  textEditor: textEditorSlice,
  personalInfoInput: personalInfoInputSlice,
  customSection: customSectionSlice,
  educationInputs: educationInputsSlice,
  employemntInputs: employemntInputsSlice,
  untitledInputs: untitledInputsSlice,
  websiteInputs: websiteInputsSlice,
  skillInputs: skillInputsSlice,
  template: templateSlice,
  visibility: visibilitySlice,
  createResumeSlice: createResumeSlice,
  adminLoginSlice: adminLoginSlice,
  adminRegisterSlice: adminRegisterSlice,
  employerForgotPasswordSlice: employerForgotPasswordSlice,
  employeeCreateResumeSlice: employeeCreateResumeSlice,
  employeeTextEditorSlice: employeeTextEditorSlice,
  employeeEditorSlice: employeeEditorSlice,
  userTextEditorSlice: userTextEditorSlice,
  sidebarSlice: sidebarSlice,
  userNameSlice: userNameSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;

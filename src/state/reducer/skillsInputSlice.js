import { createSlice } from "@reduxjs/toolkit";

export const skillInputsSlice = createSlice({
  name: "skillInputs",
  initialState: {
    skillInput: "joy",
  },
  reducers: {
    setSkillInput: (state, action) => {
      state.skillInput = action.payload;
    },
  },
});

export const { setSkillInput } = skillInputsSlice.actions;

export default skillInputsSlice.reducer;

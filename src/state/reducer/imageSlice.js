// imageSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  imageValue: '',
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setImageValue: (state, action) => {
      state.imageValue = action.payload;
    },
  },
});

export const { setImageValue } = imageSlice.actions;
export default imageSlice.reducer;

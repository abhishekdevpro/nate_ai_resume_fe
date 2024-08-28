import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    resumeImage1 : "",
    resumeImage2 : "",
    resumeImage3 : "",
    resumeImage4 : "",
    resumeImage5 : ""
}

const resumeImage2Slice = createSlice({
    name : "resumeImage2",
    initialState,
    reducers : {
        setResumeImage1 : (state,action) => {
            state.resumeImage1 = action.payload
        },
        setResumeImage2 : (state,action)=>{
            state.resumeImage2 = action.payload
        },
        setResumeImage3 : (state,action)=>{
            state.resumeImage3 = action.payload
        },
        setResumeImage4 : (state,action)=>{
            state.resumeImage4 = action.payload
        },
        setResumeImage5 : (state,action) => {
            state.resumeImage5 = action.payload
        }
    }
})

export const { setResumeImage1 ,setResumeImage2 , setResumeImage3, setResumeImage4, setResumeImage5} = resumeImage2Slice.actions

export default resumeImage2Slice.reducer

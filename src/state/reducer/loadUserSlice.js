import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../../state/actions/authActions"; // Correct the import path

// Async thunk for fetching user data
// export const fetchUser = createAsyncThunk(
//   "user/fetchUser",
//   async (userId, thunkAPI) => {
//     console.log("fetchuser");
//     try {
//       const token = localStorage.getItem("authToken");
//       console.log(token);
//       const response = await axios.get("/api/v1/token-validation", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response);

//       if (response.status !== 200) {
//         throw new Error("Unauthorized");
//       }

//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         localStorage.removeItem("authToken");
//         // Optionally redirect the user to the login page
//         <Navigate to="/auth/login" replace />;
//       }
//       throw error;
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: localStorage.getItem("loadUserStatus") || "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        localStorage.setItem("loadUserStatus", "loading");
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("Fulfilled action:", action);
        state.status = "succeeded";
        state.data = action.payload;
        localStorage.setItem("loadUserStatus", "succeeded");
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        localStorage.setItem("loadUserStatus", "failed");
      });
  },
});

export default userSlice.reducer;

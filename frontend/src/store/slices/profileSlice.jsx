import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.BASE_URL;


const initialState = {
  profile: {
    status: "idle",
    error: null,
    data: {},
  },
};

export const createProfile = createAsyncThunk(
  "profile/newProfile",
  async ({ data, id }) => {
    try {
      const response = await axios.put(
        `https://backend-verxio.vercel.app/api/v1/profiles/${id}`, // Assuming apiUrl is defined somewhere in your code
        data
      );
      // console.log(response);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      if (!err.response) {
        throw err.message;
      }
      return err.response.data;
    }
  }
);

export const getProfile = createAsyncThunk("profile/getProfile", async (id) => {
  try {
    const response = await axios.get(
      `https://backend-verxio.vercel.app/api/v1/profiles/${id}` // Assuming apiUrl is defined somewhere in your code
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    if (!err.response) {
      throw err.message;
    }
    return err.response.data;
  }
});

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //add Profile
      .addCase(createProfile.pending, (state) => {
        state.profile.status = "loading";
        state.profile.error = null;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        if (
          // action.payload === "Success" ||
          action.payload.success === true
        ) {
          state.profile.data = action.payload;
          state.profile.status = "succeeded";
        } else {
          state.profile.status = "failed";
          state.profile.error = action.payload;
        }
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.profile.error = action.payload;
        state.profile.status = "failed";
      })

      //get user profile
      .addCase(getProfile.pending, (state) => {
        state.profile.status = "loading";
        state.profile.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        if (
          // action.payload === "Success" ||
          action.payload.success === true
        ) {
          state.profile.data = action.payload;
          state.profile.status = "succeeded";
        } else {
          state.profile.status = "failed";
          state.profile.error = action.payload;
        }
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.profile.error = action.payload;
        state.profile.status = "failed";
      });
  },
});

export const profileActions = profileSlice.actions;
// export const {} = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PURGE } from "redux-persist";

const apiUrl = process.env.BASE_URL;

const initialState = {
  campaign: {
    status: "idle",
    error: null,
    data: {},
  },
};

export const createCampaign = createAsyncThunk(
  "profile/newCampaign",
  async ({ data, id }) => {
    try {
      const response = await axios.post(
        `https://backend-verxio.vercel.app/api/v1/campaigns`, // Assuming apiUrl is defined somewhere in your code
        data
      );
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


const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //create campaign
      .addCase(createCampaign.pending, (state) => {
        state.campaign.status = "loading";
        state.campaign.error = null;
      })
      .addCase(createCampaign.fulfilled, (state, action) => {
        if (
          // action.payload === "Success" ||
          action.payload.success === true
        ) {
          state.campaign.data = action.payload;
          state.campaign.status = "succeeded";
        } else {
          state.campaign.status = "failed";
          state.campaign.error = action.payload;
        }
      })
      .addCase(createCampaign.rejected, (state, action) => {
        state.campaign.error = action.payload;
        state.campaign.status = "failed";
      })

    //   //get user profile
    //   .addCase(getProfile.pending, (state) => {
    //     state.profile.status = "loading";
    //     state.profile.error = null;
    //   })
    //   .addCase(getProfile.fulfilled, (state, action) => {
    //     if (
    //       // action.payload === "Success" ||
    //       action.payload.success === true
    //     ) {
    //       state.profile.data = action.payload;
    //       state.profile.status = "succeeded";
    //     } else {
    //       state.profile.status = "failed";
    //       state.profile.error = action.payload;
    //     }
    //   })
    //   .addCase(getProfile.rejected, (state, action) => {
    //     state.profile.error = action.payload;
    //     state.profile.status = "failed";
    //   })

      //purge all state
      .addCase(PURGE, () => {
        return initialState;
      });
  },
});

export const campaignActions = campaignSlice.actions;
export const {} = campaignSlice.actions;
export default campaignSlice.reducer;

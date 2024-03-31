import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  userProfile: {},
  userId: "",
  edit: false,
  start:{}, 
  input:{},
  totalCampaignPoint:{},
  criterion:'',
  rewards:{},
  choosePoint: 0
};

const statesSlice = createSlice({
  name: "generalState",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setEdit: (state, action) => {
      state.edit = action.payload;
    },
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setTotalCampaignPoint: (state, action) => {
      state.totalCampaignPoint = action.payload;
    },
    setCriterion: (state, action) => {
      state.criterion = action.payload;
    },
    setRewards: (state, action) => {
      state.rewards = action.payload;
    },
    setChoosePoint: (state, action) => {
      state.choosePoint = action.payload;
    },
  },
  extraReducers: (builder)=> {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  }
});

export const statesActions = statesSlice.actions;
export const { setUserId, setUserProfile, setEdit, setStart, setInput, setTotalCampaignPoint , setCriterion, setRewards, setChoosePoint} = statesSlice.actions;
export default statesSlice.reducer;

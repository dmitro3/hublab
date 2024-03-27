import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  userProfile: {},
  userId: "",
  edit: false,
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
  },
  extraReducers: (builder)=> {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  }
});

export const statesActions = statesSlice.actions;
export const { setUserId, setUserProfile, setEdit } = statesSlice.actions;
export default statesSlice.reducer;

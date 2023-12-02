import { createSlice } from "@reduxjs/toolkit";
import getAllUser from "../thunk/userThunk";

const initialState = {
  loading: "idle",
  userList: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getAllUser.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      state.loading = "idle";
      state.userList = action.payload?.data || [];
    },
    [getAllUser.rejected]: (state, action) => {
      state.loading = "idle";
      state.userList = [];
    },
  },
});

export default userSlice.reducer;

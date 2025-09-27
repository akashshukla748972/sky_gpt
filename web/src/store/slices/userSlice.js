import { createSlice } from "@reduxjs/toolkit";
import { dummyUserData } from "../../assets/assets";

const initialState = {
  user: dummyUserData,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;

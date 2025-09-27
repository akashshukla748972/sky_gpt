import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = themeSlice.actions;
export default themeSlice.reducer;

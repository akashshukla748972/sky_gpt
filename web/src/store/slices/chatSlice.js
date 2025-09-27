import { createSlice } from "@reduxjs/toolkit";
import { dummyChats } from "../../assets/assets";

const initialState = {
  chats: [],
  selectedChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state) => {
      state.chats = dummyChats;
      state.selectedChat = dummyChats[0];
    },
  },
  extraReducers: (builder) => {},
});

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;

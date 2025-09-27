import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../store/slices/chatSlice";

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const { chats, selectedChat } = useSelector((state) => state.chat);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(user, chats, selectedChat, theme);

  useState(() => {
    if (user) {
      dispatch(setChat());
    }
  }, [user]);

  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  );
}

export default Sidebar;

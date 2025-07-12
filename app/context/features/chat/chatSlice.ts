import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatMessage } from "@/types/chat";

const initialState = {
  chats: [] as ChatMessage[],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<ChatMessage[]>) => {
      state.chats = action.payload;
    },
    clearChat: (state) => {
      state.chats = [];
    },
    pushChat: (state, action: PayloadAction<ChatMessage>) => {
      state.chats.push(action.payload);
    },
  },
});

export default chatSlice.reducer;
export const {} = chatSlice.actions;

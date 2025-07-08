import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/context/features/user/userSlice";
import clubReducer from "@/context/features/club/clubSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    club: clubReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice } from "@reduxjs/toolkit";

export interface IUserData {
  userId: string;
  username: string;
  email: string;
  role: string;
}

const initialState = {
  isAuthenticated: false,
  userData: null as IUserData | null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    clearUser(state) {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClub } from "@/types/club";

const initialState = {
  clubs: null as IClub[] | null,
};

const clubSlice = createSlice({
  name: "club",
  initialState,

  reducers: {
    setClubs: (state, action: PayloadAction<IClub[]>) => {
      // Direct mutation of the clubs array
      state.clubs = action.payload;
    },

    addClub: (state, action: PayloadAction<IClub>) => {
      const newClub = action.payload;
      // Direct mutation - push to clubs array
      if (!state.clubs) state.clubs = [];
      state.clubs.push(newClub);
    },

    // Additional useful reducers for club management
    removeClub: (state, action: PayloadAction<string>) => {
      const clubId = action.payload;
      if (!state.clubs) state.clubs = [];
      state.clubs = state.clubs.filter((club) => club._id !== clubId);
    },

    updateClub: (state, action: PayloadAction<IClub>) => {
      const updatedClub = action.payload;
      if (!state.clubs) state.clubs = [];
      const index = state.clubs.findIndex(
        (club) => club._id === updatedClub._id
      );
      if (index !== -1) {
        state.clubs[index] = updatedClub;
      }
    },

    clearClubs: (state) => {
      state.clubs = [];
    },
  },
});

export const { setClubs, addClub, removeClub, updateClub, clearClubs } =
  clubSlice.actions;
export default clubSlice.reducer;

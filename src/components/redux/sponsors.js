import { createSlice } from "@reduxjs/toolkit";
import SponsorsData from "../data/sponsors-data";

const sponsors = createSlice({
  name: "sponsors",
  initialState: {
    sponsors: SponsorsData,
  },
  reducers: {
    editSponsor: (state, action) => {
      state.sponsors[action.payload.index] = action.payload.data;
    },
  },
});

export const { editSponsor } = sponsors.actions;

export default sponsors.reducer;
// console.log(sponsors);

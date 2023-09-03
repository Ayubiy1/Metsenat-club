import { createSlice } from "@reduxjs/toolkit";
import SponsorsData from "../data/sponsors-data";
// import { SponsorsData } from "../../data/sponsors";

const sponsors = createSlice({
  name: "sponsorsT",
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

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
      state.sponsors.push(action.payload);
      // state.studentData = [...action.payload, ...state.studentData];
    },
    editSponsore: (state, action) => {
      state.sponsors[action.payload.index] = action.payload.data;
      console.log(state.sponsors);
    },
  },
});

export const { editSponsor, editSponsore } = sponsors.actions;

export default sponsors.reducer;

// console.log(sponsors);

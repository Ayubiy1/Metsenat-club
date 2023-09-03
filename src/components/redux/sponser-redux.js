import { createSlice } from "@reduxjs/toolkit";

const SponserR = createSlice({
  name: "sponser",
  initialState: {
    sponser: {},
  },
  reducers: {
    setSponser: (state, action) => {
      state.sponser = action.payload;
    },
  },
});

export const { setSponser } = SponserR.actions;
// console.log(setSponser);
export default SponserR.reducer;

// console.log(SponserR);

import { createSlice } from "@reduxjs/toolkit";

const SponserR = createSlice({
  name: "sponser",
  initialState: {
    sponser: {},
  },
  reducers: {
    setSponser: (state, action) => {
      console.log(action.payload);
      // state.sponser = action.payload;
    },
  },
});

export const { setSponser } = SponserR.actions;
export default SponserR.reducer;

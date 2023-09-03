import { createSlice } from "@reduxjs/toolkit";

const Values = createSlice({
  name: "values",
  initialState: {
    valueStudents: "",
  },
  reducers: {
    targetValue: (state, action) => {
      state.valueStudents = action.payload;
    },
  },
});

export const { targetValue } = Values.actions;

export default Values.reducer;

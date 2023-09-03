import { createSlice } from "@reduxjs/toolkit";

export const StudentsInfoR = createSlice({
  name: "studentsInfo",
  initialState: {
    info: 1,
  },
  setInfo: (state, action) => {
    state.info = action.payload;
  },
});

export const { setInfo } = StudentsInfoR.actions;

export default StudentsInfoR.reducer;

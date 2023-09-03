import { createSlice } from "@reduxjs/toolkit";

export const addStudentModal = createSlice({
  name: "addStudent",
  initialState: {
    openMA: false,
    openSNew: false,
  },
  reducers: {
    openModalAdd: (state) => {
      state.openMA = true;
      console.log("openModalAdd");
    },
    hideModalAdd: (state) => {
      state.openMA = false;
      console.log("hideModalAdd");
    },

    openModalSNew: (state) => {
      state.openSNew = true;
    },
    hideModalSNew: (state) => {
      state.openSNew = false;
    },
  },
});

export const { openModalAdd, hideModalAdd, openModalSNew, hideModalSNew } =
  addStudentModal.actions;

export default addStudentModal.reducer;

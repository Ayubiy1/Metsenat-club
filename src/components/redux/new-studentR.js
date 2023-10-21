import { createSlice } from "@reduxjs/toolkit";
import StudentData from "../data/students-data";
import SponsorsData from "../data/sponsors-data";

const AddStudent = createSlice({
  name: "newStudent",
  initialState: {
    studentData: StudentData,
    sponsorsData: SponsorsData,
    sponserIndex: 0,
  },
  reducers: {
    setStudentsData: (state, action) => {
      state.studentData = [action.payload, ...state.studentData];
    },
    setEditStudentsData: (state, action) => {
      state.studentData[action.payload.index] = action.payload.newData;
    },

    setEditStudentsDataAddSponser: (state, action) => {
      const { index, newData } = action.payload;

      const editedStudent = state.studentData[index];

      editedStudent.sponses.push(newData);

      state.studentData[index] = editedStudent;
    },

    setEditSponserData: (state, action) => {
      state.sponsorsData[state.sponserIndex] = action.payload.newData;
    },
    setPponserIndex: (state, action) => {
      state.sponserIndex = action.payload;
    },
  },
});

export const {
  setStudentsData,
  setEditStudentsData,
  setEditStudentsDataAddSponser,
  setEditSponserData,
  setPponserIndex,
} = AddStudent.actions;

export default AddStudent.reducer;

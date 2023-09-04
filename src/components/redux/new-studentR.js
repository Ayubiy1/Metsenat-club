import { createSlice } from "@reduxjs/toolkit";
import StudentData from "../data/students-data";

const AddStudent = createSlice({
  name: "newStudent",
  initialState: {
    studentData: StudentData,
  },
  reducers: {
    setStudentsData: (state, action) => {
      state.studentData = [action.payload, ...state.studentData];
    },
  },
});

export const { setStudentsData } = AddStudent.actions;

export default AddStudent.reducer;

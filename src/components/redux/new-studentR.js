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
    setEditStudentsData: (state, action) => {
      state.studentData[action.payload.index] = action.payload.newData;
    },
    setEditStudentsDataAddSponser: (state, action) => {
      // console.log(action.payload);
      console.log(state.studentData[action.payload.index]);
    },
  },
});

export const {
  setStudentsData,
  setEditStudentsData,
  setEditStudentsDataAddSponser,
} = AddStudent.actions;

export default AddStudent.reducer;

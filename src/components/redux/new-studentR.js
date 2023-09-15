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
      const { index, newData } = action.payload;

      // O'zgartirilgan student obyektini olish
      const editedStudent = state.studentData[index];

      // Yangi sponsorlikni o'zgartirilgan student obyektining `sponses` ga qo'shish
      editedStudent.sponses.push(newData);

      state.studentData[index] = editedStudent;
    },
  },
});

export const {
  setStudentsData,
  setEditStudentsData,
  setEditStudentsDataAddSponser,
} = AddStudent.actions;

export default AddStudent.reducer;

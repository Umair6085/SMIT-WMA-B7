import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      name: "Ali Ahmad",
      fatherName: "Ahmad Hasan",
      email: "aliahmad@example.com",
      rollNo: "101",
      courseName: "BSCS",
    },
  ],
};
export const addStudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const { name, fatherName, email, rollNo, courseName } = action.payload;
      const newStudent = {
        id: state.students.length + 1,
        rollNo,
        name,
        fatherName,
        courseName,
        email,
      };
      state.students.push(newStudent);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      const {id, name, fatherName, email, rollNo , courseName} = action.payload
      const existingStudent = state.students.find(student => student.id === id)
      if (existingStudent) {
        existingStudent.name = name
        existingStudent.fatherName = fatherName
        existingStudent.courseName = courseName
        existingStudent.email = email
        existingStudent.rollNo = rollNo
      }
    }
  },
});

export const {addStudent, removeStudent, updateStudent} = addStudentSlice.actions;
export default addStudentSlice.reducer;
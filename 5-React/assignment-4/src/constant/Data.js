import { useState } from "react";
const useStudentData = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      rollNo: "A101",
      name: "Alice Johnson",
      fatherName: "Robert Johnson",
      course: "BSCS",
      email: "alice.johnson@example.com",
    },
    {
      id: 2,
      rollNo: "A102",
      name: "Michael Smith",
      fatherName: "David Smith",
      course: "BSSE",
      email: "michael.smith@example.com",
    },
    {
      id: 3,
      rollNo: "A103",
      name: "Sophia Brown",
      fatherName: "James Brown",
      course: "BSIT",
      email: "sophia.brown@example.com",
    }
  ]);
  return [students, setStudents];
};
export default useStudentData;

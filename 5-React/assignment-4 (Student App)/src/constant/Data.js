import { useState } from "react";
const useStudentData = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      rollNo: "0001",
      name: "Ali Usman",
      fatherName: "Muhammad Usman",
      course: "MSC",
      email: "ali.usman@example.com",
    },
    {
      id: 2,
      rollNo: "0103",
      name: "Majid Hussain",
      fatherName: "Hussain Siddique",
      course: "BSSE",
      email: "majid.hussain@example.com",
    },
    {
      id: 3,
      rollNo: "0364",
      name: "Muhammad Umair",
      fatherName: "Muhammad Yasin",
      course: "BSCS",
      email: "umairyasin744@gmail.com",
    }
  ]);
  return [students, setStudents];
};
export default useStudentData;
